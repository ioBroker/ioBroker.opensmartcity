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

let adapter;
const checked = {}
let interval;
let lastResult;

function startAdapter(options) {
    options = options || {};
    Object.assign(options, {name: adapterName});

    adapter = new utils.Adapter(options);

    adapter.on('ready', ready);
    adapter.on('unload', cb => {
        interval && clearInterval(interval);
        cb && cb();
    });
    adapter.on('message', obj => obj && processMessage(obj));

    return adapter;
}

async function getUrl(pathName) {
    const url = adapter.config.url + pathName;
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
        if (!lastResult) {
            const result = await getUrl('Datastreams?$expand=Thing,Observations($top=1;$orderby=phenomenonTime desc)');
            adapter.sendTo(obj.from, obj.command, { result }, obj.callback);
        } else {
            adapter.sendTo(obj.from, obj.command, { result: lastResult }, obj.callback);
        }
    }
}

async function getData() {
    const result = await getUrl('Datastreams?$expand=Thing,Observations($top=1;$orderby=phenomenonTime desc)');
    lastResult = result;

    for (let s = 0; s < adapter.config.sensors.length; s++) {
        const id = adapter.config.sensors[s];
        const item = result.value.find(item => item['@iot.id'] === id);
        // create or update state
        if (!checked[id] && item) {
            let obj = await adapter.getObjectAsync(id.toString());
            if (!obj) {
                if (item.unitOfMeasurement?.symbol === '°') {
                    item.unitOfMeasurement.symbol = '°C';
                }
                obj = {
                    _id: id.toString(),
                    type: 'state',
                    common: {
                        name: item.name,
                        type: 'number',
                        role: 'value',
                        read: true,
                        write: false,
                        unit: item.unitOfMeasurement?.symbol || item.unitOfMeasurement?.name,
                        desc: item.description,
                    },
                    native: {
                        coordinates: item.observedArea.coordinates,
                        type: item.observationType.split('/').pop(),
                    }
                };
                await adapter.setObjectAsync(id.toString(), obj);
            }
            checked[id] = true;
        }
        if (item && item.Observations && item.Observations[0] && item.Observations[0].result) {
            const ts = item.Observations[0].phenomenonTime ? new Date(item.Observations[0].phenomenonTime) : new Date();
            adapter.setState(id.toString(), { val: item.Observations[0].result, ack: true, ts: ts.getTime() });
        }
    }
}

async function ready() {
    adapter.config.pollInterval = parseInt(adapter.config.interval, 10) || 15000;
    if (adapter.config.pollInterval < 5000) {
        adapter.config.pollInterval = 5000;
    }
    await getData();
    // sync data
    interval = setInterval(getData, adapter.config.pollInterval);
}

// If started as allInOne/compact mode => return function to create instance
if (typeof module !== undefined && module.parent) {
    module.exports = startAdapter;
} else {
    // or start the instance directly
    startAdapter();
}
