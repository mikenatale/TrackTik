import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';

import AppHeader from 'app/components/AppHeader';
import { get } from 'app/helpers/api';
import { ISite } from 'app/models/site';
import HomePage from 'app/pages/HomePage';
import SiteDetailsPage from 'app/pages/SiteDetailsPage';

interface IProps {}

interface IState {
  currentPage: number;
  isLoading: boolean;
  selectedSite: ISite | null;
  sites: ISite[];
}

export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      currentPage: 1,
      isLoading: true,
      selectedSite: null,
      sites: []
    };

    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
    this.handleSiteClick = this.handleSiteClick.bind(this);
  }

  async componentDidMount(): Promise<void> {
    const sites = await get(`sites?_page=${this.state.currentPage}`) as ISite[];

    this.setState({
      isLoading: false,
      sites
    });
  }

  handleBackClick(): void {
    this.setState({
      selectedSite: null
    });
  }

  handleSiteClick(site: ISite): void {
    this.setState({
      selectedSite: site
    });
  }

  async handleShowMoreClick(): Promise<void> {
    const currentPage = this.state.currentPage + 1;
    const sites = await get(`sites?_page=${currentPage}`) as ISite[];

    this.setState({
      currentPage,
      sites: [...this.state.sites, ...sites]
    });
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
            // this.state.selectedSite
            this.state.sites.length
            ?
              <SiteDetailsPage
                site={this.state.sites[0]}
                onBackClick={this.handleBackClick}
              />
            :
              <HomePage
                sites={this.state.sites}
                onShowMoreClick={this.handleShowMoreClick}
                onSiteClick={this.handleSiteClick}
              />
          }
        </Grid>
      </Grid>
    );
  }
}
