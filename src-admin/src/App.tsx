import type { CSSProperties, JSX } from 'react';
import { ThemeProvider, StyledEngineProvider, type Theme } from '@mui/material/styles';
import { AppBar, Tabs, Tab } from '@mui/material';

import {
    I18n,
    Loader,
    AdminConnection,
    GenericApp,
    type GenericAppProps,
    type GenericAppSettings,
    type GenericAppState,
} from '@iobroker/gui-components';

import TabOptions from './Tabs/Options';
import TabSensors from './Tabs/Sensors';
import type { OpenSmartCityNative } from './types';

import enLang from './i18n/en.json';
import deLang from './i18n/de.json';
import ruLang from './i18n/ru.json';
import ptLang from './i18n/pt.json';
import nlLang from './i18n/nl.json';
import frLang from './i18n/fr.json';
import itLang from './i18n/it.json';
import esLang from './i18n/es.json';
import plLang from './i18n/pl.json';
import ukLang from './i18n/uk.json';
import zhCnLang from './i18n/zh-cn.json';

const styles: Record<string, CSSProperties> = {
    tabContent: {
        padding: 10,
        height: 'calc(100% - 64px - 48px - 20px)',
        overflow: 'auto',
    },
};

interface AppState extends GenericAppState {
    /** If the instance is running: the "Sensors" tab asks it for the list of things */
    alive: boolean;
}

export default class App extends GenericApp<GenericAppProps, AppState> {
    constructor(props: GenericAppProps) {
        const extendedProps: GenericAppSettings = { ...props };
        // `native.password` is NOT encrypted, it is only protected (`protectedNative` in io-package.json).
        // The former admin listed a non-existing field 'pass' here. Encrypting `password` now would make
        // the stored passwords of all existing instances unreadable.
        extendedProps.encryptedFields = [];
        // @ts-expect-error the class is expected here, the typing wants an instance
        extendedProps.Connection = AdminConnection;
        extendedProps.translations = {
            en: enLang,
            de: deLang,
            ru: ruLang,
            pt: ptLang,
            nl: nlLang,
            fr: frLang,
            it: itLang,
            es: esLang,
            pl: plLang,
            uk: ukLang,
            'zh-cn': zhCnLang,
        };

        extendedProps.sentryDSN = window.sentryDSN;

        super(props, extendedProps);

        this.state = {
            ...this.state,
            alive: false,
            selectedTab: window.localStorage.getItem(`${this.adapterName}.${this.instance}.selectedTab`) || 'options',
        };
    }

    onConnectionReady(): void {
        super.onConnectionReady();
        const aliveId = `system.adapter.${this.adapterName}.${this.instance}.alive`;
        void this.socket.subscribeState(aliveId, this.onAliveChanged);
        void this.socket.getState(aliveId).then(state => this.onAliveChanged(aliveId, state));
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();
        this.socket.unsubscribeState(`system.adapter.${this.adapterName}.${this.instance}.alive`, this.onAliveChanged);
    }

    onAliveChanged = (_id: string, state: ioBroker.State | null | undefined): void => {
        if (!!state?.val !== this.state.alive) {
            this.setState({ alive: !!state?.val });
        }
    };

    render(): JSX.Element {
        if (!this.state.loaded) {
            return (
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={this.state.theme}>
                        <Loader themeType={this.state.themeType} />
                    </ThemeProvider>
                </StyledEngineProvider>
            );
        }

        const native = this.state.native as OpenSmartCityNative;

        return (
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={this.state.theme}>
                    <div
                        className="App"
                        style={{
                            background: this.state.theme.palette.background.default,
                            color: this.state.theme.palette.text.primary,
                        }}
                    >
                        <AppBar position="static">
                            <Tabs
                                value={this.state.selectedTab || 'options'}
                                onChange={(_e, value: string) => {
                                    this.setState({ selectedTab: value });
                                    window.localStorage.setItem(
                                        `${this.adapterName}.${this.instance}.selectedTab`,
                                        value,
                                    );
                                }}
                                scrollButtons="auto"
                                sx={(theme: Theme) => ({
                                    '& .MuiTabs-indicator': {
                                        backgroundColor:
                                            theme.palette.mode === 'dark' ? theme.palette.secondary.main : '#FFF',
                                    },
                                })}
                            >
                                <Tab
                                    value="options"
                                    sx={(theme: Theme) => ({
                                        '&.Mui-selected': {
                                            color: theme.palette.mode === 'dark' ? undefined : '#FFF !important',
                                        },
                                    })}
                                    label={I18n.t('Options')}
                                />
                                <Tab
                                    value="sensors"
                                    sx={(theme: Theme) => ({
                                        '&.Mui-selected': {
                                            color: theme.palette.mode === 'dark' ? undefined : '#FFF !important',
                                        },
                                    })}
                                    label={I18n.t('Sensors')}
                                />
                            </Tabs>
                        </AppBar>
                        <div style={styles.tabContent}>
                            {this.state.selectedTab === 'options' || !this.state.selectedTab ? (
                                <TabOptions
                                    key="options"
                                    common={this.common}
                                    native={native}
                                    instance={this.instance}
                                    onLoad={(newNative: Record<string, any>) => this.onLoadConfig(newNative)}
                                    onChange={(attr, value) => this.updateNativeValue(attr, value)}
                                />
                            ) : null}
                            {this.state.selectedTab === 'sensors' || !this.state.selectedTab ? (
                                <TabSensors
                                    key="sensors"
                                    socket={this.socket}
                                    native={native}
                                    instance={this.instance}
                                    adapterName={this.adapterName}
                                    alive={this.state.alive}
                                    onChange={(attr, value) => this.updateNativeValue(attr, value)}
                                />
                            ) : null}
                        </div>
                        {this.renderError()}
                        {this.renderSaveCloseButtons()}
                    </div>
                </ThemeProvider>
            </StyledEngineProvider>
        );
    }
}
