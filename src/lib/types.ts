// Shapes of the FROST server (OGC SensorThings API v1.1) answers, as far as the adapter reads them.
// See docs/FROST-Server Cheat-Sheet v1.1.pdf

/** One page of a collection. The next page, if any, is under `@iot.nextLink` (absolute URL). */
export interface FrostCollection<T> {
    value?: T[];
    '@iot.nextLink'?: string;
}

export interface FrostUnitOfMeasurement {
    name?: string;
    symbol?: string;
    definition?: string;
}

export interface FrostObservation {
    /** The measured value. The servers used so far deliver numbers. */
    result: ioBroker.StateValue;
    phenomenonTime?: string | null;
    resultTime?: string | null;
}

export interface FrostDatastream {
    '@iot.id': number | string;
    name: string;
    description?: string;
    unitOfMeasurement?: FrostUnitOfMeasurement;
    /** GeoJSON geometry, for a point `[longitude, latitude]` */
    observedArea?: {
        type?: string;
        coordinates?: number[];
    } | null;
    /** Interval "start/end" (ISO 8601) */
    phenomenonTime?: string | null;
    /** Only present when expanded: `$expand=Thing(...)` */
    Thing?: {
        '@iot.id': number | string;
        properties?: { status?: string };
    };
    /** Only present when expanded: `$expand=Observations(...)` */
    Observations?: FrostObservation[];
}

export interface FrostThing {
    '@iot.id': number | string;
    name: string;
    description?: string;
    /** `status` is "online", "offline" or "decommissioned" */
    properties?: {
        status?: string;
        [key: string]: unknown;
    };
    /** Only present when expanded: `$expand=Datastreams` */
    Datastreams?: FrostDatastream[];
}
