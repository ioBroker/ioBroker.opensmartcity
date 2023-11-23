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

async function _getOneUrl(url, options, cb, result) {
    result = result || [];
    try {
        const response = await axios(url, options);
        if (response.data && response.data.value) {
            result = result.concat(response.data.value);
        }
        if (response.data && response.data['@iot.nextLink']) {
            setImmediate(() => _getOneUrl(decresponse.data['@iot.nextLink'], options, cb, result));
        } else {
            cb && cb(null, result);
        }
    } catch (e) {
        adapter.log.error(`Cannot get url ${url}: ${e}`);
        cb && cb(e, result);
    }
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
        return new Promise(resolve =>
            _getOneUrl(url, { headers, timeout: 30000 }, ((error, result) =>
                resolve(result))));
    } catch (e) {
        adapter.log.error(`Cannot get url ${url}: ${e}`);
        return null;
    }
}

async function processMessage(obj) {
    if (obj.command === 'getThings') {
        if (!lastResult) {
            const result = await getUrl('Things?$filter=properties/status ne \'decommissioned\'&$expand=Datastreams');
            if (result) {
                lastResult = result;
            }
            adapter.sendTo(obj.from, obj.command, { result }, obj.callback);
        } else {
            adapter.sendTo(obj.from, obj.command, { result: lastResult }, obj.callback);
        }
    }
}

async function getData() {
    const things = adapter.config.things.map(id => `Thing/@iot.id eq ${id}`).join(' or ');
    if (!things) {
        return;
    }
    const result = await getUrl('Datastreams'
        + '?$expand=Thing($select=@iot.id,properties/status),Observations($top=1;$orderby=phenomenonTime desc)'
        + `&$filter=phenomenonTime ne null and (${things})`
    );
    if (!result) {
        return;
    }

    for (let i = 0; i < result.length; i++) {
        const ds = result[i];
        if (ds && ds.Observations && ds.Observations[0]) {
            const dsId = ds['@iot.id'];
            const thingId = ds.Thing['@iot.id'];
            const value = ds.Observations[0].result;
            const ts = ds.Observations[0].phenomenonTime || ds.Observations[0].resultTime ? new Date(ds.Observations[0].phenomenonTime || ds.Observations[0].resultTime) : new Date();
            await adapter.setStateAsync(`${thingId}.${dsId}`, { val: value, ack: true, ts: ts.getTime() });
        }
    }
}

async function createStates(){
    const result = await getUrl('Things?$filter=properties/status ne \'decommissioned\'&$expand=Datastreams');
    if (!result) {
        return;
    }
    lastResult = result;
    for (let t = 0; t < adapter.config.things.length; t++) {
        const id = adapter.config.things[t];
        const thing = result.find(item => item['@iot.id'].toString() === id);
        if (thing) {
            let commonPart;
            const streamWithCoordinates = thing.Datastreams?.find(ds => ds.observedArea?.coordinates);
            thing.Datastreams?.find(ds => {
                const m = (ds.name || '').trim().match(/(.*)\((.*)\)/);
                if (m) {
                    commonPart = m[1].trim();
                    return true;
                }
            });

            // create or update channel
            let obj = await adapter.getObjectAsync(id.toString());
            if (!obj) {
                obj = {
                    _id: id.toString(),
                    type: 'channel',
                    common: {
                        name: thing.name + (commonPart ? ` (${commonPart})` : ''),
                        desc: thing.description,
                    },
                    native: {
                        coordinates: streamWithCoordinates?.observedArea?.coordinates || null,
                    }
                };
                await adapter.setObjectAsync(id.toString(), obj);
            }
            if (thing.Datastreams) {
                for (let d = 0; d < thing.Datastreams.length; d++) {
                    const ds = thing.Datastreams[d];
                    let obj = await adapter.getObjectAsync(`${id}.${ds['@iot.id']}`);
                    if (!obj) {
                        let unit = ds.unitOfMeasurement?.symbol || ds.unitOfMeasurement?.name;
                        if (unit === '°') {
                            unit = '°C';
                        }
                        obj = {
                            _id: `${id}.${ds['@iot.id']}`,
                            type: 'state',
                            common: {
                                name: commonPart ? ds.name.replace(commonPart, '').trim().replace(/^\(/, '').replace(/\)$/, '') : ds.name,
                                type: 'number',
                                role: 'value',
                                read: true,
                                write: false,
                                unit,
                                desc: ds.description,
                            },
                            native: {
                            },
                        };
                        await adapter.setObjectAsync(obj._id, obj);
                    }
                }
            }

            const status = adapter.getObjectAsync(`${id}.status`);
            if (!status) {
                await adapter.setObjectAsync(`${id}.status`, {
                    _id: `${id}.status`,
                    type: 'state',
                    common: {
                        name: 'Status',
                        type: 'string',
                        role: 'indicator.reachable',
                        read: true,
                        write: false,
                        desc: 'Connection status of the thing',
                    },
                    native: {
                    },
                });
            }
            adapter.setStateAsync(`${id}.status`, { val: thing.properties?.status === 'online', ack: true });
        }
    }
}

async function ready() {
    adapter.config.things = adapter.config.things || [];
    // create channels and states
    await createStates();

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
