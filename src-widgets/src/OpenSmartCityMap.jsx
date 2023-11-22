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

    static buildPoints(things, values) {
        return Object.keys(things).map(id => {
            const obj = things[id];
            return {
                longitude: obj.native.coordinates[0],
                latitude: obj.native.coordinates[1],
                unit: obj.common.unit,
                value: values[id] ? values[id].val : '--',
                name: obj.common.name && typeof obj.common.name === 'object' ? (obj.common.name[this.props.context.lang] || obj.common.name.en) : (obj.common.name || ''),
            };
        });
    }

    onDataUpdated = (id, state) => {
        const values = { ...this.state.values };
        values[id] = state;
        this.setState({
            values,
            points: OpenSmartCityMap.buildPoints(this.state.things, values),
        });
    };

    async propertiesUpdate() {
        const subscribed = `system.adapter.opensmartcity.${this.state.rxData.instance}`;
        // unsubscribe from old
        if (this.subscribed && this.subscribed !== subscribed) {
            this.props.context.socket.unsubscribeObject(this.subscribed, this.onPointsChanged);
            await this.props.context.socket.unsubscribeStates(`${this.subscribed.replace('system.adapter.', '')}.*`, this.onDataUpdated);
            this.subscribed = null;
        }
        if (this.state.rxData.instance !== null && this.state.rxData.instance !== undefined && this.subscribed !== subscribed) {
            this.subscribed = subscribed;
            const things = await this.props.context.socket.getObjectViewSystem('state', `opensmartcity.${this.state.rxData.instance}.`, `opensmartcity.${this.state.rxData.instance}.\u9999`);
            const values = await this.props.context.socket.getStates(`${this.subscribed.replace('system.adapter.', '')}.*`);

            this.setState({
                things,
                values,
                points: OpenSmartCityMap.buildPoints(things, values),
            }, async () => {
                await this.props.context.socket.subscribeObject(`system.adapter.opensmartcity.${this.state.rxData.instance}`, this.onPointsChanged);
                await this.props.context.socket.subscribeState(`${this.subscribed.replace('system.adapter.', '')}.*`, this.onDataUpdated);
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

    onPointsChanged = () => this.propertiesUpdate();

    async componentWillUnmount() {
        if (this.subscribed) {
            await this.props.context.socket.unsubscribeObject(this.subscribed, this.onPointsChanged);
            await this.props.context.socket.unsubscribeState(`${this.subscribed.replace('system.adapter.', '')}.*`, this.onDataUpdated);
            this.subscribed = null;
        }
    }

    onRxDataChanged() {
        this.propertiesUpdate();
    }

    renderWidgetBody(props) {
        super.renderWidgetBody(props);
        const content = <Map
            socket={this.props.context.socket}
            id={`map_${this.props.id}`}
            points={this.state.points || []}
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
