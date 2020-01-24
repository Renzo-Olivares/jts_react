import React from 'react';
import Grid from '@material-ui/core/Grid';
import JobList from "./blocks/JobList/JobList";

const App = () =>{
    return(
        <Grid container direction="column" alignContent={"center"}>
            <Grid item>
                <JobList/>
            </Grid>
        </Grid>
    );
};

export default App