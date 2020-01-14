import React from 'react';
//import './App.css'
import logo from "../../logo.svg";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
//import { borders } from '@material-ui/system';
import Select from '@material-ui/core/Select';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Card from '@material-ui/core/Card';
import DatePicker from '@material-ui/pickers';

const guideProps = {
    bgcolor: 'primary.main',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '70rem', height: '2.5rem' },
};

const guideItemProps = {
    bgcolor: 'secondary.main',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '10rem', height: '1.5rem'},
};

const addItemProps = {
    bgcolor: 'secondary.main',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '1.5rem', height: '1.5rem'},
};

const App = () =>{
    return(
        <Grid container className="root" spacing={2}>
            <Grid item xs={12}>
                <Grid container direction="row" justify="center">
                    <Grid item xs={1}><img src={logo} className="App-logo" alt="logo"/></Grid>
                    <Grid container direction="row" justify="center">
                        <Grid item>
                            <Box borderRadius={16} {...guideProps}>
                                <Grid container direction="row" alignItems="center">
                                    <Grid item>
                                        <Box borderRadius={16} {...guideItemProps}>
                                            <div style={{textAlign:"center"}}>Company</div>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box borderRadius={16} {...guideItemProps}>
                                            <div style={{textAlign:"center"}}>Role</div>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box borderRadius={16} {...guideItemProps}>
                                            <div style={{textAlign:"center"}}>Type</div>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box borderRadius={16} {...guideItemProps}>
                                            <div style={{textAlign:"center"}}>Date Applied</div>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box borderRadius={16} {...guideItemProps}>
                                            <div style={{textAlign:"center"}}>Last Contact</div>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box borderRadius={16} {...guideItemProps}>
                                            <div style={{textAlign:"center"}}>Status</div>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box borderRadius={16} {...addItemProps}>

                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default App