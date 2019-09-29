import React, { ReactElement } from 'react';
import {
    AppBar,
    Grid,
    Toolbar
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ISite } from 'app/models/site';
import SiteSummary from 'app/components/SiteSummary';

const useStyles = makeStyles({
    pageHeader: {},
    pageHeaderContent: {}
});

interface IProps {
  site: ISite;
}

export default function SiteDetailsPage(props: IProps): ReactElement {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBar className={classes.pageHeader} position="static">
          <Toolbar>
            <SiteSummary site={props.site} />
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
}
