import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { KeyboardDatePicker, MuiPickersUtilsProvider,} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import TextField from '@material-ui/core/TextField';


const expansionMainItemProps = {
    borderColor: '#3f51b5',
    m: 1,
    border: 1,
    style: { width: '8.75rem', height: '1.5rem'},
};

type JobProps = {
    company:string,
    role:string,
    type:string,
    dateAppld:string,
    lastDate:string,
    status:string,
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '70rem',
            backgroundColor: '#b0bec5',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        notesField: {
            '& .MuiTextField-notesField': {
                margin: theme.spacing(1),
                width: 200,
            }
        }
    }),
);

const JobPanel =({company,role,type,dateAppld,lastDate,status}:JobProps)=>{
    const classes = useStyles();

    const [sRole, setRole] = React.useState('');

    const [sJtype, setJtype] = React.useState('');

    const [selStatus, setStatus] = React.useState('');

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleChangeRoleSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
        setRole(event.target.value as string);
    };

    const handleChangeJtypeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
        setJtype(event.target.value as string);
    };

    const handleChangeStatusSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
        setStatus(event.target.value as string);
    };

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return(
        <div>
            <ExpansionPanel className={classes.root} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Grid container direction="row" spacing={2}>
                        <Grid item>
                            <Box borderRadius={16} {...expansionMainItemProps}>
                                <div style={{textAlign:"center"}}>
                                    <Typography className={classes.heading}>{company}</Typography>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box borderRadius={16} {...expansionMainItemProps}>
                                <div style={{textAlign:"center"}}>
                                    <Typography className={classes.heading}>{role}</Typography>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box borderRadius={16} {...expansionMainItemProps}>
                                <div style={{textAlign:"center"}}>
                                    <Typography className={classes.heading}>{type}</Typography>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box borderRadius={16} {...expansionMainItemProps}>
                                <div style={{textAlign:"center"}}>
                                    <Typography className={classes.heading}>{dateAppld}</Typography>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box borderRadius={16} {...expansionMainItemProps}>
                                <div style={{textAlign:"center"}}>
                                    <Typography className={classes.heading}>{lastDate}</Typography>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box borderRadius={16} {...expansionMainItemProps}>
                                <div style={{textAlign:"center"}}>
                                    <Typography className={classes.heading}>{status}</Typography>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container direction="row" justify={"center"} alignContent={"center"} spacing={8}>
                        <Grid item>
                            <Grid container direction="column" spacing={4}>
                                <Grid item>
                                    <Typography>
                                        Company logo
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        Company info
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        More details
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column">
                                <Grid item>
                                    <form className={classes.notesField} noValidate autoComplete="off">
                                        <div>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Notes"
                                                multiline
                                                rows="4"
                                                defaultValue="You can add important notes here."
                                                variant="outlined"
                                            />
                                        </div>
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="role-label">Role</InputLabel>
                                        <Select
                                            labelId="role-label"
                                            id="role-select"
                                            value={sRole}
                                            onChange={handleChangeRoleSelect}
                                        >
                                            <MenuItem value={10}>Software Engineer</MenuItem>
                                            <MenuItem value={20}>Quality Engineer</MenuItem>
                                            <MenuItem value={30}>Data Scientist</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="jtype-label">Job Type</InputLabel>
                                        <Select
                                            labelId="jtype-label"
                                            id="jtype-select"
                                            value={sJtype}
                                            onChange={handleChangeJtypeSelect}
                                        >
                                            <MenuItem value={10}>Internship</MenuItem>
                                            <MenuItem value={20}>Part-Time</MenuItem>
                                            <MenuItem value={30}>Full-Time</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="status-label">Status</InputLabel>
                                        <Select
                                            labelId="status-label"
                                            id="status-select"
                                            value={selStatus}
                                            onChange={handleChangeStatusSelect}
                                        >
                                            <MenuItem value={10}>Coding Challenge</MenuItem>
                                            <MenuItem value={20}>Phone Screen</MenuItem>
                                            <MenuItem value={30}>On-Site Interview</MenuItem>
                                            <MenuItem value={40}>Committee Review</MenuItem>
                                            <MenuItem value={50}>Host Matching</MenuItem>
                                            <MenuItem value={60}>Offer</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            clearable
                                            value={selectedDate}
                                            placeholder="10/10/2018"
                                            onChange={handleDateChange}
                                            minDate={new Date()}
                                            format="MM/dd/yyyy"
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            clearable
                                            value={selectedDate}
                                            placeholder="10/10/2018"
                                            onChange={handleDateChange}
                                            minDate={new Date()}
                                            format="MM/dd/yyyy"
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item>
                                    <div>
                                        <TextField
                                            id="jobLinkField"
                                            label="Post Link"
                                            type="joblink" />
                                    </div>
                                </Grid>
                                <Grid item>
                                    <div>
                                        <TextField
                                            id="jobLocationField"
                                            label="Location"
                                            type="joblocation" />
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
};

export default JobPanel