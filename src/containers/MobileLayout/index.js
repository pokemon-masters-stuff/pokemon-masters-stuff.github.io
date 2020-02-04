import React, {Component} from 'react';
import ReactGA from 'react-ga';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SyncGridControls from '../../components/SyncGridControls';
import Navigation from '../../components/Navigation';
import SelectedSkillList from '../../components/SelectedSkillList';
import SkillOverview from '../../components/SkillOverview';
import MainAppbar from '../../components/MainAppbar';
import GridMap from '../../components/GridMap';
import styles from './styles';

class MobileApp extends Component {
  state = {
    isNavOpened: false,
    isSkillListOpened: false,
  };

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  handleOnCloseNav = () => this.setState({isNavOpened: false});

  handleOnOpenNav = () => this.setState({isNavOpened: true});

  handleOnCloseSkillList = () => this.setState({isSkillListOpened: false});

  handleOnOpenSkillList = () => this.setState({isSkillListOpened: true});

  handleOnChangePokemon(value) {
    console.log(value);
  }

  render() {
    const {isNavOpened, isSkillListOpened} = this.state;
    const {classes} = this.props;

    return (
      <>
        <Navigation isOpened={isNavOpened} onCloseHandler={this.handleOnCloseNav} />

        <SelectedSkillList
          isOpened={isSkillListOpened}
          onCloseHandler={this.handleOnCloseSkillList}
          skillList={[
            "Thunder of Newfound Passion Power",
            "Sp.Atk + 10",
            "Potion Master Healer 1"
          ]}
        />

        <MainAppbar onOpenNavHandler={this.handleOnOpenNav} data={{energy: 55, orbs: 60}} />

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

          <SkillOverview skill={"Thunder of Newfound Passion Power"} />
        </div>
      </>
    );
  }
}

export default withStyles(styles)(MobileApp);
