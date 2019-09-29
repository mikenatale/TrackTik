import React, { ReactElement } from 'react';
import {
    AppBar,
    Grid,
    Toolbar
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';

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
  },
  imageContainer: {
    width: '100%',
    height: '288px'
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: '0 50%'
  },
  infoRowContainer: {
    width: '100%',
    height: '64px',
    display: 'flex',
  },
  infoRowIcon: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 24px'
  },
  infoRowDescription: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
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
      <Grid className={classes.imageContainer} item xs={12}>
        <div className={classes.image} style={{backgroundImage: `url("${props.site.images[0]}")`}}></div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.infoRowContainer}>
          <div className={classes.infoRowIcon}>
            <PermIdentityIcon />
          </div>
          <div className={classes.infoRowDescription}>
            <div>{`${props.site.contacts.main.firstName} ${props.site.contacts.main.lastName}`}</div>
            <div>{props.site.contacts.main.jobTitle}</div>
          </div>
        </div>
        <div className={classes.infoRowContainer}>
          <div className={classes.infoRowIcon}>
            <PhoneIcon />
          </div>
          <div className={classes.infoRowDescription}>
            {props.site.contacts.main.phoneNumber}
          </div>
        </div>
        <div className={classes.infoRowContainer}>
          <div className={classes.infoRowIcon}>
            <EmailIcon />
          </div>
          <div className={classes.infoRowDescription}>
            {props.site.contacts.main.email}
          </div>
        </div>
        <div className={classes.infoRowContainer}>
          <div className={classes.infoRowIcon}>
            <RoomIcon />
          </div>
          <div className={classes.infoRowDescription}>
            {`${props.site.address.street}, ${props.site.address.city}, ${props.site.address.state} ${props.site.address.country}, ${props.site.address.zipCode}`}
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
