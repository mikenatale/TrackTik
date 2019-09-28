import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  iconButton: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  accountButton: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

export default function AppHeader(): ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item xs={2}>
              <IconButton
                className={classes.iconButton}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid 
              className={classes.title}
              item
              xs={8}
            >
              <Typography variant="h6">
                Scheduling
              </Typography>
            </Grid>
            <Grid
              className={classes.accountButton}
              item
              xs={2}
            >
              <IconButton edge="start" color="inherit" aria-label="account">
                <AccountCircleIcon />
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="account">
                <AppsIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
