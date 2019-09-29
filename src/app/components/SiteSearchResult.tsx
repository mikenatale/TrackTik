import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import SiteSummary from 'app/components/SiteSummary';
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
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});

interface IProps {
  site: ISite;
  onClick: (site: ISite) => void;
}

export default function SiteSearchResult(props: IProps): ReactElement {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      item
      xs={12}
      onClick={() => { props.onClick(props.site) }}
    >
      <Grid className={classes.container} container>
        <SiteSummary site={props.site} />
        <Grid className={classes.button} item xs={1}>
          <KeyboardArrowRightIcon />
        </Grid>
      </Grid>
    </Grid>
  );
}
