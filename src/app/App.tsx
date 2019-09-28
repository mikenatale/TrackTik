import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';

import AppHeader from 'app/components/AppHeader/AppHeader';
import { get } from 'app/helpers/api';
import { ISite } from 'app/models/site';
import HomePage from 'app/pages/HomePage';

interface IProps {}

interface IState {
  isLoading: boolean;
  selectedSite: null;
  sites: ISite[];
}

export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isLoading: true,
      selectedSite: null,
      sites: []
    };
  }

  async componentDidMount(): Promise<void> {
    const sites = await get('sites') as ISite[];

    console.log(sites[0]);

    this.setState({
      isLoading: false,
      sites
    })
  }

  render(): ReactElement {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Grid container>
        <Grid item xs={12}>
          <AppHeader />
        </Grid>
        <Grid item xs={12}>
          {
            this.state.selectedSite
            ?
              <>nope</>
            :
              <HomePage sites={this.state.sites} />
          }
        </Grid>
      </Grid>
    );
  }
}
