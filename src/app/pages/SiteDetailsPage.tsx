import React, { ReactElement } from 'react';
import {
    AppBar,
    Grid,
    Toolbar,
    Typography
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ISite } from 'app/models/site';

const useStyles = makeStyles({
    pageHeader: {},
    pageHeaderContent: {}
});

interface IProps {
//   site: ISite;
}

export default function SiteSummary(props: IProps): ReactElement {
  const classes = useStyles();

  return (
    <Grid container>
        <Grid item xs={12}>
        <AppBar className={classes.pageHeader} position="static">
            <Toolbar>
            <div className={classes.pageHeaderContent}>
                <Typography variant="h6">
                Sites
                </Typography>
            </div>
            </Toolbar>
        </AppBar>
        </Grid>
    </Grid>
  );
}
