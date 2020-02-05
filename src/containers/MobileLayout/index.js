import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SyncGridControls from '../../components/SyncGridControls';
import Navigation from '../../components/Navigation';
import SelectedSkillList from '../../components/SelectedSkillList';
import SkillOverview from '../../components/SkillOverview';
import MainAppbar from '../../components/MainAppbar';
import GridMap from '../../components/GridMap';
import styles from './styles';

import { selectPokemon, resetGrids } from '../../actions/actionCreators';

class MobileApp extends Component {
  state = {
    isNavOpened: false,
    isSkillListOpened: false
  };

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  handleOnCloseNav = () => this.setState({ isNavOpened: false });

  handleOnOpenNav = () => this.setState({ isNavOpened: true });

  handleOnCloseSkillList = () => this.setState({ isSkillListOpened: false });

  handleOnOpenSkillList = () => this.setState({ isSkillListOpened: true });

  handleOnChangePokemon = (value) => {
    this.props.selectPokemon(value);
    this.props.resetGrids();
  };

  render() {
    const { isNavOpened, isSkillListOpened } = this.state;
    const { classes, grid } = this.props;

    return (
      <>
        <Navigation
          isOpened={isNavOpened}
          onCloseHandler={this.handleOnCloseNav}
        />

        <SelectedSkillList
          isOpened={isSkillListOpened}
          onCloseHandler={this.handleOnCloseSkillList}
          skillList={grid.activeGridList}
        />

        <MainAppbar
          onOpenNavHandler={this.handleOnOpenNav}
          data={{
            energy: grid.remainingEnergy,
            orbs: grid.orbSpent
          }}
        />

        <div className={classes.mainContainer}>
          <SyncGridControls
            onChangePokemonHandler={this.handleOnChangePokemon}
            onOpenSkillListHandler={this.handleOnOpenSkillList}
          />

          <Grid container alignItems="stretch" justify="center">
            <Grid item xs={12}>
              <div className={classes.syncGridWrapper}>
                <GridMap />
              </div>
            </Grid>
          </Grid>

          <SkillOverview
            skill={grid.gridData.description}
            energy={grid.gridData.energy}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  grid: state.grid
});

export default connect(mapStateToProps, {
  selectPokemon,
  resetGrids
})(withStyles(styles)(MobileApp));
