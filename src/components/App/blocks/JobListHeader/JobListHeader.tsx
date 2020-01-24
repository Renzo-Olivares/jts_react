import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import {Fab} from "@material-ui/core";

const guideProps = {
    bgcolor: '#3f51b5',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '70.75rem', height: '3.35rem' },
};

const guideItemProps = {
    bgcolor: '#b0bec5',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '10rem', height: '2.35rem'},
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    }),
);


const JobListHeader =()=>{
    const classes = useStyles();

    return(
        <Box borderRadius={16} {...guideProps}>
            <Grid container direction="row" alignItems="center" justify={"center"}>
                <Grid item>
                    <Box borderRadius={16} {...guideItemProps}>
                        <div style={{textAlign:"center", lineHeight:"2.35rem"}}>Company</div>
                    </Box>
                </Grid>
                <Grid item>
                    <Box borderRadius={16} {...guideItemProps}>
                        <div style={{textAlign:"center", lineHeight:"2.35rem"}}>Role</div>
                    </Box>
                </Grid>
                <Grid item>
                    <Box borderRadius={16} {...guideItemProps}>
                        <div style={{textAlign:"center", lineHeight:"2.35rem"}}>Type</div>
                    </Box>
                </Grid>
                <Grid item>
                    <Box borderRadius={16} {...guideItemProps}>
                        <div style={{textAlign:"center", lineHeight:"2.35rem"}}>Date Applied</div>
                    </Box>
                </Grid>
                <Grid item>
                    <Box borderRadius={16} {...guideItemProps}>
                        <div style={{textAlign:"center", lineHeight:"2.35rem"}}>Last Contact</div>
                    </Box>
                </Grid>
                <Grid item>
                    <Box borderRadius={16} {...guideItemProps}>
                        <div style={{textAlign:"center", lineHeight:"2.35rem"}}>Status</div>
                    </Box>
                </Grid>
                <Grid item>
                    <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
                        <AddIcon />
                    </Fab>
                </Grid>
            </Grid>
        </Box>
    );
};

export default JobListHeader