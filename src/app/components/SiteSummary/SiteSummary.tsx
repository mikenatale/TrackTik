import React, { ReactElement } from 'react';
import {
    Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    height: '96px',
    padding: '0 24px',
    borderBottom: '1px solid black',
    cursor: 'pointer'
  },
  container: {
    height: '100%'
  },
  image: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  details: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});

export default function SiteSummary(): ReactElement {
    const classes = useStyles();

    return (
      <Grid className={classes.root} item xs={12}>
        <Grid className={classes.container} container>
          <Grid className={classes.image} item xs={2}>Img</Grid>
          <Grid className={classes.details} item xs={9}>
            Site Name
          </Grid>
          <Grid className={classes.button} item xs={1}>
            <KeyboardArrowRightIcon />
          </Grid>
        </Grid>
      </Grid>
    );
}
