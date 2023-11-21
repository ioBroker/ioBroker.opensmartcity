import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';

import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';

import { I18n, Utils, Logo } from '@iobroker/adapter-react-v5';

const styles = () => ({
    tab: {
        width: '100%',
        minHeight: '100%',
    },
    input: {
        minWidth: 300,
    },
    button: {
        marginRight: 20,
        marginBottom: 40,
    },
    card: {
        maxWidth: 345,
        textAlign: 'center',
    },
    media: {
        height: 180,
    },
    column: {
        display: 'inline-block',
        verticalAlign: 'top',
        marginRight: 20,
    },
    columnLogo: {
        width: 350,
        marginRight: 0,
    },
    columnSettings: {
        width: 200,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    },
    cannotUse: {
        color: 'red',
        fontWeight: 'bold',
    },
    hintUnsaved: {
        fontSize: 12,
        color: 'red',
        fontStyle: 'italic',
    },
});

class Options extends Component {
    render() {
        return <form className={this.props.classes.tab}>
            <Logo
                classes={{}}
                instance={this.props.instance}
                common={this.props.common}
                native={this.props.native}
                onError={text => window.alert(text)}
                onLoad={this.props.onLoad}
            />
            <div className={Utils.clsx(this.props.classes.column, this.props.classes.columnSettings)}>
                <FormControl style={{ minWidth: 200 }} variant="standard">
                    <InputLabel>{I18n.t('City')}</InputLabel>
                    <Select
                        value={this.props.native.protocol}
                        onChange={e => this.props.onChange('protocol', e.target.value)}
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
                <TextField
                    variant="standard"
                    style={{ minWidth: 200 }}
                    type="number"
                    label={I18n.t('Poll interval')}
                    helperText={I18n.t('in milliseconds')}
                    value={this.props.native.pollInterval}
                    onChange={e => this.props.onChange('pollInterval', e.target.value)}
                />
            </div>
        </form>;
    }
}

Options.propTypes = {
    common: PropTypes.object.isRequired,
    native: PropTypes.object.isRequired,
    instance: PropTypes.number.isRequired,
    onLoad: PropTypes.func,
    onChange: PropTypes.func,
};

export default withStyles(styles)(Options);
