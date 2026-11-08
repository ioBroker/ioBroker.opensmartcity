/** Tag of the custom element; a host checks that the module defines exactly this one */
export const TAG = 'iob-opensmartcity-map';

/** The built module, next to its manifest */
export const MODULE_FILE = 'opensmartcity-map.js';

/** The manifest the build writes next to the module; `common.webComponents` names this one */
export const MANIFEST_FILE = 'opensmartcity-map.json';

/** Where `tasks.ts` puts the module in the admin folder */
export const MODULE_PATH = `webcomponents/${MODULE_FILE}`;

/** The adapter whose instances the element shows */
export const ADAPTER = 'opensmartcity';

/** The tiles of OpenStreetMap - the same the vis-2 widget shows (the `OSM` source of OpenLayers) */
export const TILE_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

/** Required by the tile usage policy of OpenStreetMap - the text of the `OSM` source of OpenLayers */
export const TILE_ATTRIBUTION =
    '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors.';

/** The highest zoom level the tiles of OpenStreetMap have */
export const MAX_ZOOM = 19;

/** The zoom level a map that fits the stations in takes at most - one station alone is not shown at street level */
export const MAX_FIT_ZOOM = 16;

/** The values of the settings of the manifest; a setting without a value is missing */
export type MapSettings = {
    instance?: string;
    title?: string;
    hideHome?: boolean;
    zoomLevel?: number;
};

/**
 * The instance of the setting as the prefix of its objects
 *
 * @param value what the host stores for the `instance` setting: `opensmartcity.0`, `system.adapter.opensmartcity.0`
 *   or `0`
 * @returns `opensmartcity.0`, or null if no instance of this adapter is chosen
 */
export function getInstance(value: string | undefined): string | null {
    const match = typeof value === 'string' ? value.match(/^(?:system\.adapter\.)?(?:opensmartcity\.)?(\d+)$/) : null;
    return match ? `${ADAPTER}.${match[1]}` : null;
}
