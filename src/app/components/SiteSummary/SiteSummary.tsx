import React, { ReactElement } from 'react';
import {
    Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import clsx from 'clsx';

import { ISite } from 'app/models/site';

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
  imageContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden'
  },
  image: {
    height: '73px',
    width: '73px',
    borderRadius: '50%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '12px 0'
  },
  detailsTitle: {
    fontWeight: 'bold'
  },
  detailsInfoLine: {
    height: '33.3%',
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});

interface IProps {
  site: ISite;
}

export default function SiteSummary(props: IProps): ReactElement {
    const classes = useStyles();

    return (
      <Grid className={classes.root} item xs={12}>
        <Grid className={classes.container} container>
          <Grid className={classes.imageContainer} item xs={2}>
            <img
              className={classes.image}
              src={props.site.images[0]}
              alt="site thumbnail"
            />
          </Grid>
          <Grid className={classes.details} item xs={9}>
            <div className={clsx(classes.detailsInfoLine, classes.detailsTitle)}>
              {props.site.title}
            </div>
            <div className={classes.detailsInfoLine}>
              {`${props.site.address.street}, ${props.site.address.city}, ${props.site.address.country}`}
            </div>
            <div className={classes.detailsInfoLine}>
              {`${props.site.contacts.main.firstName} ${props.site.contacts.main.lastName}`}
            </div>
          </Grid>
          <Grid className={classes.button} item xs={1}>
            <KeyboardArrowRightIcon />
          </Grid>
        </Grid>
      </Grid>
    );
}
