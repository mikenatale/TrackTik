import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { ISite } from 'app/models/site';

const useStyles = makeStyles({
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
    color: '#666',
    lineHeight: 1
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
            <Typography className={classes.detailsTitle} variant="body1">
            {props.site.title}
            </Typography>
            <Typography className={classes.detailsAddress} variant="body1">
            {`${props.site.address.street}, ${props.site.address.city}, ${props.site.address.country}`}
            </Typography>
            <Typography variant="body1">
            {`${props.site.contacts.main.firstName} ${props.site.contacts.main.lastName}`}
            </Typography>
        </div>
      </Grid>
      <Grid className={classes.button} item xs={1}>
        <KeyboardArrowRightIcon />
      </Grid>
    </Grid>
  );
}
