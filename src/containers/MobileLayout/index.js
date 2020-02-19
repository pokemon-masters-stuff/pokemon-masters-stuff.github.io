import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import SyncGridControls from '../../components/SyncGridControls';
import Navigation from '../../components/Navigation';
import { SelectedSkillListMobile } from '../../components/SelectedSkillList';
import { SkillOverviewMobile } from '../../components/SkillOverview';
import MainAppbar from '../../components/MainAppbar';
import GridMap from '../../components/GridMap';
import styles from './styles';
import { selectPokemon, resetGrids, saveCurrentBuild, loadSelectedBuild } from '../../actions/actionCreators';

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  grid: state.grid,
  savedBuilds: state.grid.savedBuilds.allIds.map((id) => state.grid.savedBuilds.byIds[id])
});

const mapDispatchToProps = {
  selectPokemon,
  resetGrids,
  saveCurrentBuild,
  loadSelectedBuild
};

class MobileApp extends Component {
  state = {
    isNavOpened: false,
    isSkillListOpened: false,
    isSaveBuildModalVisible: false
  };

  newBuildNameRef = React.createRef();

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  handleOnCloseNav = () => this.setState({ isNavOpened: false });

  handleOnOpenNav = () => this.setState({ isNavOpened: true });

  handleOnCloseSaveBuildModal = () => this.setState({ isSaveBuildModalVisible: false });

  handleOnOpenSaveBuildModal = () => this.setState({ isSaveBuildModalVisible: true });

  handleOnCloseSkillList = () => this.setState({ isSkillListOpened: false });

  handleOnOpenSkillList = () => this.setState({ isSkillListOpened: true });

  handleOnChangePokemon = value => {
    this.props.selectPokemon(value);
    this.props.resetGrids();
  };

  handleOnChangeSavedBuild = value => {
    this.props.loadSelectedBuild({buildId: value});
  };

  handleOnSaveClickBuild = () => {
    this.handleOnOpenSaveBuildModal();
  };

  handleOnSaveBuild = () => {
    this.props.saveCurrentBuild({
      selectedPokemon: this.props.pokemon.selectedPokemon,
      buildName: this.newBuildNameRef.current.value
    });
    this.handleOnCloseSaveBuildModal();
  };

  render() {
    const { isNavOpened, isSkillListOpened, isSaveBuildModalVisible } = this.state;
    const { classes, pokemon, grid } = this.props;

    let skillList = Object.keys(grid.selectedCellsById)
      .map(cellId => {
        return grid.selectedCellsById[cellId].name;
      })
      .sort();

    return (
      <>
        <Navigation
          isOpened={isNavOpened}
          onCloseHandler={this.handleOnCloseNav}
        />

        <SelectedSkillListMobile
          isOpened={isSkillListOpened}
          onOpenHandler={this.handleOnOpenSkillList}
          onCloseHandler={this.handleOnCloseSkillList}
          skillList={skillList}
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
            selectedPokemon={pokemon.selectedPokemon}
            onChangePokemonHandler={this.handleOnChangePokemon}
            onChangeSavedBuildHandler={this.handleOnChangeSavedBuild}
            onOpenSkillListHandler={this.handleOnOpenSkillList}
            onSaveBuildClickHandler={this.handleOnSaveClickBuild}
          />

          <Grid container alignItems="stretch" justify="center">
            <Grid item xs={12}>
              <div className={classes.syncGridWrapper}>
                <GridMap />
              </div>
            </Grid>
          </Grid>

          <SkillOverviewMobile
            skill={grid.gridData.name}
            description={
              grid.gridData.description ? grid.gridData.description : ''
            }
            energy={grid.gridData.energy}
          />
        </div>

        <Dialog
          open={isSaveBuildModalVisible}
          onClose={this.handleOnCloseSaveBuildModal}
        >
          <DialogTitle>{"Save a new build"}</DialogTitle>
          <DialogContent>
            <TextField
              className={classes.buildNameField}
              label="Build name"
              placeholder="Enter a name as a reference"
              inputProps={{ref: this.newBuildNameRef}}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleOnCloseSaveBuildModal}>
              Cancel
            </Button>
            <Button onClick={this.handleOnSaveBuild}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MobileApp));
