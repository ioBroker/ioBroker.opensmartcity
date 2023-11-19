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
const axios = require('axios');
const BASE_URL = 'https://frost.solingen.de:8443/FROST-Server/v1.1/';

let adapter;

function startAdapter(options) {
    options = options || {};
    Object.assign(options, {name: adapterName});

    adapter = new utils.Adapter(options);

    adapter.on('ready', ready);
    adapter.on('message', obj => obj && processMessage(obj));

    return adapter;
}

async function getUrl(pathName) {
    const url = BASE_URL + pathName;
    try {
        const headers = {
            Authorization: `Basic ${Buffer.from(`${adapter.config.user}:${adapter.config.password}`).toString('base64')}`,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'de-DE,de;q=0.9,de-DE;q=0.8,de;q=0.7,en-US;q=0.6,en;q=0.5',
            'Cache-Control': 'max-age=0',
            'Host': 'frost.solingen.de:8443',
        };
        const response = await axios(url, {
            headers
        });
        return response.data;
    } catch (e) {
        adapter.log.error(`Cannot get url ${url}: ${e}`);
        return null;
    }
}

async function processMessage(obj) {
    if (obj.command === 'getThings') {
        const result = await getUrl('Things');
        adapter.sendTo(obj.from, obj.command, { result }, obj.callback);
    }
}

async function getThingsData(id) {
    return 10;
}

async function ready() {
    // sync data

}

// If started as allInOne/compact mode => return function to create instance
if (typeof module !== undefined && module.parent) {
    module.exports = startAdapter;
} else {
    // or start the instance directly
    startAdapter();
}
