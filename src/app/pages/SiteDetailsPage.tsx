import React, { ReactElement } from 'react';
import {
    AppBar,
    Grid,
    IconButton,
    Toolbar
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import { ISite } from 'app/models/site';
import SiteSummary from 'app/components/SiteSummary';

const useStyles = makeStyles({
  pageHeader: {
    height: '96px',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: 'none',
    cursor: 'pointer'
  },
  backIconContainer: {
    marginRight: '24px'
  },
  backIcon: {
    color: '#fff'
  }
});

interface IProps {
  site: ISite;
  onBackClick: () => void;
}

export default function SiteDetailsPage(props: IProps): ReactElement {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBar
          className={classes.pageHeader}
          position="static"
          onClick={props.onBackClick}
        >
          <Toolbar>
            <div className={classes.backIconContainer}>
              <KeyboardArrowLeftIcon className={classes.backIcon} />
            </div>
            <SiteSummary site={props.site} />
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
}
