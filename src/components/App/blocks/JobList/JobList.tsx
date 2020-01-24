import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import JobPanel from "../JobPanel/JobPanel";
import {ListSubheader} from "@material-ui/core";
import JobListHeader from "../JobListHeader/JobListHeader";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

const JobList = () =>{
    const classes = useStyles();

    return(
        <List
            component={"nav"}
            aria-labelledby={"job-list"}
            subheader={
                <ListSubheader component="li" id="job-list-subheader" disableGutters={true}>
                    <JobListHeader/>
                </ListSubheader>
            }
            className={classes.list}
        >
            <ListItem>
                <JobPanel company="Google" role="Software Engineer" type="Internship" dateAppld="08/18/2019" lastDate="01/14/2020" status="Host Matching"/>
            </ListItem>
            <ListItem>
                <JobPanel company="Facebook" role="Software Engineer" type="Internship" dateAppld="08/23/2019" lastDate="08/23/2019" status="Applied"/>
            </ListItem>
        </List>
    );

};

export default JobList