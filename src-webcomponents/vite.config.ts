import { checkManifest, type WebComponentText } from '@iobroker/web-components';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import type { Plugin } from 'vite';

// with the extension: Vite may load its config natively, without a bundler that would add it
import { buildManifest, MANIFEST_FILE, MODULE_FILE } from './src/manifest.ts';

/**
 * The web component `<iob-opensmartcity-map>`: one ES module, `admin/webcomponents/opensmartcity-map.js`, and its
 * manifest `opensmartcity-map.json` next to it (`common.webComponents`). Every host - vis-2, devices, Aura, admin -
 * reads them from `/adapter/opensmartcity/webcomponents/`. No module federation: the host shares nothing but the
 * socket.
 *
 * The element is plain DOM with Leaflet: Leaflet and its CSS are bundled into the module, React is not used.
 */

const LANGUAGES: ioBroker.Languages[] = ['en', 'de', 'ru', 'pt', 'nl', 'fr', 'it', 'es', 'pl', 'uk', 'zh-cn'];

/** The word of the vis-2 widget for its name (`visWidgetLabel`, without the prefix `opensmartcity_`) */
const VIS_NAME = 'OpenSmartCityMap';

function readJson<T>(path: string): T {
    return JSON.parse(readFileSync(new URL(path, import.meta.url), 'utf8')) as T;
}

/**
 * A word of the dictionary of the vis-2 widget, in every language
 *
 * @param key the word
 */
function visWord(key: string): WebComponentText {
    const text: Partial<Record<ioBroker.Languages, string>> = {};
    for (const lang of LANGUAGES) {
        const words = readJson<Record<string, string>>(`../src-widgets/src/i18n/${lang}.json`);
        if (!words[key]) {
            throw new Error(`src-widgets/src/i18n/${lang}.json has no "${key}"`);
        }
        text[lang] = words[key];
    }
    return text as WebComponentText;
}

/** Writes `opensmartcity-map.json` next to the module, checked like a host checks it, and checks the module is one file */
function manifestFile(): Plugin {
    return {
        name: 'opensmartcity-web-component-manifest',
        generateBundle(_options, bundle) {
            // a host imports exactly one URL: no chunk, no CSS file, no image beside the module
            const others = Object.keys(bundle).filter(fileName => fileName !== MODULE_FILE);
            if (others.length) {
                this.error(`The module must be one file, but the build wrote ${others.join(', ')} too`);
            }
            let manifest;
            try {
                manifest = buildManifest({ name: visWord(VIS_NAME) });
            } catch (e) {
                this.error(`${MANIFEST_FILE}: ${(e as Error).message}`);
            }
            const problem = checkManifest(manifest);
            if (problem) {
                this.error(`${MANIFEST_FILE}: ${problem}`);
            }
            this.emitFile({
                type: 'asset',
                fileName: MANIFEST_FILE,
                source: `${JSON.stringify(manifest, null, 4)}\n`,
            });
        },
    };
}

/**
 * The default marker and the layer switcher of Leaflet are not used: without their images in its CSS, they are not
 * inlined into the module
 */
function leafletCssWithoutImages(): Plugin {
    return {
        name: 'opensmartcity-leaflet-css',
        enforce: 'pre',
        transform(code, id) {
            if (/leaflet[\\/]dist[\\/]leaflet\.css/.test(id)) {
                return { code: code.replace(/background-image:\s*url\(images\/[^)]+\);?/g, ''), map: null };
            }
            return null;
        },
    };
}

export default {
    plugins: [leafletCssWithoutImages(), manifestFile()],
    resolve: {
        alias: [
            // the ES module of Leaflet: its UMD build (`main`) would set the global `L` of the page
            {
                find: /^leaflet$/,
                replacement: fileURLToPath(new URL('./node_modules/leaflet/dist/leaflet-src.esm.js', import.meta.url)),
            },
        ],
    },
    build: {
        target: 'es2022',
        outDir: './build',
        emptyOutDir: true,
        lib: {
            entry: './src/index.ts',
            formats: ['es'],
            fileName: (): string => MODULE_FILE,
        },
        rollupOptions: {
            output: {
                // one file: a host imports exactly one URL
                codeSplitting: false,
                // library mode keeps whitespace for the bundler of a consumer; this module is loaded as it is
                minify: true,
            },
        },
    },
};
