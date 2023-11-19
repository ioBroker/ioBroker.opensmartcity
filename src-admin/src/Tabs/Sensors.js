import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';

import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, Fab,
} from '@mui/material';

import { I18n, Utils, Logo } from '@iobroker/adapter-react-v5';
import {Add} from "@mui/icons-material";

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
        width: 'calc(100% - 370px)',
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

class Sensors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            things: [],
            addId: '',
            showAddDialog: false,
        };
    }

    async componentDidMount() {
        // const response = await fetch('https://frost.solingen.de:8443/FROST-Server/v1.1/Datastreams?$expand=Thing,Observations($top=1;$orderby=phenomenonTime%20desc)',
        //     {
        //         headers: {
        //             Authorization: `Basic ${(`${this.props.native.user}:${this.props.native.password}`).toString('base64')}`,
        //             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        //             Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        //             'Accept-Encoding': 'gzip, deflate, br',
        //             'Accept-Language': 'de-DE,de;q=0.9,de-DE;q=0.8,de;q=0.7,en-US;q=0.6,en;q=0.5',
        //             'Cache-Control': 'max-age=0',
        //         }
        //     });
        // const things = await response.text();
        // this.setState({things});
        const result = await this.props.socket.sendTo(`${this.props.adapterName}.${this.props.instance}`, 'getThings', {});
        this.setState({ things: result.result.value });
    }

    renderLine(id, index) {
        const item = (this.state.things || []).find(item => item['@iot.id'] === id);

        return <TableRow key={`${index}:${id}`}>
            <TableCell>{item ? item.name : id}</TableCell>
            <TableCell>{item ? [
                <span key={0}>{item.observedArea?.coordinates[0]}</span>,
                <span key={1}>,</span>,
                <span key={2}>{item.observedArea?.coordinates[1]}</span>,
            ] : null}
            </TableCell>
            <TableCell>{item?.description || ''}</TableCell>
            <TableCell>{item ? item.observationType.split('/').pop() : ''}</TableCell>
            <TableCell>{item?.Observations.result || ''}</TableCell>
        </TableRow>;
    }
    addSensor() {
        const sensors = [...this.props.native.sensors];
        sensors.push(this.state.addId);
        this.props.onChange('sensors', sensors);

        this.setState({ showAddDialog: false });
    }

    renderAddNewSensor(){
        if (!this.state.showAddDialog) {
            return null;
        }
        return <Dialog
            open={!0}
            onClose={() => this.setState({ showAddDialog: false })}
        >
            <DialogTitle>{I18n.t('Add new sensor')}</DialogTitle>
            <DialogContent>
                <FormControl fullWidth variant="standard">
                    <InputLabel>{I18n.t('Thing')}</InputLabel>
                    <Select
                        value={this.state.addId}
                        onChange={e => this.setState({ addId: e.target.value })}
                    >
                        {this.state.things.map(item =>
                            <MenuItem value={item['@iot.id']}>{item.name}</MenuItem>)}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button
                    disabled={!this.state.addId}
                    onClick={() => this.addSensor()}
                    >
                    {I18n.t('Add')}
                </Button>
                <Button
                    onClick={() => this.setState({ showAddDialog: false })}
                >
                    {I18n.t('Cancel')}
                </Button>
            </DialogActions>
        </Dialog>;
    }

    render() {
        return <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Fab onClick={() => this.setState({ showAddDialog: true })} size="small" style={{ marginRight: 8 }}>
                            <Add />
                        </Fab>
                        Name
                    </TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Value</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {(this.props.native.sensors || []).map((id, index) => this.renderLine(id, index))}
            </TableBody>
            {this.renderAddNewSensor()}
        </Table>;
    }
}

Sensors.propTypes = {
    common: PropTypes.object.isRequired,
    native: PropTypes.object.isRequired,
    instance: PropTypes.number.isRequired,
    adapterName: PropTypes.string.isRequired,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
    onChange: PropTypes.func,
    changed: PropTypes.bool,
    socket: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sensors);
