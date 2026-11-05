import { Component, type CSSProperties, type JSX } from 'react';

import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { I18n, Logo } from '@iobroker/gui-components';

import type { OpenSmartCityNative } from '../types';

const styles: Record<string, CSSProperties> = {
    tab: {
        width: '100%',
        minHeight: '100%',
    },
    columnSettings: {
        display: 'flex',
        flexDirection: 'column',
        verticalAlign: 'top',
        width: 200,
        marginRight: 20,
        gap: 5,
    },
};

interface OptionsProps {
    common: ioBroker.InstanceCommon | null;
    native: OpenSmartCityNative;
    instance: number;
    /** Called with the configuration loaded from a file (button in the logo) */
    onLoad: (native: Record<string, any>) => void;
    onChange: (attr: keyof OpenSmartCityNative, value: string) => void;
}

export default class Options extends Component<OptionsProps> {
    render(): JSX.Element {
        return (
            <form style={styles.tab}>
                <Logo
                    instance={this.props.instance}
                    common={this.props.common}
                    native={this.props.native}
                    onError={(text: string) => window.alert(text)}
                    onLoad={this.props.onLoad}
                />
                <div style={styles.columnSettings}>
                    <FormControl
                        style={{ minWidth: 200 }}
                        variant="standard"
                    >
                        <InputLabel>{I18n.t('City')}</InputLabel>
                        <Select
                            value={this.props.native.city}
                            onChange={e => this.props.onChange('city', e.target.value)}
                        >
                            <MenuItem value="Solingen">Solingen</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <TextField
                        variant="standard"
                        style={{ minWidth: 200 }}
                        label={I18n.t('User')}
                        value={this.props.native.user}
                        onChange={e => this.props.onChange('user', e.target.value)}
                    />
                    <br />
                    <TextField
                        variant="standard"
                        style={{ minWidth: 200 }}
                        label={I18n.t('Password')}
                        type="password"
                        value={this.props.native.password}
                        onChange={e => this.props.onChange('password', e.target.value)}
                    />
                    <br />
                    <TextField
                        variant="standard"
                        style={{ minWidth: 200 }}
                        type="number"
                        label={I18n.t('Poll interval')}
                        helperText={I18n.t('in milliseconds')}
                        value={this.props.native.pollInterval}
                        // stored as string, as before: the backend parses it with parseInt()
                        onChange={e => this.props.onChange('pollInterval', e.target.value)}
                    />
                    <br />
                    <TextField
                        variant="standard"
                        style={{ width: '100%', maxWidth: 1000 }}
                        label={I18n.t('FROST Server URL')}
                        value={this.props.native.url}
                        onChange={e => this.props.onChange('url', e.target.value)}
                    />
                </div>
            </form>
        );
    }
}
