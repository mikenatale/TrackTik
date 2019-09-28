import React, { ReactElement } from 'react';
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterList from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  pageHeader: {
    boxShadow: 'none'
  },
  pageHeaderContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  sitesController: {
    padding: '6px 24px',
    borderBottom: '1px solid #999'
  },
  sitesControllerTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  sitesControllerTitleText: {
    fontWeight: 'bold'
  },
  sitesControllerCollapseArrow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sitesControllerActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  sitesControllerIconButton: {
    padding: '4px'
  },
});

export default function HomePage(): ReactElement {
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
      <Grid item xs={12}>
        <Grid className={classes.sitesController} container>
          <Grid className={classes.sitesControllerTitle} item xs={5}>
            <Typography className={classes.sitesControllerTitleText} variant="subtitle1">
              All Sites
            </Typography>
          </Grid>
          <Grid className={classes.sitesControllerCollapseArrow} item xs={2}>
            <IconButton className={classes.sitesControllerIconButton}>
              <ExpandMoreIcon />
            </IconButton>
          </Grid>
          <Grid className={classes.sitesControllerActions} item xs={5}>
            <IconButton className={classes.sitesControllerIconButton}>
              <FilterList />
            </IconButton>
            <IconButton className={classes.sitesControllerIconButton}>
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        todo rows~
      </Grid>
    </Grid>
  );
}