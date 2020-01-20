import React from 'react';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const expansionMainItemProps = {
    borderColor: '#2962ff',
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
    }),
);

const JobPanel =({company,role,type,dateAppld,lastDate,status}:JobProps)=>{
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
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
                    <Typography>
                        More details...
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
};

export default JobPanel