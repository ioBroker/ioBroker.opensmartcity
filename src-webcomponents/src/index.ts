/**
 * The stations of an OpenSmartCity instance on a map, as a web component: `<iob-opensmartcity-map>`.
 *
 * One module for every host - vis-2, devices, Aura, admin (`@iobroker/web-components`). Its manifest is a file of
 * its own (`opensmartcity-map.json`, written by the build from `manifest.ts`), so a host loads this module only when
 * it shows the element. The host sets `socket` and `settings`, and if it has them `theme`, `editMode` and `dialogs`.
 *
 * It shows what the vis-2 widget `OpenSmartCityMap` shows: every channel of the instance with a location as a marker
 * with its latest values, and the location of the system ("home") unless that is hidden, on the tiles of
 * OpenStreetMap. The stations of the instance are read once with `getObjectViewSystem` (and again after the instance
 * started, when it may have created new ones); their channels and the states of their data streams are subscribed.
 * A click on a station sends `opensmartcity-station-click` to the host and then shows all values of the station in
 * a dialog. It writes nothing.
 *
 * Plain DOM and Leaflet, both in this module with the CSS of Leaflet - no React, nothing from the host but the socket.
 */
import {
    divIcon,
    latLngBounds,
    map as createMap,
    marker as createMarker,
    tileLayer,
    type DivIcon,
    type Map as LeafletMap,
    type Marker,
} from 'leaflet';
import LEAFLET_CSS from 'leaflet/dist/leaflet.css?inline';

import type { WebComponentSocket } from '@iobroker/web-components';
import { defineWebComponent, getThemeCssVariables, IobWebComponent } from '@iobroker/web-components/element';

import { getInstance, MAX_FIT_ZOOM, MAX_ZOOM, TAG, TILE_ATTRIBUTION, TILE_URL, type MapSettings } from './constants';
import { getWord, type WordKey } from './i18n';
import {
    buildStations,
    formatValue,
    getHomeLocation,
    getStationIds,
    getStationStateIds,
    getViewKey,
    type InstanceObjects,
    type Station,
} from './stations';
import { DETAILS_STYLES, STYLES } from './styles';

/** The event a click on a station sends to the host before the element shows its values in a dialog */
const CLICK_EVENT = 'opensmartcity-station-click';

/** Where the location of the system is */
const SYSTEM_CONFIG = 'system.config';

/**
 * After the instance started, its stations are read again: it creates the channels of newly selected things at its
 * start, after it read them from the FROST server
 */
const REREAD_DELAYS = [10_000, 60_000];

/** Thermometer and home of the vis-2 widget (Material Symbols) */
const THERMOMETER_PATH =
    'M480-120q-75.53 0-128.765-53.235Q298-226.47 298-302q0-49.099 24-91.55Q346-436 388-462v-286q0-38.333 26.765-65.167 26.764-26.833 65-26.833Q518-840 545-813.167q27 26.834 27 65.167v286q42 26 66 68.45 24 42.451 24 91.55 0 75.53-53.235 128.765Q555.53-120 480-120Zm.118-59Q531-179 566.5-214.875 602-250.75 602-302q0-37.81-18-70.405T532-420l-20-9v-319q0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8v319l-20 9q-34 15-52 47.595T358-302q0 51.25 35.618 87.125Q429.235-179 480.118-179ZM480-302Z';
const HOME_PATH =
    'M360-440h80v-110h80v110h80v-190l-120-80-120 80v190Zm120 254q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z';

const SVG_NS = 'http://www.w3.org/2000/svg';

/** The objects of an instance as `getObjectViewSystem` read them */
interface ReadObjects extends InstanceObjects {
    instance: string;
}

/** A station on the map: its marker and what it shows, to change the marker only when that changes */
interface StationMarker {
    marker: Marker;
    key: string;
    name: string;
}

/**
 * An element of the shadow root
 *
 * @param tag the tag
 * @param className its classes
 * @param text its text
 */
function element<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    className?: string,
    text?: string,
): HTMLElementTagNameMap[K] {
    const el = document.createElement(tag);
    if (className) {
        el.className = className;
    }
    if (text !== undefined) {
        el.textContent = text;
    }
    return el;
}

/**
 * A pin of the map
 *
 * @param path the SVG path, in the box of Material Symbols
 */
function pin(path: string): SVGSVGElement {
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', '0 -960 960 960');
    svg.setAttribute('class', 'pin');
    svg.setAttribute('aria-hidden', 'true');
    const shape = document.createElementNS(SVG_NS, 'path');
    shape.setAttribute('d', path);
    shape.setAttribute('fill', 'currentColor');
    svg.append(shape);
    return svg;
}

/**
 * The tooltip of a marker: a text, never HTML - names come from objects
 *
 * @param text the text
 */
function tooltip(text: string): HTMLElement {
    return element('span', undefined, text);
}

/**
 * The marker of a station: the thermometer of the vis-2 widget with the values below the location
 *
 * @param offline whether the FROST server reports the station as not online
 * @param values the values with their units
 */
function stationIcon(offline: boolean, values: string[]): DivIcon {
    const html = element('div');
    html.append(pin(THERMOMETER_PATH));
    if (values.length) {
        const box = element('div', 'values');
        for (const value of values) {
            box.append(element('span', undefined, value));
        }
        html.append(box);
    }
    // no size: the anchor is the location, the pin lies above it and the values below
    return divIcon({ html, className: offline ? 'marker offline' : 'marker', iconSize: [0, 0], iconAnchor: [0, 0] });
}

/** The marker of the location of the system */
function homeIcon(): DivIcon {
    const html = element('div');
    html.append(pin(HOME_PATH));
    return divIcon({ html, className: 'marker home', iconSize: [0, 0], iconAnchor: [0, 0] });
}

class OpenSmartCityMapElement extends IobWebComponent<MapSettings> {
    readonly #root: HTMLDivElement;

    readonly #title: HTMLDivElement;

    readonly #hint: HTMLDivElement;

    #mapBox: HTMLDivElement;

    #map: LeafletMap | null = null;

    #observer: ResizeObserver | null = null;

    #markers = new Map<string, StationMarker>();

    #home: { marker: Marker; key: string } | null = null;

    /** The objects of the instance, read once; null while they are read */
    #read: ReadObjects | null = null;

    /** The instance and the socket the objects are read for - read again when one of them changes */
    #readFor: { instance: string; socket: WebComponentSocket } | null = null;

    #readError = false;

    /** The value of `alive` of the instance seen last: when it turns true, the stations are read again */
    #alive: { instance: string; alive: boolean } | null = null;

    #timers: ReturnType<typeof setTimeout>[] = [];

    /** What the section of the map was fitted to last */
    #viewKey = '';

    #points: [number, number][] = [];

    #zoom = 0;

    /** The section has to be fitted again when the box has a size */
    #needsFit = false;

    /** The user moved the map: a new size of the box keeps the section */
    #userMoved = false;

    /** The element moves the map itself: that is no move of the user */
    #fitting = false;

    /** Draws the open dialog again with the current values; null while none is open */
    #drawDetails: (() => void) | null = null;

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const style = element('style');
        style.textContent = `${LEAFLET_CSS}\n${STYLES}`;
        this.#root = element('div', 'root');
        this.#title = element('div', 'title');
        this.#title.hidden = true;
        this.#hint = element('div', 'hint');
        this.#mapBox = element('div', 'map');
        this.#mapBox.hidden = true;
        this.#root.append(this.#title, this.#hint, this.#mapBox);
        shadow.append(style, this.#root);
    }

    override disconnectedCallback(): void {
        super.disconnectedCallback();
        this.#removeMap();
        for (const timer of this.#timers) {
            clearTimeout(timer);
        }
        this.#timers = [];
        // read again when the element comes back: the instance may have new stations then
        this.#readFor = null;
        this.#alive = null;
    }

    protected override getStateIds(settings: MapSettings): string[] {
        const instance = getInstance(settings.instance);
        if (!instance) {
            return [];
        }
        // turns true when the instance started: then it may have created new stations
        const ids = [`system.adapter.${instance}.alive`];
        const read = this.#getRead(instance);
        if (read) {
            for (const channel of getStationIds(read, instance)) {
                const { streams, status } = getStationStateIds(read, channel);
                ids.push(...streams);
                if (status) {
                    ids.push(status);
                }
            }
        }
        return ids;
    }

    protected override getObjectIds(settings: MapSettings): string[] {
        const instance = getInstance(settings.instance);
        if (!instance) {
            return [];
        }
        // the channels are kept up to date: their names and locations
        const ids = settings.hideHome ? [] : [SYSTEM_CONFIG];
        const read = this.#getRead(instance);
        if (read) {
            ids.push(...getStationIds(read, instance));
        }
        return ids;
    }

    #word = (key: WordKey): string => getWord(this.systemLang, key);

    protected override render(): void {
        const settings = this.settings;
        this.#root.classList.toggle('edit', this.editMode);
        this.#root.classList.toggle('dark', this.theme.type === 'dark');
        this.#title.textContent = settings.title || '';
        this.#title.hidden = !settings.title;

        const instance = getInstance(settings.instance);
        if (!instance) {
            this.#showHint(this.#word('chooseInstance'));
            return;
        }

        const socket = this.socket;
        if (socket && (this.#readFor?.instance !== instance || this.#readFor.socket !== socket)) {
            this.#readObjects(instance, socket);
        }
        this.#checkAlive(instance);

        const read = this.#getRead(instance);
        if (!read) {
            // nothing rather than a hint for a moment: no socket yet, or the objects are being read
            this.#showHint(this.#readError ? this.#word('cannotRead') : '', this.#readError);
            return;
        }

        const stations = buildStations(this.#getObjects(read), this.states, instance, this.systemLang);
        if (!stations.length) {
            this.#showHint(this.#word('noStations'));
            return;
        }
        this.#showMap(stations, settings);
        // an open dialog follows the values too
        this.#drawDetails?.();
    }

    /**
     * The objects read for this instance
     *
     * @param instance e.g. `opensmartcity.0`
     */
    #getRead(instance: string | null): ReadObjects | null {
        return this.#read && this.#read.instance === instance ? this.#read : null;
    }

    /**
     * The objects as they are now: the subscribed channels and the objects of the subscribed states where they
     * arrived, else as they were read
     *
     * @param read the objects read once
     */
    #getObjects(read: ReadObjects): InstanceObjects {
        const channels: InstanceObjects['channels'] = {};
        for (const id of Object.keys(read.channels)) {
            channels[id] = this.objects[id] !== undefined ? this.objects[id] : read.channels[id];
        }
        const states: InstanceObjects['states'] = {};
        for (const id of Object.keys(read.states)) {
            states[id] = this.objects[id] || read.states[id];
        }
        return { channels, states };
    }

    /**
     * Reads the channels and the states of the instance - once, in the range of the instance only
     *
     * @param instance e.g. `opensmartcity.0`
     * @param socket the connection
     */
    #readObjects(instance: string, socket: WebComponentSocket): void {
        const readFor = { instance, socket };
        this.#readFor = readFor;
        this.#readError = false;
        const start = `${instance}.`;
        // U+9999 sorts after every ID below the instance
        const end = `${instance}.\u9999`;
        Promise.all([
            socket.getObjectViewSystem('channel', start, end),
            socket.getObjectViewSystem('state', start, end),
        ])
            .then(([channels, states]) => {
                if (this.#readFor === readFor) {
                    this.#read = { instance, channels, states };
                    this.#resubscribe();
                }
            })
            .catch((error: unknown) => {
                if (this.#readFor === readFor) {
                    console.warn(`<${this.localName}>: cannot read the stations of ${instance}: ${String(error)}`);
                    this.#readError = !this.#getRead(instance);
                    this.#resubscribe();
                }
            });
    }

    /** Have the base class ask `getStateIds` and `getObjectIds` again - it does so for new settings - and draw */
    #resubscribe(): void {
        const settings = this.settings;
        this.settings = settings;
    }

    /**
     * Reads the stations again when the instance started: it creates the channels of new things at its start
     *
     * @param instance e.g. `opensmartcity.0`
     */
    #checkAlive(instance: string): void {
        const value = this.states[`system.adapter.${instance}.alive`]?.val;
        if (value === undefined || value === null) {
            return;
        }
        const alive = !!value;
        const before = this.#alive?.instance === instance ? this.#alive.alive : null;
        this.#alive = { instance, alive };
        if (before === false && alive) {
            for (const timer of this.#timers) {
                clearTimeout(timer);
            }
            this.#timers = REREAD_DELAYS.map(delay =>
                setTimeout(() => {
                    const socket = this.socket;
                    if (this.isConnected && socket && getInstance(this.settings.instance) === instance) {
                        this.#readObjects(instance, socket);
                    }
                }, delay),
            );
        }
    }

    /**
     * Shows a text instead of the map
     *
     * @param text the text, empty for nothing
     * @param error whether it tells of an error
     */
    #showHint(text: string, error = false): void {
        this.#hint.textContent = text;
        this.#hint.classList.toggle('error', error);
        this.#hint.hidden = false;
        this.#mapBox.hidden = true;
    }

    /**
     * Shows the stations on the map
     *
     * @param stations the stations
     * @param settings the settings
     */
    #showMap(stations: Station[], settings: MapSettings): void {
        this.#hint.hidden = true;
        this.#mapBox.hidden = false;
        const map = this.#getMap();
        const lang = this.systemLang;

        // the stations: changed only where what they show changed
        const shown = new Set<string>();
        for (const station of stations) {
            shown.add(station.id);
            const values = station.streams
                .filter(stream => stream.value !== null)
                .map(stream => formatValue(stream.value as number, stream.unit, lang));
            const key = JSON.stringify([station.latitude, station.longitude, station.online, values]);
            const existing = this.#markers.get(station.id);
            if (existing?.key === key && existing.name === station.name) {
                continue;
            }
            const icon = stationIcon(station.online === false, values);
            if (existing) {
                existing.marker.setLatLng([station.latitude, station.longitude]);
                existing.marker.setIcon(icon);
                existing.marker.setTooltipContent(tooltip(station.name));
                existing.key = key;
                existing.name = station.name;
            } else {
                const id = station.id;
                const marker = createMarker([station.latitude, station.longitude], { icon, riseOnHover: true })
                    .bindTooltip(tooltip(station.name), { direction: 'top', offset: [0, -28] })
                    .on('click', () => void this.#openDetails(id))
                    .addTo(map);
                this.#markers.set(id, { marker, key, name: station.name });
            }
        }
        for (const [id, { marker }] of this.#markers) {
            if (!shown.has(id)) {
                marker.remove();
                this.#markers.delete(id);
            }
        }

        // home, like the vis-2 widget: the location of the system
        const home = settings.hideHome ? null : getHomeLocation(this.objects[SYSTEM_CONFIG]);
        const homeKey = home ? `${home.join(',')}|${lang}` : '';
        if (this.#home && this.#home.key !== homeKey) {
            this.#home.marker.remove();
            this.#home = null;
        }
        if (home && !this.#home) {
            const marker = createMarker(home, { icon: homeIcon(), keyboard: false, zIndexOffset: -1000 })
                .bindTooltip(tooltip(this.#word('home')), { direction: 'top', offset: [0, -28] })
                .addTo(map);
            this.#home = { marker, key: homeKey };
        }

        // the section: fitted again only when the locations or the zoom of the settings change
        const points: [number, number][] = stations.map(station => [station.latitude, station.longitude]);
        if (home) {
            points.push(home);
        }
        const zoom = Math.min(MAX_ZOOM, Math.max(0, Math.round(Number(settings.zoomLevel) || 0)));
        const viewKey = getViewKey(points, zoom);
        if (viewKey !== this.#viewKey) {
            this.#viewKey = viewKey;
            this.#points = points;
            this.#zoom = zoom;
            this.#userMoved = false;
            this.#fit();
        }
    }

    /** The map, made when it is shown first */
    #getMap(): LeafletMap {
        if (this.#map) {
            return this.#map;
        }
        const map = createMap(this.#mapBox, { maxZoom: MAX_ZOOM });
        // the text OpenStreetMap asks for, without the link to Leaflet
        map.attributionControl.setPrefix(false);
        tileLayer(TILE_URL, { maxZoom: MAX_ZOOM, attribution: TILE_ATTRIBUTION }).addTo(map);
        map.on('movestart', () => {
            if (!this.#fitting) {
                this.#userMoved = true;
            }
        });
        this.#map = map;
        // Leaflet follows the size of the window only, not of the box the host gives
        if (typeof ResizeObserver !== 'undefined') {
            this.#observer = new ResizeObserver(() => this.#onResize());
            this.#observer.observe(this.#mapBox);
        }
        return map;
    }

    /** Removes the map with its markers; a fresh box for the next one */
    #removeMap(): void {
        this.#observer?.disconnect();
        this.#observer = null;
        this.#map?.remove();
        this.#map = null;
        this.#markers.clear();
        this.#home = null;
        this.#viewKey = '';
        const box = element('div', 'map');
        box.hidden = this.#mapBox.hidden;
        this.#mapBox.replaceWith(box);
        this.#mapBox = box;
    }

    #onResize(): void {
        const map = this.#map;
        if (!map) {
            return;
        }
        // keeps the centre - a move of the element, not of the user
        this.#fitting = true;
        try {
            map.invalidateSize({ animate: false });
        } finally {
            this.#fitting = false;
        }
        if (this.#needsFit || !this.#userMoved) {
            this.#fit();
        }
    }

    /** Fits the section to the stations and home - or centres them in the zoom level of the settings */
    #fit(): void {
        const map = this.#map;
        if (!map || !this.#points.length) {
            return;
        }
        const bounds = latLngBounds(this.#points);
        const size = map.getSize();
        this.#fitting = true;
        try {
            if (!size.x || !size.y) {
                // no box yet: a view, so that the markers are placed; fitted when the box gets a size
                map.setView(bounds.getCenter(), this.#zoom || MAX_FIT_ZOOM - 3, { animate: false });
                this.#needsFit = true;
                return;
            }
            if (this.#zoom) {
                map.setView(bounds.getCenter(), this.#zoom, { animate: false });
            } else {
                // room for the pins above and the values below the locations, but never more than the box has
                const side = Math.min(36, size.x / 4);
                map.fitBounds(bounds, {
                    paddingTopLeft: [side, Math.min(44, size.y / 4)],
                    paddingBottomRight: [side, Math.min(32, size.y / 4)],
                    maxZoom: MAX_FIT_ZOOM,
                    animate: false,
                });
            }
            this.#needsFit = false;
        } finally {
            this.#fitting = false;
        }
    }

    /**
     * Shows all values of a station in a dialog of the host - unless the host answers the click itself
     *
     * @param id the channel of the station
     */
    async #openDetails(id: string): Promise<void> {
        const station = this.#getStation(id);
        if (!station || this.editMode || this.#drawDetails || !this.emit(CLICK_EVENT, { id, name: station.name })) {
            return;
        }

        // The host moves the element into its own dialog: it brings its styles and the theme of the host along
        const content = element('div');
        for (const [name, value] of Object.entries(getThemeCssVariables(this.theme))) {
            content.style.setProperty(name, value);
        }
        const shadow = content.attachShadow({ mode: 'open' });
        const style = element('style');
        style.textContent = DETAILS_STYLES;
        const mount = element('div', 'details');
        shadow.append(style, mount);

        // drawn again with every drawing of the element, so the dialog follows the values while it is open
        const draw = (): void => {
            const current = this.#getStation(id);
            if (current) {
                mount.replaceChildren(...this.#details(current));
            }
        };
        this.#drawDetails = draw;
        draw();

        try {
            await this.openDialog({ title: station.name, element: content, width: 560 });
        } finally {
            this.#drawDetails = null;
        }
    }

    /**
     * A station as it is now
     *
     * @param id the channel of the station
     */
    #getStation(id: string): Station | undefined {
        const instance = getInstance(this.settings.instance);
        const read = this.#getRead(instance);
        if (!instance || !read) {
            return undefined;
        }
        return buildStations(this.#getObjects(read), this.states, instance, this.systemLang).find(s => s.id === id);
    }

    /**
     * The content of the dialog of a station: its status and description, and a table of its values
     *
     * @param station the station
     */
    #details(station: Station): HTMLElement[] {
        const lang = this.systemLang;
        const parts: HTMLElement[] = [];

        const meta = element('div', 'meta');
        if (station.online !== null) {
            meta.append(
                element(
                    'span',
                    station.online ? 'status' : 'status offline',
                    this.#word(station.online ? 'online' : 'offline'),
                ),
            );
        }
        if (station.description) {
            meta.append(element('span', undefined, station.description));
        }
        if (meta.childNodes.length) {
            parts.push(meta);
        }

        if (!station.streams.length) {
            parts.push(element('div', 'empty', this.#word('noValues')));
            return parts;
        }
        const time = new Intl.DateTimeFormat(lang === 'zh-cn' ? 'zh-CN' : lang, {
            dateStyle: 'short',
            timeStyle: 'short',
        });
        const table = element('table');
        const head = element('tr');
        head.append(
            element('th', undefined, this.#word('measurement')),
            element('th', 'value', this.#word('value')),
            element('th', undefined, this.#word('measuredAt')),
        );
        table.append(element('thead'), element('tbody'));
        table.tHead?.append(head);
        for (const stream of station.streams) {
            const row = element('tr');
            const name = element('td', undefined, stream.name);
            if (stream.description && stream.description !== stream.name) {
                name.append(element('div', 'description', stream.description));
            }
            row.append(
                name,
                element('td', 'value', stream.value === null ? '-' : formatValue(stream.value, stream.unit, lang)),
                element('td', 'time', stream.ts ? time.format(stream.ts) : ''),
            );
            table.tBodies[0].append(row);
        }
        parts.push(table);
        return parts;
    }
}

defineWebComponent(TAG, OpenSmartCityMapElement);
