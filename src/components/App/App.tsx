import React from 'react';
import logo from "../../logo.svg";
import Grid from '@material-ui/core/Grid';
import JobPanel from "./components/JobPanel/JobPanel";
import JobListHeader from "./components/JobListHeader/JobListHeader";

const App = () =>{
    return(
        <Grid container className="root" spacing={2}>
            <Grid item xs={12}>
                <Grid container direction="row" justify="center">
                    <Grid item xs={1}><img src={logo} className="App-logo" alt="logo"/></Grid>
                    <Grid container direction="row" justify="center">
                        <Grid item>
                            <JobListHeader/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <JobPanel company="Google" role="Software Engineer" type="Internship" dateAppld="08/18/2019" lastDate="01/14/2020" status="Host Matching"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default App