import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import 'moment/locale/de';
import 'moment/locale/ru';
import 'moment/locale/fr';
import 'moment/locale/it';
import 'moment/locale/es';
import 'moment/locale/pl';
import 'moment/locale/uk';
import 'moment/locale/zh-cn';
import 'moment/locale/nl';
import 'moment/locale/pt';

import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, Fab, IconButton, LinearProgress,
} from '@mui/material';

import {
    Add, Circle, Close, Delete,
} from '@mui/icons-material';

import { I18n } from '@iobroker/adapter-react-v5';

import Map from '../components/Map';

const styles = () => ({
    preSpace: {
        marginLeft: 5,
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        justifyContent: 'space-between',
    },
    menuItem1: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
    },
    description: {
        fontSize: 12,
        opacity: 0.5,
        fontStyle: 'italic',
    },
    time: {
        fontSize: 12,
        opacity: 0.5,
        fontStyle: 'italic',
        textAlign: 'right',
    },
    value: {
        textAlign: 'right',
    },
    dialogPaper: {
        minHeight: 'calc(100% - 32px)',
        height: 'calc(100% - 32px)',
    },
});

class Sensors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            things: [],
            addId: '',
            showAddDialog: false,
            requesting: false,
            alive: this.props.alive,
            savedThings: [],
        };
    }

    componentDidMount() {
        if (this.state.alive) {
            this.setState({ requesting: true }, async () => {
                const result = await this.props.socket.sendTo(`${this.props.adapterName}.${this.props.instance}`, 'getThings', {});
                const savedThings = await this.props.socket.getObjectViewSystem('state', `${this.props.adapterName}.${this.props.instance}.`, `${this.props.adapterName}.${this.props.instance}.\u9999`);
                const savedValues = await this.props.socket.getStates(`${this.props.adapterName}.${this.props.instance}.*`);
                const _savedThings = [];
                Object.keys(savedThings).forEach(id => {
                    _savedThings.push({
                        '@iot.id': id.split('.').pop(),
                        name: savedThings[id].common.name,
                        description: savedThings[id].common.desc,
                        observationType: savedThings[id].native.type,
                        observedArea: {
                            coordinates: savedThings[id].native.coordinates,
                        },
                        unitOfMeasurement: {
                            symbol: savedThings[id].common.unit,
                        },
                        Observations: [{
                            result: savedValues[id]?.val,
                            phenomenonTime: new Date(savedValues[id]?.ts).toISOString(),
                        }],
                    });
                });

                this.setState({ things: result.result.value, savedThings: _savedThings, requesting: false });
            });
        }
    }

    renderLine(id, index) {
        let item = (this.state.things || []).find(_item => _item['@iot.id'] === id);
        if (!item) {
            item = (this.state.savedThings || []).find(_item => _item['@iot.id'] === id);
        }
        if (item?.unitOfMeasurement?.symbol === '°') {
            item.unitOfMeasurement.symbol = '°C';
        }

        return <TableRow key={`${index}:${id}`}>
            <TableCell>
                <Circle style={{ width: 10, height: 10, color: !item ? undefined : (item?.Thing?.properties?.status === 'online' ? '#0F0' : '#F00') }} />
            </TableCell>
            <TableCell>
                <div>{item ? item.name : id}</div>
                <div className={this.props.classes.description}>{item?.description || ''}</div>
            </TableCell>
            <TableCell>
                {item ? <span key={0}>{item.observedArea?.coordinates[0]}</span> : null}
                {item ? <span key={1}>,</span> : null}
                {item ? <span key={2} className={this.props.classes.preSpace}>{item.observedArea?.coordinates[1]}</span> : null}
            </TableCell>
            <TableCell>{item ? item.observationType?.split('/').pop() || '' : ''}</TableCell>
            <TableCell>
                <div>
                    {item?.Observations?.[0]?.result !== undefined ? item.Observations[0].result.toString() : ''}
                    {item?.unitOfMeasurement?.symbol || item?.unitOfMeasurement?.name || ''}
                </div>
                <div className={this.props.classes.time} style={{ textAlign: 'left' }}>
                    {item?.Observations?.[0]?.phenomenonTime ?
                        <Moment
                            locale={I18n.getLanguage()}
                            interval={30000}
                            date={item?.Observations[0].phenomenonTime}
                            fromNow
                        /> : null}
                </div>
            </TableCell>
            <TableCell>
                <IconButton
                    onClick={() => {
                        const sensors = [...this.props.native.sensors];
                        sensors.splice(index, 1);
                        this.props.onChange('sensors', sensors);
                    }}
                >
                    <Delete />
                </IconButton>
            </TableCell>
        </TableRow>;
    }

    addSensor() {
        const sensors = [...this.props.native.sensors];
        sensors.push(this.state.addId);
        this.props.onChange('sensors', sensors);

        this.setState({ showAddDialog: false });
    }

    renderAddNewSensor() {
        if (!this.state.showAddDialog) {
            return null;
        }
        return <Dialog
            open={!0}
            maxWidth="lg"
            fullWidth
            // classes={{ paper: this.props.classes.dialogPaper }}
            onClose={() => this.setState({ showAddDialog: false })}
        >
            <DialogTitle>{I18n.t('Add new sensor')}</DialogTitle>
            <DialogContent style={{ width: 'calc(100% - 48px)', height: 'calc(100% - 40px)' }}>
                <FormControl fullWidth variant="standard">
                    <InputLabel>{I18n.t('Sensor')}</InputLabel>
                    <Select
                        value={this.state.addId}
                        onChange={e => this.setState({ addId: e.target.value })}
                        renderValue={value => {
                            const item = (this.state.things || []).find(_item => _item['@iot.id'] === value);
                            if (!item) {
                                return value;
                            }
                            return <div className={this.props.classes.menuItem}>
                                <div className={this.props.classes.menuItem1}>
                                    <div>
                                        <Circle style={{ width: 10, height: 10, color: item.Thing?.properties?.status === 'online' ? '#0F0' : '#F00' }} />
                                    </div>
                                    <div>
                                        <div>{item.name}</div>
                                        <div className={this.props.classes.description}>{item.description}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className={this.props.classes.value}>
                                        {item.Observations?.[0]?.result !== undefined ? item.Observations[0].result.toString() : ''}
                                        {item.unitOfMeasurement?.symbol || item.unitOfMeasurement?.name || ''}
                                    </div>
                                    <div className={this.props.classes.time}>
                                        {item.Observations?.[0]?.phenomenonTime ?
                                            <Moment
                                                locale={I18n.getLanguage()}
                                                interval={30000}
                                                date={item.Observations[0].phenomenonTime}
                                                fromNow
                                            /> : null}
                                    </div>
                                </div>
                            </div>;
                        }}
                    >
                        {this.state.things.map(item =>
                            <MenuItem
                                key={item['@iot.id']}
                                value={item['@iot.id']}
                                className={this.props.classes.menuItem}
                                disabled={this.props.native.sensors.includes(item['@iot.id'])}
                            >
                                <div className={this.props.classes.menuItem1}>
                                    <div>
                                        <Circle style={{ width: 10, height: 10, color: item.Thing?.properties?.status === 'online' ? '#0F0' : '#F00' }} />
                                    </div>
                                    <div>
                                        <div>{item.name}</div>
                                        <div className={this.props.classes.description}>{item.description}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className={this.props.classes.value}>
                                        {item.Observations?.[0]?.result !== undefined ? item.Observations[0].result.toString() : ''}
                                        {item.unitOfMeasurement?.symbol || item.unitOfMeasurement?.name || ''}
                                    </div>
                                    <div className={this.props.classes.time}>
                                        {item.Observations?.[0]?.phenomenonTime ?
                                            <Moment
                                                locale={I18n.getLanguage()}
                                                interval={30000}
                                                date={item.Observations[0].phenomenonTime}
                                                fromNow
                                            /> : null}
                                    </div>
                                </div>
                            </MenuItem>)}
                    </Select>
                </FormControl>
                {/* <div style={{ width: '100%', height: 'calc(100% - 48px)' }}>
                    <Map
                        id="dialogMap"
                        socket={this.props.socket}
                        points={(this.state.things || []).map(item => {
                            return {
                                longitude: item?.observedArea?.coordinates[0],
                                latitude: item?.observedArea?.coordinates[1],
                                unit: item?.unitOfMeasurement?.symbol || item?.unitOfMeasurement?.name,
                                value: item?.Observations?.[0]?.result,
                                name: item?.name,
                            };
                        }).filter(f => f)}
                        onSelect={id => this.setState({ addId: id })}
                    />
                </div> */}
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    disabled={!this.state.addId}
                    color="primary"
                    onClick={() => this.addSensor()}
                    startIcon={<Add />}
                >
                    {I18n.t('Add')}
                </Button>
                <Button
                    variant="contained"
                    color="grey"
                    startIcon={<Close />}
                    onClick={() => this.setState({ showAddDialog: false })}
                >
                    {I18n.t('Cancel')}
                </Button>
            </DialogActions>
        </Dialog>;
    }

    render() {
        if (this.props.alive !== this.state.alive) {
            setTimeout(() => this.setState({ alive: this.props.alive }, () => this.componentDidMount()), 200);
        }

        return <div style={{ width: '100%', height: '100%' }}>
            <div
                style={{
                    display: 'inline-block',
                    width: 'calc(50% - 5px)',
                    height: '100%',
                    verticalAlign: 'top',
                    overflow: 'auto',
                }}
            >
                {this.state.requesting ? <LinearProgress /> : null}
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: 20 }}>
                                <Fab onClick={() => this.setState({ showAddDialog: true })} size="small" style={{ marginRight: 8 }}>
                                    <Add />
                                </Fab>
                            </TableCell>
                            <TableCell style={{ width: 'calc(100% - 300px)' }}>Name</TableCell>
                            <TableCell style={{ width: 150 }}>Location</TableCell>
                            <TableCell style={{ width: 100 }}>Type</TableCell>
                            <TableCell style={{ width: 100 }}>Value</TableCell>
                            <TableCell style={{ width: 40 }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(this.props.native.sensors || []).map((id, index) => this.renderLine(id, index))}
                    </TableBody>
                    {this.renderAddNewSensor()}
                </Table>
            </div>
            <div
                style={{
                    display: 'inline-block',
                    width: 'calc(50% - 5px)',
                    marginLeft: 5,
                    height: '100%',
                    verticalAlign: 'top',
                    position: 'relative',
                }}
            >
                <Map
                    socket={this.props.socket}
                    points={(this.props.native.sensors || []).map(id => {
                        let item = (this.state.things || []).find(_item => _item['@iot.id'] === id);
                        if (!item) {
                            item = (this.state.savedThings || []).find(_item => _item['@iot.id'] === id);
                        }
                        if (item?.unitOfMeasurement?.symbol === '°') {
                            item.unitOfMeasurement.symbol = '°C';
                        }
                        if (!item) {
                            return null;
                        }
                        return {
                            longitude: item?.observedArea?.coordinates[0],
                            latitude: item?.observedArea?.coordinates[1],
                            unit: item?.unitOfMeasurement?.symbol || item?.unitOfMeasurement?.name,
                            value: item?.Observations?.[0]?.result,
                            name: item?.name,
                        };
                    }).filter(f => f)}
                />
            </div>
        </div>;
    }
}

Sensors.propTypes = {
    native: PropTypes.object.isRequired,
    instance: PropTypes.number.isRequired,
    adapterName: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    socket: PropTypes.object.isRequired,
    alive: PropTypes.bool,
};

export default withStyles(styles)(Sensors);
