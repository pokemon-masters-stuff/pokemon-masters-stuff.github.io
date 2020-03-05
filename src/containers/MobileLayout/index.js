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
import SkillOverview from '../../components/SkillOverview';
import MainAppbar from '../../components/MainAppbar';
import GridMap from '../../components/GridMap';
import styles from './styles';
import { getQueryStringValue, setQueryStringValue } from '../../queryString';
import {
  selectPokemon,
  resetGrids,
  saveCurrentBuild,
  loadSelectedBuild,
  deleteSelectedBuild
} from '../../actions/actionCreators';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  grid: state.grid,
  savedBuilds: state.grid.savedBuilds.allIds.map(
    id => state.grid.savedBuilds.byIds[id]
  ),
  url: state.grid.url,
  darkMode: state.darkMode
});

const mapDispatchToProps = {
  selectPokemon,
  resetGrids,
  saveCurrentBuild,
  loadSelectedBuild,
  deleteSelectedBuild
};

class MobileApp extends Component {
  state = {
    isNavOpened: false,
    isSkillListOpened: false,
    isSaveBuildModalVisible: false,
    isShareModalVisible: false,
    isAnnouncementModalVisible: false
  };

  newBuildNameRef = React.createRef();

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    getQueryStringValue('p')
      ? this.props.selectPokemon(getQueryStringValue('p'))
      : setQueryStringValue('p', this.props.pokemon.selectedPokemon);
  }

  handleOnCloseNav = () => this.setState({ isNavOpened: false });

  handleOnOpenNav = () => this.setState({ isNavOpened: true });

  handleOnCloseSaveBuildModal = () =>
    this.setState({ isSaveBuildModalVisible: false });

  handleOnOpenSaveBuildModal = () =>
    this.setState({ isSaveBuildModalVisible: true });

  handleOnCloseShareModal = () => this.setState({ isShareModalVisible: false });

  handleOnCloseAnnouncementModal = () =>
    this.setState({ isAnnouncementModalVisible: false });

  handleOnOpenShareModal = () => this.setState({ isShareModalVisible: true });

  handleOnOpenAnnouncementModal = () =>
    this.setState({ isAnnouncementModalVisible: true });

  handleOnCloseSkillList = () => this.setState({ isSkillListOpened: false });

  handleOnOpenSkillList = () => this.setState({ isSkillListOpened: true });

  handleOnChangePokemon = value => {
    this.props.selectPokemon(value);
    this.props.resetGrids();
    setQueryStringValue('p', value);
    setQueryStringValue('grid', []);
  };

  handleOnChangeSavedBuild = value => {
    this.props.loadSelectedBuild({ buildId: value });
  };

  handleOnDeleteSavedBuild = value => {
    this.props.deleteSelectedBuild({ buildId: value });
  };

  handleOnClickSaveBuild = () => {
    this.handleOnOpenSaveBuildModal();
  };

  handleOnClickShare = () => {
    this.handleOnOpenShareModal();
  };

  handleOnClickAnnouncement = () => {
    this.handleOnOpenAnnouncementModal();
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
              buildId: this.props.savedBuilds[build].id
            });
        }
      }
      userConfirmation &&
        this.props.saveCurrentBuild({
          selectedPokemon: this.props.pokemon.selectedPokemon,
          buildName: this.newBuildNameRef.current.value
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
      isAnnouncementModalVisible
    } = this.state;
    const { classes, pokemon, grid } = this.props;

    let skillList = Object.keys(grid.selectedCellsById)
      .map(cellId => {
        return grid.selectedCellsById[cellId].name;
      })
      .sort();

    return (
      // <div className={`${darkMode ? 'dark-mode' : null}`}>
      <div>
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
          onAnnouncementClickHandler={this.handleOnClickAnnouncement}
        />

        <div className={classes.mainContainer}>
          <SyncGridControls
            selectedPokemon={pokemon.selectedPokemon}
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
          <DialogTitle>{'Save a new build'}</DialogTitle>
          <DialogContent>
            <TextField
              className={classes.buildNameField}
              label="Build name"
              placeholder="Enter a name as a reference"
              inputProps={{ ref: this.newBuildNameRef }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleOnCloseSaveBuildModal}>Cancel</Button>
            <Button onClick={this.handleOnSaveBuild}>Save</Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={isShareModalVisible}
          onClose={this.handleOnCloseShareModal}
        >
          <DialogTitle>{'Share this link'}</DialogTitle>
          <DialogContent>
            <TextField
              className={classes.buildNameField}
              value={this.props.url}
              InputProps={{
                readOnly: true
              }}
            />
          </DialogContent>
          <DialogActions>
            <CopyToClipboard text={this.props.url}>
              <Button onClick={this.handleOnCloseShareModal}>
                Copy to Clipboard
              </Button>
            </CopyToClipboard>
          </DialogActions>
        </Dialog>

        <Dialog
          open={isAnnouncementModalVisible}
          onClose={this.handleOnCloseAnnouncementModal}
        >
          <DialogTitle>{'Announcement'}</DialogTitle>
          <DialogContent dividers>
            <p>
              Several users reported continuous crashes when selecting cells.
              I'm still looking into the causes but I suspect it is related to
              the Share feature.{' '}
            </p>
            <p>
              I created a test branch where the Share feature is disabled and
              deployed it on Heroku. Please try out the link below and let me
              know if the issue goes away. Thank you.
            </p>
            https://pokemon-masters-stuff.herokuapp.com/
          </DialogContent>
          <DialogActions style={{ justifyContent: 'center' }}>
            <Button
              href="https://pokemon-masters-stuff.herokuapp.com"
              style={{ color: 'blue' }}
            >
              Go to this link
            </Button>
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
