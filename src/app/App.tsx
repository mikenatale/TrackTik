import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';

import AppHeader from 'app/components/AppHeader/AppHeader';
import HomePage from 'app/pages/HomePage';

interface IState {
  selectedSite: null;
}

export default class App extends React.Component<{}, IState> {
  constructor() {
    super({});

    this.state = {
      selectedSite: null
    };
  }

  render(): ReactElement {
    return (
      <Grid container>
        <Grid item xs={12}>
          <AppHeader />
        </Grid>
        <Grid item xs={12}>
          {
            this.state.selectedSite
            ?
              <></>
            :
              <HomePage />
          }
        </Grid>
      </Grid>
    );
  }
}
