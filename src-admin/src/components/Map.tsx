import { Component, createRef, type JSX } from 'react';

import 'ol/ol.css';
import { Map as OpenLayersMap, View, Feature } from 'ol';
import { createOrUpdate, extend } from 'ol/extent';
import { Tile, Vector as LayerVector } from 'ol/layer';
import { Icon, Style, Fill, Text } from 'ol/style';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import type { Coordinate } from 'ol/coordinate';
import type { Pixel } from 'ol/pixel';

import { I18n, type AdminConnection } from '@iobroker/gui-components';

import type { MapThing } from '../types';

const HomeSVG = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
    <path fill="#00F" d="M360-440h80v-110h80v110h80v-190l-120-80-120 80v190Zm120 254q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
</svg>`)}`;

const TempSVG = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
    <path fill="#080" d="M480-120q-75.53 0-128.765-53.235Q298-226.47 298-302q0-49.099 24-91.55Q346-436 388-462v-286q0-38.333 26.765-65.167 26.764-26.833 65-26.833Q518-840 545-813.167q27 26.834 27 65.167v286q42 26 66 68.45 24 42.451 24 91.55 0 75.53-53.235 128.765Q555.53-120 480-120Zm.118-59Q531-179 566.5-214.875 602-250.75 602-302q0-37.81-18-70.405T532-420l-20-9v-319q0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8v319l-20 9q-34 15-52 47.595T358-302q0 51.25 35.618 87.125Q429.235-179 480.118-179ZM480-302Z"/>
</svg>`)}`;

interface OsmObjects {
    markerSource: VectorSource;
    pointsSource: VectorSource;
    markerStyle: Style;
    tempStyle: Style;
    pointsLayer: LayerVector;
    oMap: OpenLayersMap;
    /** Marker of the home position (system settings) */
    marker: Feature<Point>;
}

interface OlMapProps {
    id?: string;
    socket: AdminConnection;
    things: MapThing[];
    /** Called with the name of the clicked feature */
    onSelect?: (name: string) => void;
    /** Do not show the home position and do not take it into account for the zoom */
    hideHome?: boolean;
}

interface OlMapState {
    longitude: number;
    latitude: number;
    things: MapThing[];
    mapHeight: number;
    mapWidth: number;
    tooltip: { left: number; top: number; text: string } | null;
}

export default class OlMap extends Component<OlMapProps, OlMapState> {
    private readonly refMap = createRef<HTMLDivElement>();

    private OSM: OsmObjects | null = null;

    private hideTimer: ReturnType<typeof setTimeout> | null = null;

    private thingsTimer: ReturnType<typeof setTimeout> | null = null;

    constructor(props: OlMapProps) {
        super(props);

        this.state = {
            longitude: 0,
            latitude: 0,
            things: [...this.props.things],
            mapHeight: 0,
            mapWidth: 0,
            tooltip: null,
        };
    }

    calculateZoomLevel(map: OpenLayersMap): number {
        const center = fromLonLat([this.state.longitude || 0, this.state.latitude || 0]);

        if (!this.state.things?.length) {
            return 17;
        }
        let extent;

        if (!this.props.hideHome) {
            // Create an empty extent
            extent = createOrUpdate(center[0], center[1], center[0], center[1]);
        } else {
            // take the first point as a center
            const pPoint = fromLonLat([this.state.things[0].longitude, this.state.things[0].latitude]);
            extent = createOrUpdate(pPoint[0], pPoint[1], pPoint[0], pPoint[1]);
        }

        // Extend the extent to include each point
        this.state.things.forEach((point, i) => {
            if (!i && this.props.hideHome) {
                return;
            }
            const pPoint = fromLonLat([point.longitude, point.latitude]);
            extend(extent, [pPoint[0], pPoint[1], pPoint[0], pPoint[1]]);
        });

        // Fit the map view to the extent of the things
        map.getView().fit(extent, { size: map.getSize() });

        // Return the zoom level of the map after fitting
        return (map.getView().getZoom() || 0) - 1;
    }

    calculateCenter(): Coordinate {
        let count = this.props.hideHome ? 0 : 1;
        let longs = this.props.hideHome ? 0 : this.state.longitude || 0;
        let lats = this.props.hideHome ? 0 : this.state.latitude || 0;
        this.state.things.forEach(point => {
            longs += point.longitude;
            lats += point.latitude;
            count++;
        });

        return fromLonLat([longs / count, lats / count]);
    }

    displayTooltip(pixel: Pixel, target: EventTarget | null): void {
        // ignore event if mouse is on control
        const feature =
            (target as HTMLElement | null)?.closest('.ol-control') || !this.OSM
                ? undefined
                : this.OSM.oMap.forEachFeatureAtPixel(pixel, f => f);
        if (this.hideTimer) {
            clearTimeout(this.hideTimer);
            this.hideTimer = null;
        }
        if (feature) {
            this.setState({
                tooltip: {
                    left: pixel[0],
                    top: pixel[1],
                    text: feature.get('name') as string,
                },
            });
        } else {
            this.hideTimer = setTimeout(() => {
                this.hideTimer = null;
                this.setState({ tooltip: null });
            }, 500);
        }
    }

    updateMap(): void {
        const center = fromLonLat([this.state.longitude || 0, this.state.latitude || 0]);

        if (!this.OSM) {
            const markerSource = new VectorSource();
            const pointsSource = new VectorSource();

            const markerStyle = new Style({
                image: new Icon({
                    anchor: [0.5, 49],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    opacity: 0.75,
                    src: HomeSVG,
                }),
            });

            const tempStyle = new Style({
                image: new Icon({
                    anchor: [0.5, 49],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    opacity: 0.75,
                    src: TempSVG,
                }),
            });

            const pointsLayer = new LayerVector({
                source: pointsSource,
                style: tempStyle,
            });

            const oMap = new OpenLayersMap({
                target: this.props.id || 'map',
                layers: [
                    new Tile({ source: new OSM() }),
                    new LayerVector({
                        source: markerSource,
                        style: markerStyle,
                    }),
                    pointsLayer,
                ],
                view: new View({ center, zoom: 17 }),
            });

            const marker = new Feature({
                geometry: new Point(center),
                name: I18n.t('Your home'),
            });

            markerSource.addFeature(marker);

            oMap.on('pointermove', evt => {
                if (evt.dragging) {
                    if (this.state.tooltip) {
                        this.setState({ tooltip: null });
                    }
                    return;
                }
                const pixel = oMap.getEventPixel(evt.originalEvent);
                this.displayTooltip(pixel, evt.originalEvent.target);
            });

            oMap.on('singleclick', event => {
                const pixel = oMap.getEventPixel(event.originalEvent);
                const feature = oMap.forEachFeatureAtPixel(pixel, f => f);
                if (this.props.onSelect && feature) {
                    this.props.onSelect(feature.get('name') as string);
                }
            });

            this.OSM = { markerSource, pointsSource, markerStyle, tempStyle, pointsLayer, oMap, marker };
        }

        // remove all things from layer
        this.OSM.pointsSource.clear();
        // add all points to the layer
        for (const thing of this.state.things) {
            const feature = new Feature({
                geometry: new Point(fromLonLat([thing.longitude, thing.latitude])),
                name: thing.name,
            });
            const text: string[] = [];
            thing.dataStreams.forEach(ds => {
                if (ds.value !== undefined && ds.value !== null) {
                    text.push((Math.round((ds.value as number) * 10) / 10).toString() + (ds.unit || ''));
                }
            });

            const iconTemp = new Style({
                image: new Icon({
                    anchor: [0.5, 49],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    opacity: 0.75,
                    src: TempSVG,
                }),
                text: new Text({
                    text: text.join('\n'),
                    scale: 1.2,
                    fill: new Fill({ color: '#004f00' }),
                }),
            });
            feature.setStyle(iconTemp);

            this.OSM.pointsSource.addFeature(feature);
        }

        if (!this.props.hideHome) {
            this.OSM.marker.setGeometry(new Point(center));
        }
        this.OSM.oMap.setView(
            new View({ center: this.calculateCenter(), zoom: this.calculateZoomLevel(this.OSM.oMap) }),
        );
    }

    componentDidMount(): void {
        // the home position comes from the system settings
        void this.props.socket.getSystemConfig().then(obj =>
            this.setState(
                {
                    longitude: parseFloat(String(obj.common.longitude)),
                    latitude: parseFloat(String(obj.common.latitude)),
                },
                () => this.refMap.current?.clientHeight && this.updateMap(),
            ),
        );
    }

    componentDidUpdate(): void {
        // the list of things has changed: draw them again
        if (this.OSM && !this.thingsTimer && JSON.stringify(this.props.things) !== JSON.stringify(this.state.things)) {
            this.thingsTimer = setTimeout(() => {
                this.thingsTimer = null;
                this.setState(
                    { things: [...this.props.things] },
                    () => this.refMap.current?.clientWidth && this.updateMap(),
                );
            }, 100);
        }

        // the map got its size (or another size): create it or update its size
        if (
            this.refMap.current &&
            this.refMap.current.clientWidth !== this.state.mapWidth &&
            this.refMap.current.clientHeight !== this.state.mapHeight
        ) {
            if (!this.OSM) {
                this.setState(
                    {
                        mapWidth: this.refMap.current.clientWidth,
                        mapHeight: this.refMap.current.clientHeight,
                    },
                    () => setTimeout(() => this.updateMap(), 10),
                );
            } else {
                this.setState(
                    {
                        mapWidth: this.refMap.current.clientWidth,
                        mapHeight: this.refMap.current.clientHeight,
                    },
                    () => this.OSM?.oMap.updateSize(),
                );
            }
        }
    }

    componentWillUnmount(): void {
        if (this.hideTimer) {
            clearTimeout(this.hideTimer);
            this.hideTimer = null;
        }
        if (this.thingsTimer) {
            clearTimeout(this.thingsTimer);
            this.thingsTimer = null;
        }
    }

    renderTooltip(): JSX.Element | null {
        if (!this.state.tooltip) {
            return null;
        }
        return (
            <div
                key="tooltip"
                style={{
                    position: 'absolute',
                    top: this.state.tooltip.top,
                    left: this.state.tooltip.left,
                    color: '#000',
                    padding: '3px 5px',
                    backgroundColor: '#fff',
                    borderRadius: 5,
                }}
            >
                {this.state.tooltip.text}
            </div>
        );
    }

    render(): JSX.Element {
        return (
            <>
                <div
                    ref={this.refMap}
                    id={this.props.id || 'map'}
                    style={{
                        height: '100%',
                        width: '100%',
                        overflow: 'hidden',
                    }}
                />
                {this.renderTooltip()}
            </>
        );
    }
}
