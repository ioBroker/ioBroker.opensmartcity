import PropTypes from 'prop-types';

import 'ol/ol.css';
import { Map, View, Feature } from 'ol';
import { createOrUpdate, extend } from 'ol/extent';
import { Tile, Vector as LayerVector } from 'ol/layer';
import {
    Icon, Style, Fill,
    Text,
} from 'ol/style';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Point } from 'ol/geom';
import { /* toLonLat, */ fromLonLat } from 'ol/proj';

import { Component, createRef } from 'react';

import { I18n } from '@iobroker/adapter-react-v5';

const HomeSVG = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
    <path fill="#00F" d="M360-440h80v-110h80v110h80v-190l-120-80-120 80v190Zm120 254q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
</svg>`)}`;

const TempSVG = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
    <path fill="#080" d="M480-120q-75.53 0-128.765-53.235Q298-226.47 298-302q0-49.099 24-91.55Q346-436 388-462v-286q0-38.333 26.765-65.167 26.764-26.833 65-26.833Q518-840 545-813.167q27 26.834 27 65.167v286q42 26 66 68.45 24 42.451 24 91.55 0 75.53-53.235 128.765Q555.53-120 480-120Zm.118-59Q531-179 566.5-214.875 602-250.75 602-302q0-37.81-18-70.405T532-420l-20-9v-319q0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8v319l-20 9q-34 15-52 47.595T358-302q0 51.25 35.618 87.125Q429.235-179 480.118-179ZM480-302Z"/>
</svg>`)}`;

class OlMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            longitude: 0,
            latitude:  0,
            points:    [...this.props.points],
            mapHeight: 0,
            mapWidth:  0,
        };

        this.refMap = createRef();
    }

    // positionReady(position) {
    //     this.setState({
    //         latitude:  position.coords.latitude.toFixed(8),
    //         longitude: position.coords.longitude.toFixed(8),
    //     }, () => this.updateMap());
    // }

    // getPositionForAddress() {
    //     window.fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(`${this.state.country} ${this.state.city} ${this.state.address}`)}`)
    //         .then(data => data.json())
    //         .then(data => {
    //             let changed = false;
    //
    //             if (!data || !data[0]) {
    //                 window.alert(I18n.t('Nothing found'));
    //                 return;
    //             }
    //
    //             let latitude = parseFloat(this.state.latitude);
    //             if (latitude !== parseFloat(data[0].lat)) {
    //                 latitude = parseFloat(data[0].lat);
    //                 changed = true;
    //             }
    //             let longitude = parseFloat(this.state.longitude);
    //             if (longitude !== parseFloat(data[0].lon)) {
    //                 longitude = parseFloat(data[0].lon);
    //                 changed = true;
    //             }
    //             changed && this.setState({ longitude, latitude }, () =>
    //                 this.updateMap());
    //         })
    //         .catch(e =>
    //             window.alert(I18n.t('Cannot fetch address %s', e)));
    // }

    calculateZoomLevel(map) {
        const center = fromLonLat([parseFloat(this.state.longitude || 0), parseFloat(this.state.latitude || 0)]);

        if (!this.state.points?.length) {
            return 17;
        }
        let extent;

        if (this.state.rxData.hideHome) {
            // Create an empty extent
            extent = createOrUpdate(center[0], center[1], center[0], center[1]);
        } else {
            // take first point as a center
            const pPoint = fromLonLat([this.state.points[0].longitude, this.state.points[0].latitude]);
            extent = createOrUpdate(pPoint[0], pPoint[1], pPoint[0], pPoint[1]);
        }

        // Extend the extent to include each point
        this.state.points.forEach((point, i) => {
            if (!i && this.state.rxData.hideHome) {
                return;
            }
            const pPoint = fromLonLat([point.longitude, point.latitude]);
            extend(extent, [pPoint[0], pPoint[1], pPoint[0], pPoint[1]]);
        });

        // Fit the map view to the extent of the points
        map.getView().fit(extent, map.getSize());

        // Return the zoom level of the map after fitting
        return map.getView().getZoom() - 1;
    }

    calculateCenter() {
        let count = this.state.rxData.hideHome ? 0 : 1;
        let longs = this.state.rxData.hideHome ? 0 : parseFloat(this.state.longitude || 0);
        let lats = this.state.rxData.hideHome ? 0 : parseFloat(this.state.latitude || 0);
        this.state.points.forEach(point => {
            longs += point.longitude;
            lats += point.latitude;
            count++;
        });

        return fromLonLat([longs / count, lats / count]);
    }

    displayTooltip(pixel, target) {
        // ignore event if mouse is on control
        const feature = target.closest('.ol-control') ? undefined :
            this.OSM.oMap.forEachFeatureAtPixel(pixel, f => f);
        if (feature) {
            this.hideTimer && clearTimeout(this.hideTimer);
            const tooltip = {
                left: pixel[0],
                top: pixel[1],
                text: feature.get('name'),
            };
            this.setState({ tooltip });
        } else {
            this.hideTimer && clearTimeout(this.hideTimer);
            this.hideTimer = setTimeout(() => this.setState({ tooltip: null }), 500);
        }
    }

    updateMap() {
        // OPEN STREET MAPS
        // if (window.navigator.geolocation && (!this.state.longitude || !this.state.latitude)) {
        //     window.navigator.geolocation.getCurrentPosition(position => this.positionReady(position));
        // }

        const center = fromLonLat([parseFloat(this.state.longitude || 0), parseFloat(this.state.latitude || 0)]);

        if (!this.OSM) {
            // get the coordinates from the browser

            this.OSM = {};
            this.OSM.markerSource = new VectorSource();
            this.OSM.pointsSource = new VectorSource();

            this.OSM.markerStyle = new Style({
                image: new Icon(/** @type {olx.style.IconOptions} */ ({
                    anchor: [0.5, 49],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    opacity: 0.75,
                    src: HomeSVG,
                })),
            });

            this.OSM.tempStyle = new Style({
                image: new Icon(/** @type {olx.style.IconOptions} */ ({
                    anchor: [0.5, 49],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    opacity: 0.75,
                    src: TempSVG,
                })),
            });

            this.OSM.pointsLayer = new LayerVector({
                source: this.OSM.pointsSource,
                style: this.OSM.tempStyle,
            });

            this.OSM.oMap = new Map({
                target: this.props.id || 'map',
                layers: [
                    new Tile({ source: new OSM() }),
                    new LayerVector({
                        source: this.OSM.markerSource,
                        style: this.OSM.markerStyle,
                    }),
                    this.OSM.pointsLayer,
                ],
                view: new View({ center, zoom: 17 }),
            });

            this.OSM.marker = new Feature({
                geometry: new Point(center),
                name: I18n.t('Your home'),
            });

            this.OSM.markerSource.addFeature(this.OSM.marker);

            this.OSM.oMap.on('pointermove', evt => {
                if (evt.dragging) {
                    this.state.tooltip && this.setState({ tooltip: null });
                    return;
                }
                const pixel = this.OSM.oMap.getEventPixel(evt.originalEvent);
                this.displayTooltip(pixel, evt.originalEvent.target);
            });

            this.OSM.oMap.on('singleclick', event => {
                const pixel = this.OSM.oMap.getEventPixel(event.originalEvent);
                const feature = this.OSM.oMap.forEachFeatureAtPixel(pixel, f => f);
                if (this.props.onSelect && feature) {
                    this.props.onSelect(feature.get('name'));
                }

                // this.setState({ longitude: lonLat[0], latitude: lonLat[1] }, () => this.updateMap());
            });
        }
        // remove all points from layer
        this.OSM.pointsSource.clear();
        // add all points to the layer
        for (let p = 0; p < this.state.points.length; p++) {
            const point = this.state.points[p];
            const feature = new Feature({
                geometry: new Point(fromLonLat([point.longitude, point.latitude])),
                name: point.name,
            });
            const iconTemp = new Style({
                image: new Icon(/** @type {olx.style.IconOptions} */ ({
                    anchor: [0.5, 49],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    opacity: 0.75,
                    src: TempSVG,
                })),
                text: new Text({
                    text: (Math.round(point.value * 10) / 10).toString() + point.unit,
                    scale: 1.2,
                    fill: new Fill({ color: '#004f00' }),
                    // stroke: new Stroke({ color: '0', width: 3 }),
                }),
            });
            feature.setStyle(iconTemp);

            this.OSM.pointsSource.addFeature(feature);
        }

        this.OSM.marker.setGeometry(new Point(center));
        this.OSM.oMap.setView(new View({ center: this.calculateCenter(), zoom: this.calculateZoomLevel(this.OSM.oMap) }));
    }

    componentDidMount() {
        this.props.socket.getSystemConfig()
            .then(obj =>
                this.setState({
                    longitude: obj.common.longitude,
                    latitude:  obj.common.latitude,
                }, () => this.refMap.current?.clientHeight && this.updateMap()));
    }

    componentDidUpdate(/* prevProps, prevState, snapshot */) {
        if (this.refMap.current &&
            this.refMap.current.clientWidth !== this.state.mapWidth &&
            this.refMap.current.clientHeight !== this.state.mapHeight
        ) {
            if (!this.OSM) {
                this.setState({
                    mapWidth: this.refMap.current.clientWidth,
                    mapHeight: this.refMap.current.clientHeight,
                }, () => setTimeout(() => this.updateMap(), 10));
            } else {
                this.setState({
                    mapWidth: this.refMap.current.clientWidth,
                    mapHeight: this.refMap.current.clientHeight,
                }, () => this.OSM.oMap.updateSize());
            }
        }
    }

    renderTooltip() {
        if (!this.state.tooltip) {
            return null;
        }
        return <div
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
        </div>;
    }

    render() {
        if (JSON.stringify(this.props.points) !== JSON.stringify(this.state.points) && this.OSM) {
            setTimeout(() =>
                this.setState({ points: [...this.props.points] }, () =>
                    this.refMap.current?.clientWidth && this.updateMap()), 100);
        }

        return [
            <div
                ref={this.refMap}
                key="map"
                id={this.props.id || 'map'}
                style={{
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden',
                }}
            />,
            this.renderTooltip(),
        ];
    }
}

OlMap.propTypes = {
    id: PropTypes.string,
    socket: PropTypes.object,
    points: PropTypes.array,
    onSelect: PropTypes.func,
};

export default OlMap;
