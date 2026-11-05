/*!
 * ioBroker build tasks, replaces gulpfile.js and gulpfileWidgets.js
 *
 *   tsx tasks.ts                  backend + admin + widgets
 *   tsx tasks.ts --backend-build  only the backend (src/ -> build/), same as `npm run build-backend`
 *   tsx tasks.ts --admin-build    only the admin (src-admin/ -> admin/)
 *   tsx tasks.ts --widget-build   only the vis-2 widgets (src-widgets/ -> widgets/opensmartcity/)
 *
 * The single steps (--0-clean ... --4-patch for the admin, --0-widget-clean ... --3-widget-copy for the widgets)
 * exist to repeat exactly one stage when a GUI build fails.
 */
import { copyFileSync, existsSync } from 'node:fs';
import { fork } from 'node:child_process';
import { buildReact, copyFiles, deleteFoldersRecursive, npmInstall, patchHtmlFile } from '@iobroker/build-tools';

import { name } from './package.json';

const adapterName = name.replace('iobroker.', '');
const srcAdmin = `${__dirname}/src-admin/`;
const srcWidgets = `${__dirname}/src-widgets/`;

// --------------------------------------- backend ---------------------------------------
/** Compile the adapter backend: src/*.ts => build/*.js */
function buildBackend(): Promise<void> {
    deleteFoldersRecursive(`${__dirname}/build`);

    return new Promise((resolve, reject) => {
        const script = `${__dirname}/node_modules/typescript/bin/tsc`;
        if (!existsSync(script)) {
            reject(new Error(`Cannot find execution file: ${script}`));
            return;
        }
        const child = fork(script, ['-p', `${__dirname}/tsconfig.build.json`], { stdio: 'pipe', cwd: __dirname });
        child.stdout?.on('data', (data: Buffer) => console.log(data.toString()));
        child.stderr?.on('data', (data: Buffer) => console.error(data.toString()));
        child.on('close', code => (code ? reject(new Error(`tsc exit code: ${code}`)) : resolve()));
    });
}

// ---------------------------------------- admin ----------------------------------------
function cleanAdmin(): void {
    // admin/ holds only the build output of src-admin/ and the adapter icon
    deleteFoldersRecursive(`${__dirname}/admin`, [`${adapterName}.png`]);
    deleteFoldersRecursive(`${srcAdmin}build`);
}

function npmInstallAdmin(): Promise<void> {
    // as in the former gulpfile: an existing installation is kept (`npm run npm` updates it)
    if (existsSync(`${srcAdmin}node_modules`)) {
        return Promise.resolve();
    }
    return npmInstall(srcAdmin);
}

function buildAdmin(): Promise<void> {
    // `rootDir` makes the build take over the version from the root package.json
    return buildReact(srcAdmin, { rootDir: __dirname, vite: true, tsc: true });
}

function copyAllFilesAdmin(): void {
    // index.html is not copied here, but patched and stored as `admin/index_m.html`
    copyFiles(['src-admin/build/**/*', '!src-admin/build/index.html'], 'admin/');
}

async function patchAdmin(): Promise<void> {
    // Replaces the socket.io loader of index.html with a static <script> tag. The page is served as
    // /adapter/opensmartcity/index_m.html, so socket.io.js of the admin is two levels up (as in the former gulpfile).
    await patchHtmlFile(`${srcAdmin}build/index.html`, '../..');
    copyFileSync(`${srcAdmin}build/index.html`, `${__dirname}/admin/index_m.html`);
}

async function adminBuild(): Promise<void> {
    cleanAdmin();
    await npmInstallAdmin();
    await buildAdmin();
    copyAllFilesAdmin();
    await patchAdmin();
}

// --------------------------------------- widgets ---------------------------------------
function cleanWidgets(): void {
    // the copy step only adds files, so the chunks of a previous build would stay in `widgets/`
    deleteFoldersRecursive(`${__dirname}/widgets`);
    deleteFoldersRecursive(`${srcWidgets}build`);
}

function npmInstallWidgets(): Promise<void> {
    return npmInstall(srcWidgets);
}

function buildWidgets(): Promise<void> {
    // tsc checks the syntax of the sources first, then vite builds the bundle
    return buildReact(srcWidgets, { rootDir: __dirname, vite: true, tsc: true });
}

function copyAllFilesWidgets(): void {
    // Copy the Vite output into `widgets/<adapter>/`, which is what vis-2 loads at runtime (`common.visWidgets` in io-package.json)
    copyFiles(
        [
            'src-widgets/build/**/*',
            // Entry page of the stand-alone dev server, not part of the widget set
            '!src-widgets/build/index.html',
            // Statistics of the federation build. `mf-manifest.json` is NOT excluded: vis-2 reads it to see
            // which modules this widget set shares, and refuses a set that does not share `react/jsx-runtime`.
            '!src-widgets/build/mf-stats.json',
        ],
        `widgets/${adapterName}`,
    );
    // Keep the standalone i18n files alongside the widgets
    copyFiles(['src-widgets/src/i18n/*.json'], `widgets/${adapterName}/i18n`);
}

async function widgetBuild(): Promise<void> {
    cleanWidgets();
    await npmInstallWidgets();
    await buildWidgets();
    copyAllFilesWidgets();
}

// ---------------------------------------- tasks ----------------------------------------
function onError(e: unknown): never {
    console.error(`Cannot build: ${e as Error}`);
    process.exit(1);
}

if (process.argv.includes('--backend-build')) {
    buildBackend().catch(onError);
} else if (process.argv.includes('--0-clean')) {
    cleanAdmin();
} else if (process.argv.includes('--1-npm')) {
    npmInstallAdmin().catch(onError);
} else if (process.argv.includes('--2-build')) {
    buildAdmin().catch(onError);
} else if (process.argv.includes('--3-copy')) {
    copyAllFilesAdmin();
} else if (process.argv.includes('--4-patch')) {
    patchAdmin().catch(onError);
} else if (process.argv.includes('--admin-build')) {
    adminBuild().catch(onError);
} else if (process.argv.includes('--0-widget-clean')) {
    cleanWidgets();
} else if (process.argv.includes('--1-widget-npm')) {
    npmInstallWidgets().catch(onError);
} else if (process.argv.includes('--2-widget-build')) {
    buildWidgets().catch(onError);
} else if (process.argv.includes('--3-widget-copy')) {
    copyAllFilesWidgets();
} else if (process.argv.includes('--widget-build')) {
    widgetBuild().catch(onError);
} else {
    buildBackend()
        .then(() => adminBuild())
        .then(() => widgetBuild())
        .catch(onError);
}
