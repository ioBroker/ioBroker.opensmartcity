/**
 * Copyright 2023 bluefox <dogafox@gmail.com>
 *
 * MIT License
 *
 **/
'use strict';

const { deleteFoldersRecursive, npmInstall, buildReact, copyFiles } = require('@iobroker/build-tools');
const adapterName = require('./package.json').name.split('.').pop();

const SRC = 'src-widgets/';
const src = `${__dirname}/${SRC}`;

module.exports = function init(gulp) {
    gulp.task('[widgets]clean', done => {
        deleteFoldersRecursive(`${__dirname}/widgets`);
        deleteFoldersRecursive(`${src}build`);
        done();
    });

    gulp.task('[widgets]2-npm', () => npmInstall(src));

    gulp.task('[widgets]2-npm-dep', gulp.series('[widgets]clean', '[widgets]2-npm'));

    // tsc checks the syntax of the sources first, then vite builds the bundle
    gulp.task('[widgets]3-build', () => buildReact(src, { rootDir: __dirname, vite: true, tsc: true }));

    // Starts with `[widgets]clean`: the copy step only adds files, so the chunks of a previous build would stay in `widgets/`
    gulp.task('[widgets]3-build-dep', gulp.series('[widgets]2-npm-dep', '[widgets]3-build'));

    // Copy the Vite output into `widgets/<adapter>/`, which is what vis-2 loads at runtime (`common.visWidgets` in io-package.json)
    gulp.task('[widgets]5-copy', done => {
        copyFiles(
            [
                `${SRC}build/**/*`,
                // Entry page of the stand-alone dev server, not part of the widget set
                `!${SRC}build/index.html`,
                // Statistics of the federation build. `mf-manifest.json` is NOT excluded: vis-2 reads it to see
                // which modules this widget set shares, and refuses a set that does not share `react/jsx-runtime`.
                `!${SRC}build/mf-stats.json`,
            ],
            `widgets/${adapterName}`,
        );
        // Keep the standalone i18n files alongside the widgets
        copyFiles([`${SRC}src/i18n/*.json`], `widgets/${adapterName}/i18n`);
        done();
    });

    gulp.task('[widgets]5-copy-dep', gulp.series('[widgets]3-build-dep', '[widgets]5-copy'));
};
