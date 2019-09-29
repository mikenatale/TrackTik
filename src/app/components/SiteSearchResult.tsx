import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ISite } from 'app/models/site';
import SiteSummary from 'app/pages/SiteDetailsPage';

const useStyles = makeStyles({
  root: {
    height: '96px',
    padding: '0 24px',
    borderBottom: '1px solid black',
    cursor: 'pointer'
  },
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
      <SiteSummary site={props.site} />
    </Grid>
  );
}
