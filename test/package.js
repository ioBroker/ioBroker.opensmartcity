const assert = require('node:assert');
const path = require('node:path');
const { tests } = require('@iobroker/testing');

// Validate the package files
tests.packageFiles(path.join(__dirname, '..'));

describe('vis-2 widgets', () => {
    // Vite builds customWidgets.js as an ES module; without bundlerType vis-2 loads it as a classic script, which fails
    it('are declared as an ES module', () => {
        const { visWidgets } = require('../io-package.json').common;
        for (const [name, set] of Object.entries(visWidgets)) {
            assert.strictEqual(set.bundlerType, 'module', `common.visWidgets.${name}.bundlerType must be "module"`);
        }
    });
});
