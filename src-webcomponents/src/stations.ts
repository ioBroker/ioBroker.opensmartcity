/**
 * The stations of an instance as the map shows them - pure logic, no DOM.
 *
 * The adapter creates for every selected thing of the FROST server a channel `opensmartcity.<n>.<thingId>` with
 * `native.coordinates` (`[longitude, latitude]` of the observed area), a `number` state per data stream below it and
 * the `boolean` state `status` (`indicator.reachable`). The vis-2 widget reads the same.
 */

/** A data stream of a station: one measured value */
export interface StationStream {
    /** ID of the state */
    id: string;
    name: string;
    description: string;
    unit: string;
    /** null while the stream has no value */
    value: number | null;
    /** When the value was measured, in ms; 0 if unknown */
    ts: number;
}

/** A station: a channel of the instance with a location */
export interface Station {
    /** ID of the channel */
    id: string;
    name: string;
    description: string;
    latitude: number;
    longitude: number;
    /** false if the FROST server reports the thing as not online, null while unknown */
    online: boolean | null;
    streams: StationStream[];
}

/** What the instance has: its channels and the states below them, by ID */
export interface InstanceObjects {
    channels: Record<string, ioBroker.Object | null | undefined>;
    states: Record<string, ioBroker.Object | null | undefined>;
}

/** The last part of an ID: the state below a channel */
const STATUS = 'status';

/**
 * A text of an object in a language
 *
 * @param text a string or `{ en, de, ... }`
 * @param lang the language
 */
export function toText(text: ioBroker.StringOrTranslated | undefined | null, lang: ioBroker.Languages): string {
    if (!text) {
        return '';
    }
    if (typeof text === 'object') {
        return text[lang] || text.en || Object.values(text).find(value => !!value) || '';
    }
    return String(text);
}

/**
 * The location of a channel: `native.coordinates` is `[longitude, latitude]` of a point - or, for an observed area
 * that is no point, nested lists of such pairs, of which the first is taken
 *
 * @param coordinates `native.coordinates` of the channel
 * @returns `[latitude, longitude]`, or null if there is no valid location
 */
export function getLocation(coordinates: unknown): [number, number] | null {
    let pair: unknown = coordinates;
    // a polygon or a line: the first point
    while (Array.isArray(pair) && Array.isArray(pair[0])) {
        pair = pair[0];
    }
    if (!Array.isArray(pair) || pair.length < 2) {
        return null;
    }
    const longitude = Number(pair[0]);
    const latitude = Number(pair[1]);
    if (
        !Number.isFinite(longitude) ||
        !Number.isFinite(latitude) ||
        Math.abs(latitude) > 90 ||
        Math.abs(longitude) > 180 ||
        (!latitude && !longitude)
    ) {
        return null;
    }
    return [latitude, longitude];
}

/**
 * The location of the system (`system.config`), where the vis-2 widget shows "home"
 *
 * @param config the object `system.config`
 * @returns `[latitude, longitude]`, or null if the system has no location
 */
export function getHomeLocation(config: ioBroker.Object | null | undefined): [number, number] | null {
    const common = config?.common as { latitude?: number | string; longitude?: number | string } | undefined;
    if (!common || common.latitude === undefined || common.longitude === undefined) {
        return null;
    }
    if (common.latitude === '' || common.longitude === '') {
        return null;
    }
    return getLocation([common.longitude, common.latitude]);
}

/**
 * The location of a channel of the instance
 *
 * @param channel the object of the channel
 * @returns `[latitude, longitude]`, or null if it is no station with a location
 */
function getChannelLocation(channel: ioBroker.Object | null | undefined): [number, number] | null {
    return channel?.type === 'channel'
        ? getLocation((channel.native as { coordinates?: unknown } | undefined)?.coordinates)
        : null;
}

/**
 * The channels of the instance that are stations with a location - the adapter never changes a channel it created,
 * so one without a location stays without
 *
 * @param objects the objects of the instance
 * @param instance e.g. `opensmartcity.0`
 * @returns their IDs, sorted
 */
export function getStationIds(objects: InstanceObjects, instance: string): string[] {
    const prefix = `${instance}.`;
    return Object.keys(objects.channels)
        .filter(id => id.startsWith(prefix) && getChannelLocation(objects.channels[id]))
        .sort();
}

/**
 * The states of a station: its data streams and `status`, direct children of the channel
 *
 * @param objects the objects of the instance
 * @param channel ID of the channel
 */
export function getStationStateIds(
    objects: InstanceObjects,
    channel: string,
): { streams: string[]; status: string | null } {
    const prefix = `${channel}.`;
    const streams: string[] = [];
    let status: string | null = null;
    for (const id of Object.keys(objects.states)) {
        if (!id.startsWith(prefix) || id.includes('.', prefix.length) || objects.states[id]?.type !== 'state') {
            continue;
        }
        if (id.substring(prefix.length) === STATUS) {
            status = id;
        } else {
            streams.push(id);
        }
    }
    // the IDs of the data streams are numbers of the FROST server
    streams.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    return { streams, status };
}

/**
 * The stations to show: the channels with a location, with their data streams and their values
 *
 * @param objects the objects of the instance - the current ones, as far as they arrived
 * @param states the values of the states, by ID
 * @param instance e.g. `opensmartcity.0`
 * @param lang the language of the names
 */
export function buildStations(
    objects: InstanceObjects,
    states: Record<string, ioBroker.State | null | undefined>,
    instance: string,
    lang: ioBroker.Languages,
): Station[] {
    const stations: Station[] = [];
    for (const id of getStationIds(objects, instance)) {
        const channel = objects.channels[id];
        const location = getChannelLocation(channel);
        if (!channel || !location) {
            continue;
        }
        const { streams, status } = getStationStateIds(objects, id);
        const statusValue = status ? states[status]?.val : undefined;
        stations.push({
            id,
            name: toText(channel.common.name, lang) || id.substring(instance.length + 1),
            description: toText(channel.common.desc, lang),
            latitude: location[0],
            longitude: location[1],
            online: statusValue === undefined || statusValue === null ? null : !!statusValue,
            streams: streams.map(streamId => {
                const obj = objects.states[streamId];
                const state = states[streamId];
                const value =
                    state?.val === null || state?.val === undefined || state.val === '' ? NaN : Number(state.val);
                return {
                    id: streamId,
                    name: toText(obj?.common.name, lang) || streamId.split('.').pop() || '',
                    description: toText(obj?.common.desc, lang),
                    unit: (obj?.common as ioBroker.StateCommon | undefined)?.unit || '',
                    value: Number.isFinite(value) ? value : null,
                    ts: state?.ts || 0,
                };
            }),
        });
    }
    return stations;
}

/**
 * A measured value with its unit, rounded to one decimal like the vis-2 widget
 *
 * @param value the value
 * @param unit its unit
 * @param lang the language of the system, for the decimal separator
 */
export function formatValue(value: number, unit: string, lang: ioBroker.Languages): string {
    let text: string;
    try {
        text = new Intl.NumberFormat(lang === 'zh-cn' ? 'zh-CN' : lang, { maximumFractionDigits: 1 }).format(value);
    } catch {
        text = String(Math.round(value * 10) / 10);
    }
    // a no-break space: the unit stays with its value
    return unit ? `${text}${String.fromCharCode(0xa0)}${unit}` : text;
}

/**
 * A key of what decides the section of the map: the locations and what is to be fitted in
 *
 * @param points the locations, `[latitude, longitude]`
 * @param zoomLevel the zoom level of the settings, 0 to fit the points in
 */
export function getViewKey(points: readonly (readonly [number, number])[], zoomLevel: number): string {
    return `${zoomLevel}|${points.map(point => point.join(',')).join(';')}`;
}
