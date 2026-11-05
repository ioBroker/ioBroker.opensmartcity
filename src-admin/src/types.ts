/** `native` of the instance, see io-package.json and src/lib/adapter-config.d.ts of the backend */
export interface OpenSmartCityNative {
    city: string;
    url: string;
    user: string;
    password: string;
    /** The input field stores the value as string */
    pollInterval: number | string;
    /** IDs of the selected things (`@iot.id` as string) */
    things: string[];
}

/** Data stream of the FROST server, as far as the admin reads it (answer of the `getThings` command) */
export interface FrostDatastream {
    '@iot.id': number | string;
    name: string;
    description?: string;
    unitOfMeasurement?: { name?: string; symbol?: string };
    /** GeoJSON geometry, for a point `[longitude, latitude]` */
    observedArea?: { coordinates?: number[] } | null;
    /** Interval "start/end" (ISO 8601) */
    phenomenonTime?: string | null;
}

/** Thing of the FROST server, as far as the admin reads it (answer of the `getThings` command) */
export interface FrostThing {
    '@iot.id': number | string;
    name: string;
    description?: string;
    properties?: { status?: string };
    Datastreams?: FrostDatastream[];
}

export interface DataStreamInfo {
    id: string;
    name: string;
    description?: string;
    unit?: string;
    value?: ioBroker.StateValue;
}

/** A thing as shown in the admin: merged from the objects of the instance and the answer of the FROST server */
export interface ThingInfo {
    id: string;
    name: ioBroker.StringOrTranslated;
    description?: ioBroker.StringOrTranslated;
    /** `[longitude, latitude]` */
    coordinates?: number[] | null;
    dataStreams: DataStreamInfo[];
    /** "online", "offline" or null if unknown */
    status: string | null | undefined;
    /** Time of the last value in ms */
    time?: number;
}

/** A thing with coordinates, as shown on the map */
export interface MapThing {
    longitude: number;
    latitude: number;
    name: ioBroker.StringOrTranslated;
    description?: ioBroker.StringOrTranslated;
    time?: number;
    dataStreams: DataStreamInfo[];
}
