/**
 * The styles of the shadow root, after the CSS of Leaflet (bundled into the module). The element fills the box of
 * the host; it has a transparent background and inherits `color` and `font`, and the parts drawn on the map - the
 * controls, the labels, the tooltips - take the theme of the host from the `--iob-*` variables.
 *
 * The sizes follow the box with container units (`cqmin` of `.root`); in a box that is too small for them the zoom
 * buttons are left out - the map still zooms with the wheel and with two fingers.
 */
export const STYLES = `
:host {
    display: block;
    width: 100%;
    height: 100%;
}
[hidden] {
    display: none !important;
}
.root {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* the size of the box does not depend on what is in it */
    container-type: size;
}
.title {
    flex: none;
    padding: 0.3em 0.5em;
    font-size: clamp(12px, 5cqmin, 20px);
    font-weight: 600;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.hint {
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 8px;
    text-align: center;
    font-size: clamp(11px, 4.5cqmin, 16px);
    color: var(--iob-text-secondary);
    overflow: hidden;
}
.hint.error {
    color: var(--iob-error);
}
.map {
    --pin: clamp(22px, 9cqmin, 40px);
    --label: clamp(10px, 3.6cqmin, 13px);
    flex: 1;
    min-height: 0;
    position: relative;
    /* the panes of Leaflet have high z-indexes: keep them inside the box */
    isolation: isolate;
    border-radius: calc(var(--iob-border-radius, 4px) * 2);
    overflow: hidden;
}
.edit .map,
.edit .map * {
    /* the host needs the clicks to select and to move the element - the controls and markers of Leaflet set
       pointer-events of their own */
    pointer-events: none !important;
}
.map.leaflet-container {
    background: color-mix(in srgb, currentColor 8%, transparent);
    font-family: inherit;
    font-size: var(--label);
    color: inherit;
}
.map.leaflet-container a {
    color: var(--iob-primary);
}
.dark .map .leaflet-tile-pane {
    /* the tiles of OpenStreetMap are light: darkened, with the hues kept */
    filter: invert(1) hue-rotate(180deg) brightness(0.95) contrast(0.9);
}
.map .leaflet-bar {
    border: 1px solid var(--iob-divider);
    border-radius: var(--iob-border-radius, 4px);
    box-shadow: none;
    overflow: hidden;
}
.map .leaflet-bar a {
    background-color: var(--iob-paper);
    color: var(--iob-text);
    border-bottom-color: var(--iob-divider);
}
.map .leaflet-bar a:hover,
.map .leaflet-bar a:focus {
    background-color: color-mix(in srgb, var(--iob-paper) 88%, var(--iob-text));
}
.map .leaflet-bar a.leaflet-disabled {
    background-color: var(--iob-paper);
    color: var(--iob-text-secondary);
    opacity: 0.6;
}
.map .leaflet-control-attribution {
    background: color-mix(in srgb, var(--iob-paper) 80%, transparent);
    color: var(--iob-text-secondary);
    font-size: 10px;
}
.map .leaflet-tooltip {
    background: var(--iob-paper);
    color: var(--iob-text);
    border: 1px solid var(--iob-divider);
    border-radius: var(--iob-border-radius, 4px);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
    font-size: var(--label);
}
.map .leaflet-tooltip-top::before {
    border-top-color: var(--iob-paper);
}
.marker {
    /* the icon of Leaflet has no size: the anchor is the location, the parts lie around it */
    overflow: visible;
}
.marker .pin {
    position: absolute;
    left: 0;
    bottom: 0;
    width: var(--pin);
    height: var(--pin);
    transform: translateX(-50%);
    display: block;
    color: var(--iob-success);
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.45));
}
.marker.home .pin {
    color: var(--iob-primary);
}
.marker .values {
    position: absolute;
    left: 0;
    top: 2px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1px 5px;
    border-radius: var(--iob-border-radius, 4px);
    background: color-mix(in srgb, var(--iob-paper) 88%, transparent);
    color: var(--iob-text);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
    font-size: var(--label);
    line-height: 1.3;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
}
.marker.offline .pin {
    color: var(--iob-text-secondary);
}
.marker.offline .values {
    opacity: 0.7;
}
@container (max-height: 180px) or (max-width: 180px) {
    .map .leaflet-control-zoom {
        display: none;
    }
}
`;

/** The styles of the details of a station in a dialog of the host, which takes the theme from the variables */
export const DETAILS_STYLES = `
:host {
    display: block;
    color: var(--iob-text);
    font-family: var(--iob-font-family);
    font-size: var(--iob-font-size);
}
.details {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px 12px;
    color: var(--iob-text-secondary);
}
.status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--iob-text);
}
.status::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--iob-success);
}
.status.offline::before {
    background: var(--iob-error);
}
table {
    width: 100%;
    border-collapse: collapse;
}
th {
    text-align: left;
    font-weight: 500;
    color: var(--iob-text-secondary);
    border-bottom: 1px solid var(--iob-divider);
    padding: 4px 8px;
}
td {
    padding: 6px 8px;
    border-bottom: 1px solid var(--iob-divider);
    vertical-align: top;
}
th.value,
td.value {
    text-align: right;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
}
td.value {
    font-weight: 600;
}
td.time {
    white-space: nowrap;
    color: var(--iob-text-secondary);
}
.description {
    font-size: 0.85em;
    color: var(--iob-text-secondary);
}
.empty {
    color: var(--iob-text-secondary);
}
`;
