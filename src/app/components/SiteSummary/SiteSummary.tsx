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
  info: {
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    height: '73px',
    width: '73px',
    borderRadius: '50%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '12px'
  },
  detailsTitle: {
    fontWeight: 'bold'
  },
  detailsAddress: {
    fontStyle: 'italic',
    color: '#666'
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
          <Grid className={classes.info} item xs={11}>
            <div className={classes.image}>
              <img
                className={classes.image}
                src={props.site.images[0]}
                alt="site thumbnail"
              />
            </div>
            <div className={classes.details}>
              <div className={classes.detailsTitle}>
                {props.site.title}
              </div>
              <div className={classes.detailsAddress}>
                {`${props.site.address.street}, ${props.site.address.city}, ${props.site.address.country}`}
              </div>
              <div>
                {`${props.site.contacts.main.firstName} ${props.site.contacts.main.lastName}`}
              </div>
            </div>
          </Grid>
          <Grid className={classes.button} item xs={1}>
            <KeyboardArrowRightIcon />
          </Grid>
        </Grid>
      </Grid>
    );
}
