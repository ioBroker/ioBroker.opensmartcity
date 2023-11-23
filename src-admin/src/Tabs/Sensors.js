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

    valueCommonPart: {
        fontSize: 12,
    },
    valueLine: {
        fontSize: 11,
    },
    valueEqual: {
        opacity: 0.7,
        fontSize: 11,
    },
    valueText: {
        fontWeight: 'bold',
        fontSize: 11,
    },
    valueValue: {
        fontSize: 11,

    },
    valueUnit: {
        opacity: 0.7,
        fontSize: 11,
    },
    valueTime: {
        fontSize: 11,
        fontStyle: 'italic',
        opacity: 0.7,
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
        };
    }

    componentDidMount() {
        if (this.state.alive) {
            this.props.socket.subscribeState(`${this.props.adapterName}.${this.props.instance}.*`, this.onStateChanged);

            this.setState({ requesting: true }, async () => {
                const actualThings = await this.props.socket.sendTo(`${this.props.adapterName}.${this.props.instance}`, 'getThings', {});
                const savedThings = await this.props.socket.getObjectViewSystem('channel', `${this.props.adapterName}.${this.props.instance}.`, `${this.props.adapterName}.${this.props.instance}.\u9999`);
                const savedDataStreams = await this.props.socket.getObjectViewSystem('state', `${this.props.adapterName}.${this.props.instance}.`, `${this.props.adapterName}.${this.props.instance}.\u9999`);
                const savedValues = await this.props.socket.getStates(`${this.props.adapterName}.${this.props.instance}.*`);
                const things = [];
                // merge information together

                Object.keys(savedThings).forEach(id => {
                    things.push({
                        id: id.split('.').pop(),
                        name: savedThings[id].common.name,
                        description: savedThings[id].common.desc,
                        coordinates: savedThings[id].native.coordinates,
                        dataStreams: [],
                        status: null,
                    });
                });
                Object.keys(savedDataStreams).forEach(id => {
                    // find thing
                    const parts = id.split('.');
                    const thingId = parts[parts.length - 2];
                    const thing = things.find(t => t.id === thingId);
                    if (thing) {
                        const dsId = parts[parts.length - 1];
                        if (dsId !== 'status') {
                            thing.dataStreams.push({
                                id: dsId,
                                name: savedDataStreams[id].common.name,
                                description: savedDataStreams[id].common.desc,
                                unit: savedDataStreams[id].common.unit,
                                value: savedValues[id] ? savedValues[id].val : null,
                            });
                            thing.time = thing.time || savedValues[id]?.ts;
                        } else {
                            thing.status = savedValues[id]?.val ? 'online' : 'offline';
                        }
                    } else {
                        // cannot be!
                    }
                });
                actualThings?.result?.forEach(thing => {
                    const thingId = thing['@iot.id'].toString();
                    const savedThing = things.find(t => t.id === thingId);
                    if (savedThing) {
                        if (thing.Datastreams) {
                            const streamWithCoordinates = thing.Datastreams?.find(ds => ds.observedArea?.coordinates);
                            const streamWithTime = thing.Datastreams?.find(ds => ds.phenomenonTime);
                            let time;
                            if (streamWithTime) {
                                time = new Date(streamWithTime.phenomenonTime.split('/').pop()).getTime();
                            }
                            thing.Datastreams.forEach(ds => {
                                const savedDs = savedThing.dataStreams.find(d => d.id === ds['@iot.id'].toString());
                                if (!savedDs) {
                                    let unit = ds.unitOfMeasurement?.symbol || ds.unitOfMeasurement?.name;
                                    if (unit === '°') {
                                        unit = '°C';
                                    }
                                    savedThing.dataStreams.push({
                                        id: ds['@iot.id'].toString(),
                                        name: ds.name,
                                        description: ds.description,
                                        unit,
                                    });
                                }
                            });
                            savedThing.time = time || savedThing.time;
                            savedThing.coordinates = streamWithCoordinates?.observedArea?.coordinates || savedThing.coordinates;
                            savedThing.status = thing.properties?.status || savedThing.status;
                        }
                    } else {
                        const streamWithCoordinates = thing.Datastreams?.find(ds => ds.observedArea?.coordinates);
                        const streamWithTime = thing.Datastreams?.find(ds => ds.phenomenonTime);
                        const streamWithName = thing.Datastreams?.find(ds => ds.name);
                        const commonPart = streamWithName?.name?.match(/(.*)\((.*)\)/)?.[1];
                        let time;
                        if (streamWithTime) {
                            time = new Date(streamWithTime.phenomenonTime.split('/').pop()).getTime();
                        }

                        things.push({
                            id: thingId,
                            name: commonPart ? `${thing.name} (${commonPart.trim()})` : thing.name,
                            description: thing.description,
                            coordinates: streamWithCoordinates?.observedArea?.coordinates,
                            dataStreams: thing.Datastreams ? thing.Datastreams.map(ds => {
                                let unit = ds.unitOfMeasurement?.symbol || ds.unitOfMeasurement?.name;
                                if (unit === '°') {
                                    unit = '°C';
                                }

                                return {
                                    id: ds['@iot.id'].toString(),
                                    name: commonPart ? ds.name.replace(commonPart, '').trim().replace(/^\(/, '').replace(/\)$/, '') : ds.name,
                                    description: ds.description,
                                    unit,
                                };
                            }) : [],
                            status: thing.properties?.status,
                            time,
                        });
                    }
                });

                this.setState({ things, requesting: false });
            });
        }
    }

    componentWillUnmount() {
        this.props.socket.unsubscribeState(`${this.props.adapterName}.${this.props.instance}.*`, this.onStateChanged);
    }

    onStateChanged = (id, state) => {
        if (!state) {
            return;
        }
        const parts = id.split('.');
        const thingId = parts[parts.length - 2];
        const dsId = parts[parts.length - 1];
        let thing = this.state.things.find(t => t.id === thingId);
        if (thing) {
            const things = [...this.state.things];
            thing = things.find(t => t.id === thingId);

            const ds = thing.dataStreams.find(d => d.id === dsId);
            if (ds && ds.value !== state.val) {
                ds.value = state.val;
                this.setState({ things });
            }
        }
    };

    renderDataStreams(dataStreams, time) {
        if (!dataStreams || !dataStreams.length) {
            return null;
        }
        return <div>
            {dataStreams.map(ds => {
                if (ds.value !== null && ds.value !== undefined) {
                    return <div key={ds.id} className={this.props.classes.valueLine}>
                        <span className={this.props.classes.valueText}>{ds.name}</span>
                        <span className={this.props.classes.valueEqual}>=</span>
                        <span className={this.props.classes.valueValue}>{ds.value}</span>
                        <span className={this.props.classes.valueUnit}>{ds.unit || ''}</span>
                    </div>;
                }
                if (ds.unit) {
                    return <div key={ds.id}>
                        <span className={this.props.classes.valueText}>{ds.name}</span>
                        <span className={this.props.classes.valueUnit}>
                            (
                            {ds.unit}
                            )
                        </span>
                    </div>;
                }

                return <div key={ds.id} className={this.props.classes.valueText}>{ds.name}</div>;
            })}
            {time ? <div className={this.props.classes.valueTime}>
                <Moment
                    locale={I18n.getLanguage()}
                    interval={30000}
                    date={time}
                    fromNow
                />
            </div> : null}
        </div>;
    }

    renderLine(id, index) {
        const item = (this.state.things || []).find(_item => _item.id === id);

        return <TableRow key={`${index}:${id}`}>
            <TableCell>
                <Circle style={{ width: 10, height: 10, color: !item ? undefined : (item?.status === 'online' ? '#0F0' : '#F00') }} />
            </TableCell>
            <TableCell>
                <div>{item ? item.name : id}</div>
                <div className={this.props.classes.description}>{item?.description || ''}</div>
            </TableCell>
            <TableCell>
                {item?.coordinates ? <span key={0}>{item.coordinates[0]}</span> : null}
                {item?.coordinates ? <span key={1}>,</span> : null}
                {item?.coordinates ? <span key={2} className={this.props.classes.preSpace}>{item.coordinates[1]}</span> : null}
            </TableCell>
            <TableCell>
                {item ? this.renderDataStreams(item.dataStreams, item.time) : null}
                {/* <div className={this.props.classes.time} style={{ textAlign: 'left' }}>
                    {item?.Observations?.[0]?.phenomenonTime ?
                        <Moment
                            locale={I18n.getLanguage()}
                            interval={30000}
                            date={item?.Observations[0].phenomenonTime}
                            fromNow
                        /> : null}
                </div> */}
            </TableCell>
            <TableCell>
                <IconButton
                    onClick={() => {
                        const things = [...this.props.native.things];
                        things.splice(index, 1);
                        this.props.onChange('things', things);
                    }}
                >
                    <Delete />
                </IconButton>
            </TableCell>
        </TableRow>;
    }

    addThing() {
        const things = [...this.props.native.things];
        things.push(this.state.addId);
        this.props.onChange('things', things);

        this.setState({ showAddDialog: false });
    }

    renderOneThingInMenu(item) {
        return <>
            <div className={this.props.classes.menuItem1}>
                <div>
                    <Circle style={{ width: 10, height: 10, color: item.status === 'online' ? '#0F0' : '#F00' }} />
                </div>
                <div>
                    <div>{item.name}</div>
                    <div className={this.props.classes.description}>{item.description}</div>
                </div>
            </div>
            <div>
                <div className={this.props.classes.value}>
                    {this.renderDataStreams(item.dataStreams, item.time)}
                </div>
            </div>
        </>;
    }

    renderAddNewThing() {
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
            <DialogTitle>{I18n.t('Add new thing')}</DialogTitle>
            <DialogContent style={{ width: 'calc(100% - 48px)', height: 'calc(100% - 40px)' }}>
                <FormControl fullWidth variant="standard">
                    <InputLabel>{I18n.t('Thing')}</InputLabel>
                    <Select
                        value={this.state.addId}
                        onChange={e => this.setState({ addId: e.target.value })}
                        renderValue={value => {
                            const item = (this.state.things || []).find(_item => _item.id === value);
                            if (!item) {
                                return value;
                            }
                            return <div className={this.props.classes.menuItem}>
                                {this.renderOneThingInMenu(item)}
                            </div>;
                        }}
                    >
                        {this.state.things.map(item =>
                            <MenuItem
                                key={item.id}
                                value={item.id}
                                className={this.props.classes.menuItem}
                                disabled={this.props.native.things.includes(item.id)}
                            >
                                {this.renderOneThingInMenu(item)}
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
                    onClick={() => this.addThing()}
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
                            <TableCell style={{ width: 100 }}>Value</TableCell>
                            <TableCell style={{ width: 40 }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(this.props.native.things || []).map((id, index) => this.renderLine(id, index))}
                    </TableBody>
                    {this.renderAddNewThing()}
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
                    things={(this.props.native.things || []).map(id => {
                        const item = (this.state.things || []).find(_item => _item.id === id);
                        if (!item || !item.coordinates) {
                            return null;
                        }
                        return {
                            longitude: item.coordinates[0],
                            latitude: item.coordinates[1],
                            name: item.name,
                            description: item.description,
                            time: item.time,
                            dataStreams: item.dataStreams,
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
