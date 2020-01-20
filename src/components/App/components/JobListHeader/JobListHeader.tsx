import React from 'react';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const guideProps = {
    bgcolor: '#2962ff',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '70rem', height: '2.5rem' },
};

const guideItemProps = {
    bgcolor: '#b0bec5',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '10rem', height: '1.5rem'},
};

const addItemProps = {
    bgcolor: '#b0bec5',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '1.5rem', height: '1.5rem'},
};

const JobListHeader =()=>{
    return(
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
    );
};

export default JobListHeader