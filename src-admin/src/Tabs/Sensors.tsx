import { Component, type CSSProperties, type JSX } from 'react';
import Moment from 'react-moment';

// The ESM builds of the locales: they register themselves on the same moment instance that react-moment uses.
// (`moment/locale/*` are UMD files and would end up on a second copy of moment in the Vite bundle.)
import 'moment/dist/locale/de';
import 'moment/dist/locale/ru';
import 'moment/dist/locale/fr';
import 'moment/dist/locale/it';
import 'moment/dist/locale/es';
import 'moment/dist/locale/pl';
import 'moment/dist/locale/uk';
import 'moment/dist/locale/zh-cn';
import 'moment/dist/locale/nl';
import 'moment/dist/locale/pt';

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
    TableRow,
    Fab,
    IconButton,
    LinearProgress,
} from '@mui/material';

import { Add, Circle, Close, Delete } from '@mui/icons-material';

import { I18n, type AdminConnection } from '@iobroker/gui-components';

import OlMap from '../components/Map';
import type { DataStreamInfo, FrostThing, MapThing, OpenSmartCityNative, ThingInfo } from '../types';

const styles: Record<string, CSSProperties> = {
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
    value: {
        textAlign: 'right',
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
};

/** Unit of a data stream as the backend stores it in `common.unit` */
function getUnit(unitOfMeasurement: { name?: string; symbol?: string } | undefined): string | undefined {
    const unit = unitOfMeasurement?.symbol || unitOfMeasurement?.name;
    return unit === '°' ? '°C' : unit;
}

/** End of the interval "start/end" in ms */
function getTime(phenomenonTime: string): number {
    return new Date(phenomenonTime.split('/').pop() as string).getTime();
}

interface SensorsProps {
    socket: AdminConnection;
    native: OpenSmartCityNative;
    instance: number;
    adapterName: string;
    alive: boolean;
    onChange: (attr: 'things', value: string[]) => void;
}

interface SensorsState {
    things: ThingInfo[];
    addId: string;
    showAddDialog: boolean;
    requesting: boolean;
    alive: boolean;
}

export default class Sensors extends Component<SensorsProps, SensorsState> {
    private aliveTimer: ReturnType<typeof setTimeout> | null = null;

    constructor(props: SensorsProps) {
        super(props);

        this.state = {
            things: [],
            addId: '',
            showAddDialog: false,
            requesting: false,
            alive: this.props.alive,
        };
    }

    componentDidMount(): void {
        if (this.state.alive) {
            const prefix = `${this.props.adapterName}.${this.props.instance}`;
            void this.props.socket.subscribeState(`${prefix}.*`, this.onStateChanged);

            this.setState({ requesting: true }, async () => {
                const actualThings = await this.props.socket.sendTo<{ result: FrostThing[] | null } | undefined>(
                    prefix,
                    'getThings',
                    {},
                );
                const savedThings = await this.props.socket.getObjectViewSystem(
                    'channel',
                    `${prefix}.`,
                    `${prefix}.香`,
                );
                const savedDataStreams = await this.props.socket.getObjectViewSystem(
                    'state',
                    `${prefix}.`,
                    `${prefix}.香`,
                );
                const savedValues = await this.props.socket.getStates(`${prefix}.*`);
                const things: ThingInfo[] = [];

                // merge information together
                Object.keys(savedThings).forEach(id => {
                    things.push({
                        id: id.split('.').pop() as string,
                        name: savedThings[id].common.name,
                        description: savedThings[id].common.desc,
                        coordinates: savedThings[id].native.coordinates as number[] | null | undefined,
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
                                name: savedDataStreams[id].common.name as string,
                                description: savedDataStreams[id].common.desc as string | undefined,
                                unit: savedDataStreams[id].common.unit,
                                value: savedValues[id] ? savedValues[id].val : null,
                            });
                            thing.time = thing.time || savedValues[id]?.ts;
                        } else {
                            thing.status = savedValues[id]?.val ? 'online' : 'offline';
                        }
                    }
                    // else: a state without its channel - cannot be
                });
                actualThings?.result?.forEach(thing => {
                    const thingId = thing['@iot.id'].toString();
                    const savedThing = things.find(t => t.id === thingId);
                    if (savedThing) {
                        if (thing.Datastreams) {
                            const streamWithCoordinates = thing.Datastreams.find(ds => ds.observedArea?.coordinates);
                            const streamWithTime = thing.Datastreams.find(ds => ds.phenomenonTime);
                            let time: number | undefined;
                            if (streamWithTime?.phenomenonTime) {
                                time = getTime(streamWithTime.phenomenonTime);
                            }
                            thing.Datastreams.forEach(ds => {
                                const savedDs = savedThing.dataStreams.find(d => d.id === ds['@iot.id'].toString());
                                if (!savedDs) {
                                    savedThing.dataStreams.push({
                                        id: ds['@iot.id'].toString(),
                                        name: ds.name,
                                        description: ds.description,
                                        unit: getUnit(ds.unitOfMeasurement),
                                    });
                                }
                            });
                            savedThing.time = time || savedThing.time;
                            savedThing.coordinates =
                                streamWithCoordinates?.observedArea?.coordinates || savedThing.coordinates;
                            savedThing.status = thing.properties?.status || savedThing.status;
                        }
                    } else {
                        const streamWithCoordinates = thing.Datastreams?.find(ds => ds.observedArea?.coordinates);
                        const streamWithTime = thing.Datastreams?.find(ds => ds.phenomenonTime);
                        const streamWithName = thing.Datastreams?.find(ds => ds.name);
                        const commonPart = streamWithName?.name?.match(/(.*)\((.*)\)/)?.[1];
                        let time: number | undefined;
                        if (streamWithTime?.phenomenonTime) {
                            time = getTime(streamWithTime.phenomenonTime);
                        }

                        things.push({
                            id: thingId,
                            name: commonPart ? `${thing.name} (${commonPart.trim()})` : thing.name,
                            description: thing.description,
                            coordinates: streamWithCoordinates?.observedArea?.coordinates,
                            dataStreams: thing.Datastreams
                                ? thing.Datastreams.map(ds => ({
                                      id: ds['@iot.id'].toString(),
                                      name: commonPart
                                          ? ds.name.replace(commonPart, '').trim().replace(/^\(/, '').replace(/\)$/, '')
                                          : ds.name,
                                      description: ds.description,
                                      unit: getUnit(ds.unitOfMeasurement),
                                  }))
                                : [],
                            status: thing.properties?.status,
                            time,
                        });
                    }
                });

                this.setState({ things, requesting: false });
            });
        }
    }

    componentWillUnmount(): void {
        if (this.aliveTimer) {
            clearTimeout(this.aliveTimer);
            this.aliveTimer = null;
        }
        this.props.socket.unsubscribeState(`${this.props.adapterName}.${this.props.instance}.*`, this.onStateChanged);
    }

    componentDidUpdate(): void {
        // The instance was started or stopped: (re)read the things
        if (this.props.alive !== this.state.alive && !this.aliveTimer) {
            this.aliveTimer = setTimeout(() => {
                this.aliveTimer = null;
                this.setState({ alive: this.props.alive }, () => this.componentDidMount());
            }, 200);
        }
    }

    onStateChanged = (id: string, state: ioBroker.State | null | undefined): void => {
        if (!state) {
            return;
        }
        const parts = id.split('.');
        const thingId = parts[parts.length - 2];
        const dsId = parts[parts.length - 1];
        if (this.state.things.find(t => t.id === thingId)) {
            const things = [...this.state.things];
            const thing = things.find(t => t.id === thingId) as ThingInfo;

            const ds = thing.dataStreams.find(d => d.id === dsId);
            if (ds && ds.value !== state.val) {
                ds.value = state.val;
                this.setState({ things });
            }
        }
    };

    renderDataStreams(dataStreams: DataStreamInfo[] | undefined, time: number | undefined): JSX.Element | null {
        if (!dataStreams?.length) {
            return null;
        }
        return (
            <div>
                {dataStreams.map(ds => {
                    if (ds.value !== null && ds.value !== undefined) {
                        return (
                            <div
                                key={ds.id}
                                style={styles.valueLine}
                            >
                                <span style={styles.valueText}>{ds.name}</span>
                                <span style={styles.valueEqual}>=</span>
                                <span style={styles.valueValue}>{ds.value}</span>
                                <span style={styles.valueUnit}>{ds.unit || ''}</span>
                            </div>
                        );
                    }
                    if (ds.unit) {
                        return (
                            <div key={ds.id}>
                                <span style={styles.valueText}>{ds.name}</span>
                                <span style={styles.valueUnit}>({ds.unit})</span>
                            </div>
                        );
                    }

                    return (
                        <div
                            key={ds.id}
                            style={styles.valueText}
                        >
                            {ds.name}
                        </div>
                    );
                })}
                {time ? (
                    <div style={styles.valueTime}>
                        <Moment
                            locale={I18n.getLanguage()}
                            interval={30000}
                            date={time}
                            fromNow
                        />
                    </div>
                ) : null}
            </div>
        );
    }

    renderLine(id: string, index: number): JSX.Element {
        const item = this.state.things.find(_item => _item.id === id);

        return (
            <TableRow key={`${index}:${id}`}>
                <TableCell>
                    <Circle
                        style={{
                            width: 10,
                            height: 10,
                            color: !item ? undefined : item.status === 'online' ? '#0F0' : '#F00',
                        }}
                    />
                </TableCell>
                <TableCell>
                    <div>{item ? (item.name as string) : id}</div>
                    <div style={styles.description}>{(item?.description as string) || ''}</div>
                </TableCell>
                <TableCell>
                    {item?.coordinates ? <span key={0}>{item.coordinates[0]}</span> : null}
                    {item?.coordinates ? <span key={1}>,</span> : null}
                    {item?.coordinates ? (
                        <span
                            key={2}
                            style={styles.preSpace}
                        >
                            {item.coordinates[1]}
                        </span>
                    ) : null}
                </TableCell>
                <TableCell>{item ? this.renderDataStreams(item.dataStreams, item.time) : null}</TableCell>
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
            </TableRow>
        );
    }

    addThing(): void {
        const things = [...this.props.native.things];
        things.push(this.state.addId);
        this.props.onChange('things', things);

        this.setState({ showAddDialog: false });
    }

    renderOneThingInMenu(item: ThingInfo): JSX.Element {
        return (
            <>
                <div style={styles.menuItem1}>
                    <div>
                        <Circle style={{ width: 10, height: 10, color: item.status === 'online' ? '#0F0' : '#F00' }} />
                    </div>
                    <div>
                        <div>{item.name as string}</div>
                        <div style={styles.description}>{item.description as string}</div>
                    </div>
                </div>
                <div>
                    <div style={styles.value}>{this.renderDataStreams(item.dataStreams, item.time)}</div>
                </div>
            </>
        );
    }

    renderAddNewThing(): JSX.Element | null {
        if (!this.state.showAddDialog) {
            return null;
        }
        return (
            <Dialog
                open={!0}
                maxWidth="lg"
                fullWidth
                onClose={() => this.setState({ showAddDialog: false })}
            >
                <DialogTitle>{I18n.t('Add new thing')}</DialogTitle>
                <DialogContent style={{ width: 'calc(100% - 48px)', height: 'calc(100% - 40px)' }}>
                    <FormControl
                        fullWidth
                        variant="standard"
                    >
                        <InputLabel>{I18n.t('Thing')}</InputLabel>
                        <Select
                            value={this.state.addId}
                            onChange={e => this.setState({ addId: e.target.value })}
                            renderValue={value => {
                                const item = this.state.things.find(_item => _item.id === value);
                                if (!item) {
                                    return value;
                                }
                                return <div style={styles.menuItem}>{this.renderOneThingInMenu(item)}</div>;
                            }}
                        >
                            {this.state.things.map(item => (
                                <MenuItem
                                    key={item.id}
                                    value={item.id}
                                    style={styles.menuItem}
                                    disabled={this.props.native.things.includes(item.id)}
                                >
                                    {this.renderOneThingInMenu(item)}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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
            </Dialog>
        );
    }

    render(): JSX.Element {
        const mapThings: MapThing[] = [];
        (this.props.native.things || []).forEach(id => {
            const item = this.state.things.find(_item => _item.id === id);
            if (item?.coordinates) {
                mapThings.push({
                    longitude: item.coordinates[0],
                    latitude: item.coordinates[1],
                    name: item.name,
                    description: item.description,
                    time: item.time,
                    dataStreams: item.dataStreams,
                });
            }
        });

        return (
            <div style={{ width: '100%', height: '100%' }}>
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
                                    <Fab
                                        onClick={() => this.setState({ showAddDialog: true })}
                                        size="small"
                                        style={{ marginRight: 8 }}
                                    >
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
                    </Table>
                    {this.renderAddNewThing()}
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
                    <OlMap
                        socket={this.props.socket}
                        things={mapThings}
                    />
                </div>
            </div>
        );
    }
}
