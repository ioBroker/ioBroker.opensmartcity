import React from 'react';
import { withStyles } from '@mui/styles';

import WidgetDemoApp from '@iobroker/vis-2-widgets-react-dev/widgetDemoApp';
import { i18n as I18n } from '@iobroker/adapter-react-v5';

import translations from './translations';

import OpenSmartCityMap from './OpenSmartCityMap';
import './App.scss';

const styles = theme => ({
    app: {
        backgroundColor: theme?.palette?.background.default,
        color: theme?.palette?.text.primary,
        height: '100%',
        width: '100%',
        overflow: 'auto',
        display: 'flex',
    },
});

class App extends WidgetDemoApp {
    constructor(props) {
        super(props);

        // init translations
        I18n.extendTranslations(translations);

        this.state.ready = false;

        this.socket.registerConnectionHandler(this.onConnectionChanged);
    }

    onConnectionChanged = isConnected => {
        this.setState({ ready: isConnected });
    }

    renderWidget() {
        return <div className={this.props.classes.app}>
            {this.state.ready ? <OpenSmartCityMap
                context={{ socket: this.socket }}
                themeType={this.state.themeType}
                style={{
                    width: 400,
                    height: 300,
                }}
                data={{
                    instance: '0',
                }}
            /> : null}
        </div>;
    }
}

export default withStyles(styles)(App);
