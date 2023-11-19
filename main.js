/* jshint -W097 */
/* jshint strict: false */
/* jslint node: true */
/* jshint esversion: 6 */
'use strict';

// For profiling: comment out the following block and connect to
// http://c4milo.github.io/node-webkit-agent/26.0.1410.65/inspector.html?host=localhost:19999&page=0
/*
var agent = require('webkit-devtools-agent');
agent.start({
    port: 19999,
    bind_to: '0.0.0.0',
    ipc_port: 13333,
    verbose: true
});
*/

// you have to require the utils module and call adapter function
const utils = require('@iobroker/adapter-core');
const adapterName = require('./package.json').name.split('.').pop();

let adapter;

function startAdapter(options) {
    options = options || {};
    Object.assign(options, {name: adapterName});

    adapter = new utils.Adapter(options);

    adapter.on('ready', ready);

    return adapter;
}

async function ready() {
}

// If started as allInOne/compact mode => return function to create instance
if (typeof module !== undefined && module.parent) {
    module.exports = startAdapter;
} else {
    // or start the instance directly
    startAdapter();
}
