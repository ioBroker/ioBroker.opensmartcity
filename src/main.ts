/**
 * ioBroker.opensmartcity
 *
 * Reads sensor values (things, data streams and their latest observations) from a FROST server
 * (OGC SensorThings API v1.1), e.g. the one of the city of Solingen, and mirrors them as states.
 *
 * MIT License
 */
import * as utils from '@iobroker/adapter-core';
import axios, { type AxiosResponse } from 'axios';

import type { FrostCollection, FrostDatastream, FrostThing } from './lib/types';

const DEFAULT_URL = 'https://frost.solingen.de:8443/FROST-Server/v1.1/';

/** All things, that are still in use, together with their data streams. Answer of the `getThings` command. */
const THINGS_QUERY = "Things?$filter=properties/status ne 'decommissioned'&$expand=Datastreams";

class OpenSmartCityAdapter extends utils.Adapter {
    private pollTimer: ioBroker.Timeout | null | undefined = null;

    /** Poll interval in ms, taken from `config.pollInterval` in onReady() */
    private pollInterval = 15000;

    /** Cached answer of THINGS_QUERY, served to the admin via the `getThings` command */
    private lastResult: FrostThing[] | null = null;

    public constructor(options: Partial<utils.AdapterOptions> = {}) {
        super({ ...options, name: 'opensmartcity' });

        this.on('ready', () => this.onReady());
        this.on('message', obj => this.onMessage(obj));
        this.on('unload', callback => this.onUnload(callback));
    }

    /**
     * Reads a collection from the FROST server and follows `@iot.nextLink` until the last page.
     *
     * Returns null if the URL is invalid. On a request error the items read so far are returned
     * (an empty list if the first page already failed) - the error is only logged.
     */
    private async getUrl<T>(pathName: string): Promise<T[] | null> {
        const url = this.config.url + pathName;
        let headers: Record<string, string>;
        try {
            const parts = new URL(url);

            headers = {
                Authorization: `Basic ${Buffer.from(`${this.config.user}:${this.config.password}`).toString('base64')}`,
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
                Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'de-DE,de;q=0.9,de-DE;q=0.8,de;q=0.7,en-US;q=0.6,en;q=0.5',
                'Cache-Control': 'max-age=0',
                Host: parts.host,
            };
        } catch (e) {
            this.log.error(`Cannot get url ${url}: ${(e as Error).message}`);
            return null;
        }

        let result: T[] = [];
        let nextUrl: string | undefined = url;
        while (nextUrl) {
            try {
                const response: AxiosResponse<FrostCollection<T>> = await axios.get<FrostCollection<T>>(nextUrl, {
                    headers,
                    timeout: 30000,
                });
                if (response.data?.value) {
                    result = result.concat(response.data.value);
                }
                nextUrl = response.data?.['@iot.nextLink'];
            } catch (e) {
                this.log.error(`Cannot get url ${nextUrl}: ${(e as Error).message}`);
                break;
            }
        }
        return result;
    }

    private async onMessage(obj: ioBroker.Message | null | undefined): Promise<void> {
        // The command name is used by the admin (src-admin/src/Tabs/Sensors.tsx), do not rename it
        if (obj?.command === 'getThings') {
            if (!this.lastResult) {
                const result = await this.getUrl<FrostThing>(THINGS_QUERY);
                // an empty list is what getUrl() returns on a connection error: do not cache it, ask the server next time again
                if (result?.length) {
                    this.lastResult = result;
                }
                this.sendTo(obj.from, obj.command, { result }, obj.callback);
            } else {
                this.sendTo(obj.from, obj.command, { result: this.lastResult }, obj.callback);
            }
        }
    }

    /** Reads the latest observation of every data stream of the selected things and schedules the next poll */
    private async getData(): Promise<void> {
        if (this.pollTimer) {
            this.clearTimeout(this.pollTimer);
        }
        this.pollTimer = null;

        const things = this.config.things.map(id => `Thing/@iot.id eq ${id}`).join(' or ');
        if (!things) {
            return;
        }
        const result = await this.getUrl<FrostDatastream>(
            'Datastreams' +
                '?$expand=Thing($select=@iot.id,properties/status),Observations($top=1;$orderby=phenomenonTime desc)' +
                `&$filter=phenomenonTime ne null and (${things})`,
        );
        if (!result) {
            return;
        }

        for (const ds of result) {
            const observation = ds?.Observations?.[0];
            // `Thing` is always there, because it is expanded in the query
            if (observation && ds.Thing) {
                const dsId = ds['@iot.id'];
                const thingId = ds.Thing['@iot.id'];
                const time = observation.phenomenonTime || observation.resultTime;
                const ts = time ? new Date(time) : new Date();
                await this.setState(`${thingId}.${dsId}`, { val: observation.result, ack: true, ts: ts.getTime() });
            }
        }

        this.pollTimer = this.setTimeout(() => {
            this.pollTimer = null;
            void this.getData();
        }, this.pollInterval);
    }

    /**
     * Creates a channel for every selected thing, a state for each of its data streams and the `status` state.
     * Existing objects are not updated.
     */
    private async createStates(): Promise<void> {
        const result = await this.getUrl<FrostThing>(THINGS_QUERY);
        if (!result) {
            return;
        }
        // an empty list is what getUrl() returns on a connection error: do not cache it, ask the server next time again
        if (result.length) {
            this.lastResult = result;
        }
        for (const id of this.config.things) {
            const thing = result.find(item => item['@iot.id'].toString() === id);
            if (!thing) {
                continue;
            }
            const streamWithCoordinates = thing.Datastreams?.find(ds => ds.observedArea?.coordinates);

            // The data streams of one thing are named like "Solingen Zentrum (Temperatur)".
            // The part before the brackets goes into the channel name, the part in the brackets is the state name.
            let commonPart: string | undefined;
            for (const ds of thing.Datastreams || []) {
                const m = (ds.name || '').trim().match(/(.*)\((.*)\)/);
                if (m) {
                    commonPart = m[1].trim();
                    break;
                }
            }

            // create the channel, if it does not exist
            const channel = await this.getObjectAsync(id);
            if (!channel) {
                const channelObj: ioBroker.ChannelObject = {
                    _id: id,
                    type: 'channel',
                    common: {
                        name: thing.name + (commonPart ? ` (${commonPart})` : ''),
                        desc: thing.description,
                    },
                    native: {
                        coordinates: streamWithCoordinates?.observedArea?.coordinates || null,
                    },
                };
                await this.setObject(id, channelObj);
            }

            for (const ds of thing.Datastreams || []) {
                const stateId = `${id}.${ds['@iot.id']}`;
                const state = await this.getObjectAsync(stateId);
                if (!state) {
                    let unit = ds.unitOfMeasurement?.symbol || ds.unitOfMeasurement?.name;
                    if (unit === '°') {
                        unit = '°C';
                    }
                    const stateObj: ioBroker.StateObject = {
                        _id: stateId,
                        type: 'state',
                        common: {
                            name: commonPart
                                ? ds.name.replace(commonPart, '').trim().replace(/^\(/, '').replace(/\)$/, '')
                                : ds.name,
                            type: 'number',
                            role: 'value',
                            read: true,
                            write: false,
                            unit,
                            desc: ds.description,
                        },
                        native: {},
                    };
                    await this.setObject(stateId, stateObj);
                }
            }

            const status = await this.getObjectAsync(`${id}.status`);
            if (!status) {
                const statusObj: ioBroker.StateObject = {
                    _id: `${id}.status`,
                    type: 'state',
                    common: {
                        name: 'Status',
                        type: 'boolean',
                        role: 'indicator.reachable',
                        read: true,
                        write: false,
                        desc: 'Connection status of the thing',
                    },
                    native: {},
                };
                await this.setObject(`${id}.status`, statusObj);
            }
            await this.setState(`${id}.status`, { val: thing.properties?.status === 'online', ack: true });
        }
    }

    private async onReady(): Promise<void> {
        this.config.url = this.config.url || DEFAULT_URL;
        this.config.things = this.config.things || [];
        // create channels and states
        await this.createStates();

        this.pollInterval = parseInt(String(this.config.pollInterval), 10) || 15000;
        if (this.pollInterval < 5000) {
            this.pollInterval = 5000;
        }

        await this.getData();
    }

    private onUnload(callback: () => void): void {
        try {
            if (this.pollTimer) {
                this.clearTimeout(this.pollTimer);
                this.pollTimer = null;
            }
        } catch {
            // ignore
        }
        callback();
    }
}

if (require.main !== module) {
    // Export the constructor in compact mode
    module.exports = (options: Partial<utils.AdapterOptions> | undefined) => new OpenSmartCityAdapter(options);
} else {
    // otherwise start the instance directly
    (() => new OpenSmartCityAdapter())();
}
