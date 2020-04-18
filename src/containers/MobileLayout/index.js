import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import SyncGridControls from '../../components/SyncGridControls';
import { NavigationMobile } from '../../components/Navigation';
import { SelectedSkillListMobile } from '../../components/SelectedSkillList';
import SkillOverview from '../../components/SkillOverview';
import MainAppbar from '../../components/MainAppbar';
import GridMap from '../../components/GridMap';
import styles from './styles';
import {
  selectPokemon,
  resetGrids,
  saveCurrentBuild,
  loadSelectedBuild,
  deleteSelectedBuild,
} from '../../actions/actionCreators';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import UI from '../../utils/translations';

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
  grid: state.grid,
  savedBuilds: state.grid.savedBuilds.allIds.map(
    (id) => state.grid.savedBuilds.byIds[id]
  ),
  url: state.grid.url,
  darkMode: state.darkMode,
  language: state.language.currentLanguage,
});

const mapDispatchToProps = {
  selectPokemon,
  resetGrids,
  saveCurrentBuild,
  loadSelectedBuild,
  deleteSelectedBuild,
};

class MobileApp extends Component {
  state = {
    isNavOpened: false,
    isSkillListOpened: false,
    isSaveBuildModalVisible: false,
    isShareModalVisible: false,
  };

  newBuildNameRef = React.createRef();

  handleOnCloseNav = () => this.setState({ isNavOpened: false });

  handleOnOpenNav = () => this.setState({ isNavOpened: true });

  handleOnCloseSaveBuildModal = () =>
    this.setState({ isSaveBuildModalVisible: false });

  handleOnOpenSaveBuildModal = () =>
    this.setState({ isSaveBuildModalVisible: true });

  handleOnCloseShareModal = () => this.setState({ isShareModalVisible: false });

  handleOnOpenShareModal = () => this.setState({ isShareModalVisible: true });

  handleOnCloseSkillList = () => this.setState({ isSkillListOpened: false });

  handleOnOpenSkillList = () => this.setState({ isSkillListOpened: true });

  handleOnChangePokemon = (value) => {
    this.props.selectPokemon(value);
    this.props.resetGrids();
  };

  handleOnChangeSavedBuild = (value) => {
    this.props.loadSelectedBuild({ buildId: value });
  };

  handleOnDeleteSavedBuild = (value) => {
    this.props.deleteSelectedBuild({ buildId: value });
  };

  handleOnClickSaveBuild = () => {
    this.handleOnOpenSaveBuildModal();
  };

  handleOnClickShare = () => {
    this.handleOnOpenShareModal();
  };

  handleOnSaveBuild = () => {
    let userConfirmation = true;
    if (this.newBuildNameRef.current.value) {
      // If already has a save with the same name, delete old save
      for (let build in this.props.savedBuilds) {
        if (
          this.props.savedBuilds[build].name ===
            this.newBuildNameRef.current.value &&
          this.props.savedBuilds[build].pokemon ===
            this.props.pokemon.selectedPokemon
        ) {
          userConfirmation = window.confirm(
            'There is a save with the same name. Do you wish to overwrite it?'
          );
          userConfirmation &&
            this.props.deleteSelectedBuild({
              buildId: this.props.savedBuilds[build].id,
            });
        }
      }
      userConfirmation &&
        this.props.saveCurrentBuild({
          selectedPokemon: this.props.pokemon.selectedPokemon,
          buildName: this.newBuildNameRef.current.value,
        });
      this.handleOnCloseSaveBuildModal();
    } else {
      alert('Please enter a name');
    }
  };

  render() {
    const {
      isNavOpened,
      isSkillListOpened,
      isSaveBuildModalVisible,
      isShareModalVisible,
    } = this.state;
    const { classes, pokemon, grid, language } = this.props;

    let skillList = Object.keys(grid.selectedCellsById)
      .map((cellId) => {
        return grid.selectedCellsById[cellId].name;
      })
      .sort();

    return (
      <div>
        <NavigationMobile
          isOpened={isNavOpened}
          onCloseHandler={this.handleOnCloseNav}
        />

        <SelectedSkillListMobile
          isOpened={isSkillListOpened}
          onOpenHandler={this.handleOnOpenSkillList}
          onCloseHandler={this.handleOnCloseSkillList}
          skillList={skillList}
          UI={UI}
          language={language}
        />

        <MainAppbar
          onOpenNavHandler={this.handleOnOpenNav}
          data={{
            energy: grid.remainingEnergy,
            orbs: grid.orbSpent,
          }}
        />

        <div className={classes.mainContainer}>
          <SyncGridControls
            selectedPokemon={pokemon.selectedPokemon}
            language={language}
            UI={UI}
            onChangePokemonHandler={this.handleOnChangePokemon}
            onChangeSavedBuildHandler={this.handleOnChangeSavedBuild}
            onDeleteSavedBuildHandler={this.handleOnDeleteSavedBuild}
            onOpenSkillListHandler={this.handleOnOpenSkillList}
            onSaveBuildClickHandler={this.handleOnClickSaveBuild}
            onShareClickHandler={this.handleOnClickShare}
          />

          <Grid container alignItems="stretch" justify="center">
            <Grid item xs={12}>
              <div className={classes.syncGridWrapper}>
                <GridMap />
              </div>
            </Grid>
          </Grid>

          <SkillOverview
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
          <DialogTitle>{UI['Save Build'][language]}</DialogTitle>
          <DialogContent>
            <TextField
              className={classes.buildNameField}
              label={UI['Build name'][language]}
              placeholder="Enter a name as a reference"
              inputProps={{ ref: this.newBuildNameRef }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleOnCloseSaveBuildModal}>
              {UI['Close'][language]}
            </Button>
            <Button onClick={this.handleOnSaveBuild}>
              {UI['Save'][language]}
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={isShareModalVisible}
          onClose={this.handleOnCloseShareModal}
        >
          <DialogTitle> {UI['Share this link'][language]}</DialogTitle>
          <DialogContent>
            <TextField
              className={classes.buildNameField}
              value={this.props.url}
              InputProps={{
                readOnly: true,
              }}
            />
          </DialogContent>
          <DialogActions>
            <CopyToClipboard text={this.props.url}>
              <Button onClick={this.handleOnCloseShareModal}>
                {UI['Copy to Clipboard'][language]}
              </Button>
            </CopyToClipboard>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MobileApp));
