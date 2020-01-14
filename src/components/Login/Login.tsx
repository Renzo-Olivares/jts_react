import React from 'react';
import './Login.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import logo from "../../logo.svg";

const Login = () =>{
    return(
        <Grid container className="root" spacing={2}>
            <Grid item xs={12}>
                <Grid container className="form_grid" direction="column" justify="center" alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                        <form className="login_form" noValidate autoComplete="off">
                            <Grid container direction="column" alignItems="center" spacing={2}>
                                <Grid item><img src={logo} className="App-logo" alt="logo" /></Grid>
                                <Grid item><TextField id="userinput_field" label="Username" variant="outlined" /></Grid>
                                <Grid item><TextField id="passwdinput_field" label="Password" type="password" variant="outlined" /></Grid>
                                <Grid item><Button variant="contained" color="primary">Log in</Button></Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Login