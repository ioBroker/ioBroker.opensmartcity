import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@mui/styles';

import { VisRxWidget } from '@iobroker/vis-2-widgets-react-dev';

import Map from './components/Map';

const styles = () => ({
    content: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
});

const Generic = window.visRxWidget || VisRxWidget;

class OpenSmartCityMap extends Generic {
    constructor(props) {
        super(props);
        this.state._key = 0;
        this.hideHome = null;
    }

    static getWidgetInfo() {
        return {
            id: 'tplOpenSmartCityMap',

            visSet: 'opensmartcity',
            visSetLabel: 'set_label', // Label of widget set
            visSetColor: '#dcca19', // color of a widget set

            visWidgetLabel: 'OpenSmartCityMap',  // Label of widget
            visName: 'OpenSmartCityMap',
            visAttrs: [{
                name: 'common',
                fields: [
                    {
                        name: 'noCard',
                        label: 'without_card',
                        type: 'checkbox',
                        default: false,
                    },
                    {
                        name: 'widgetTitle',
                        label: 'name',
                        hidden: '!!data.noCard',
                    },
                    {
                        label: 'instance',
                        name: 'instance',
                        type: 'instance',
                        adapter: 'opensmartcity',
                    },
                    {
                        name: 'hideHome',
                        label: 'hide_home',
                        type: 'checkbox',
                    },
                    {
                        label: 'zoom_level',
                        name: 'zoomLevel',
                        type: 'slider',
                        min: -1,
                        max: 17,
                        default: 0,
                    },
                ],
            }],
            visDefaultStyle: {
                width: '100%',
                height: 300,
                position: 'relative',
            },
            visPrev: 'widgets/opensmartcity/img/prev_opensmartcity.png',
        };
    }

    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo() {
        return OpenSmartCityMap.getWidgetInfo();
    }

    static buildPoints(things, dataStreams, values) {
        return Object.keys(things).map(id => {
            const obj = things[id];
            if (!obj.native || !obj.native.coordinates || !obj.native.coordinates.length) {
                return null;
            }
            return {
                longitude: obj.native.coordinates[0],
                latitude: obj.native.coordinates[1],
                name: obj.common.name && typeof obj.common.name === 'object' ? (obj.common.name[this.props.context.lang] || obj.common.name.en) : (obj.common.name || ''),
                description: obj.common.desc && typeof obj.common.desc === 'object' ? (obj.common.desc[this.props.context.lang] || obj.common.desc.en) : (obj.common.desc || ''),
                dataStreams: Object.keys(dataStreams).filter(dsId => dsId.startsWith(`${id}.`)).map(dsId => ({
                    id: dsId.split('.').pop(),
                    name: dataStreams[dsId].common.name,
                    description: dataStreams[dsId].common.desc,
                    value: values[dsId] && values[dsId].val !== undefined ? values[dsId].val : null,
                    unit: dataStreams[dsId].common.unit || '',
                })),
            };
        }).filter(p => p);
    }

    onDataUpdated = (id, state) => {
        const values = { ...this.state.values };
        values[id] = state;
        this.setState({
            values,
            points: OpenSmartCityMap.buildPoints(this.state.things, this.state.dataStreams, values),
        });
    };

    async propertiesUpdate() {
        const subscribed = `${this.state.rxData.instance}.*`;
        // unsubscribe from old
        if (this.subscribed && this.subscribed !== subscribed) {
            this.props.context.socket.unsubscribeObject(this.subscribed, this.onPointsChanged);
            await this.props.context.socket.unsubscribeStates(this.subscribed, this.onDataUpdated);
            this.subscribed = null;
        }
        if (this.state.rxData.instance !== null && this.state.rxData.instance !== undefined && this.subscribed !== subscribed) {
            this.subscribed = subscribed;
            const things = await this.props.context.socket.getObjectViewSystem('channel', this.subscribed.replace(/\*$/, ''), `${subscribed.replace(/\*$/, '')}\u9999`);
            const dataStreams = await this.props.context.socket.getObjectViewSystem('state', this.subscribed.replace(/\*$/, ''), `${subscribed.replace(/\*$/, '')}\u9999`);
            const values = await this.props.context.socket.getForeignStates(this.subscribed);

            this.setState({
                things,
                values,
                dataStreams,
                points: OpenSmartCityMap.buildPoints(things, dataStreams, values),
            }, async () => {
                await this.props.context.socket.subscribeObject(this.subscribed, this.onPointsChanged);
                await this.props.context.socket.subscribeState(this.subscribed, this.onDataUpdated);
            });
        }
    }

    static getI18nPrefix() {
        return 'opensmartcity_';
    }

    async componentDidMount() {
        super.componentDidMount();
        await this.propertiesUpdate();
    }

    onPointsChanged = (id, obj) => {
        if (!obj) {
            if (this.state.things[id]) {
                const things = { ...this.state.things };
                delete things[id];
                this.setState({
                    things,
                    points: OpenSmartCityMap.buildPoints(things, this.state.dataStreams, this.state.values),
                });
            } else if (this.state.dataStreams[id]) {
                const dataStreams = { ...this.state.dataStreams };
                delete dataStreams[id];
                this.setState({
                    dataStreams,
                    points: OpenSmartCityMap.buildPoints(this.state.things, dataStreams, this.state.values),
                });
            }
        } else if (obj.type === 'channel') {
            const things = { ...this.state.things };
            things[id] = obj;
            this.setState({
                things,
                points: OpenSmartCityMap.buildPoints(things, this.state.dataStreams, this.state.values),
            });
        } else if (obj.type === 'state') {
            const dataStreams = { ...this.state.dataStreams };
            dataStreams[id] = obj;
            this.setState({
                dataStreams,
                points: OpenSmartCityMap.buildPoints(this.state.things, dataStreams, this.state.values),
            });
        }
    };

    async componentWillUnmount() {
        if (this.subscribed) {
            await this.props.context.socket.unsubscribeObject(this.subscribed, this.onPointsChanged);
            await this.props.context.socket.unsubscribeState(this.subscribed, this.onDataUpdated);
            this.subscribed = null;
        }
    }

    onRxDataChanged() {
        this.propertiesUpdate();
    }

    renderWidgetBody(props) {
        super.renderWidgetBody(props);

        if (this.hideHome === null) {
            this.hideHome = this.state.rxData.hideHome;
        } else if (this.hideHome !== this.state.rxData.hideHome) {
            this.hideHome = this.state.rxData.hideHome;
            setTimeout(() => this.setState({ _key: this.state._key + 1 }), 100);
        }

        const content = <Map
            key={this.state._key}
            socket={this.props.context.socket}
            id={`map_${this.props.id}`}
            things={this.state.points || []}
            hideHome={this.state.rxData.hideHome}
        />;

        if (!this.state.rxData.noCard) {
            return this.wrapContent(content);
        }

        return content;
    }
}

OpenSmartCityMap.propTypes = {
    context: PropTypes.object,
    themeType: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.object,
};

export default withStyles(styles)(withTheme(OpenSmartCityMap));
