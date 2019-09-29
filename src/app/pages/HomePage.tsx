import React, { ReactElement } from 'react';
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterList from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/styles';

import SiteSummary from 'app/components/SiteSummary/SiteSummary';
import { ISite } from 'app/models/site';

// This shouldn't be type 'any' but I can't figure out how to import StylesType :/
const styles = (): any => ({
  pageHeader: {
    boxShadow: 'none'
  },
  pageHeaderContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  sitesController: {
    padding: '0 24px',
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
  showMoreButtonContainer: {
    height: '96px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  showMoreButton: {
    width: '100%',
    height: '100%',
    fontSize: '16px',
    backgroundColor: '#ddd'
  }
});

interface IProps {
  classes: any;
  sites: ISite[];
  onShowMoreClick: () => Promise<void>;
}

interface IState {
  showSites: boolean;
}

class HomePage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      showSites: true
    };

    this.handleExpandArrowClick = this.handleExpandArrowClick.bind(this);
    this.renderSiteSummaries = this.renderSiteSummaries.bind(this);
  }

  handleExpandArrowClick(): void {
    this.setState({
      showSites: !this.state.showSites
    });
  }

  renderSiteSummaries(): ReactElement[] {
    const siteSummaries: ReactElement[] = [];

    this.props.sites.forEach((site: ISite, i: number): void => {
      siteSummaries.push(<SiteSummary key={i} site={site} />);
    });

    return siteSummaries;
  }

  render(): ReactElement {
    const { classes } = this.props;

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
              <IconButton 
                className={classes.sitesControllerIconButton}
                onClick={this.handleExpandArrowClick}
              >
                {
                  this.state.showSites
                  ?
                    <ExpandLessIcon />
                  :
                    <ExpandMoreIcon />
                }
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
        {
          this.state.showSites
          ?
            <>
              <Grid item xs={12}>
                <Grid container>
                  {this.renderSiteSummaries()}
                </Grid>
              </Grid>
              <Grid className={classes.showMoreButtonContainer} item xs={12}>
                <Button
                  className={classes.showMoreButton}
                  onClick={this.props.onShowMoreClick}
                >
                  Show More
                </Button>
            </Grid>
           </>
          :
            null
        }
      </Grid>
    );
  } 
}

export default withStyles(styles)(HomePage);
