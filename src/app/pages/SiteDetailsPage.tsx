import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ISite } from 'app/models/site';

const useStyles = makeStyles({});

interface IProps {
  site: ISite;
}

export default function SiteSummary(props: IProps): ReactElement {
  const classes = useStyles();

  return <>{JSON.stringify(props.site)}</>;
}
