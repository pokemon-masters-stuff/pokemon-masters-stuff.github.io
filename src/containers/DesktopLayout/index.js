import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectedSkillListDesktop } from '../../components/SelectedSkillList';
import SelectPokemonDropdown from '../../components/SelectPokemonDropdown';
import SyncLevelDropdown from '../../components/SyncLevelDropdown';
import { ResetGridButtonDesktop } from '../../components/ResetGridButton';
import GridMap from '../../components/GridMap';
import {
  selectPokemon,
  resetGrids,
  loadSelectedBuild,
  deleteSelectedBuild,
} from '../../actions/actionCreators';
import { SaveBuildButtonDesktop } from '../../components/SaveBuildButton';
import { ShareButtonDesktop } from '../../components/ShareButton';
import { PublishBuildButtonDesktop } from '../../components/PublishBuildButton';
import LoadBuildDropdown from '../../components/LoadBuildDropdown';
import { MovesAndSkillsButtonDesktop } from '../../components/MovesAndSkillsButton';

class DesktopLayout extends Component {
  constructor(props) {
    super(props);

    this.selectPokemon = this.selectPokemon.bind(this);
    this.handleOnChangeSavedBuild = this.handleOnChangeSavedBuild.bind(this);
  }

  selectPokemon(value) {
    this.props.selectPokemon(value);
    this.props.resetGrids();
  }

  handleOnChangeSavedBuild = (value) => {
    this.props.loadSelectedBuild({ buildId: value });
  };

  handleOnDeleteSavedBuild = (value) => {
    this.props.deleteSelectedBuild({ buildId: value });
  };

  render() {
    const { pokemon, darkMode } = this.props;

    return (
      <div className={`App ${darkMode ? 'dark-mode' : null}`}>
        <div className="content">
          <div className="container container-s">
            <div className="row">
              <div className="col-sm-8">
                <div style={{ marginTop: 24 }}>
                  <SelectPokemonDropdown
                    selectedPokemon={pokemon.selectedPokemon}
                    onChangeHandler={this.selectPokemon}
                  />
                  <SyncLevelDropdown />
                  <LoadBuildDropdown
                    onChangeHandler={this.handleOnChangeSavedBuild}
                    onDeleteHandler={this.handleOnDeleteSavedBuild}
                  />
                  <div style={{ marginLeft: 8, marginTop: 3 }}>
                    <MovesAndSkillsButtonDesktop />
                  </div>
                  <div style={{ marginLeft: 8, marginTop: 10 }}>
                    <SaveBuildButtonDesktop />
                  </div>
                  <div style={{ marginLeft: 8, marginTop: 10 }}>
                    <ShareButtonDesktop />
                  </div>
                  <div style={{ marginLeft: 8, marginTop: 10 }}>
                    <PublishBuildButtonDesktop />
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <ResetGridButtonDesktop />
                  </div>
                  <div style={{ marginTop: -180 }}>
                    <GridMap />
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <SelectedSkillListDesktop />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
  darkMode: state.darkMode.mode,
});

export default connect(mapStateToProps, {
  selectPokemon,
  resetGrids,
  loadSelectedBuild,
  deleteSelectedBuild,
})(DesktopLayout);
