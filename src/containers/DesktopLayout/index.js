import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import { SelectedSkillListDesktop } from '../../components/SelectedSkillList';
import { FeedbackFormDesktop } from '../../components/FeedbackForm';
import SelectPokemonDropdown from '../../components/SelectPokemonDropdown';
import { ResetGridButtonDesktop } from '../../components/ResetGridButton';
import GridMap from '../../components/GridMap';
import {
  selectPokemon,
  resetGrids,
  loadSelectedBuild,
  deleteSelectedBuild
} from '../../actions/actionCreators';
import { SaveBuildButtonDesktop } from '../../components/SaveBuildButton';
import { ShareButtonDesktop } from '../../components/ShareButton';
import { DarkModeToggleDesktop } from '../../components/DarkModeToggle';
import LoadBuildDropdown from '../../components/LoadBuildDropdown';

import { getQueryStringValue, setQueryStringValue } from '../../queryString';

class DesktopLayout extends Component {
  constructor(props) {
    super(props);

    this.selectPokemon = this.selectPokemon.bind(this);
    this.handleOnChangeSavedBuild = this.handleOnChangeSavedBuild.bind(this);
  }

  selectPokemon(value) {
    this.props.selectPokemon(value);
    this.props.resetGrids();
    setQueryStringValue('p', value);
    setQueryStringValue('grid', []);
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);

    getQueryStringValue('p')
      ? this.props.selectPokemon(getQueryStringValue('p'))
      : setQueryStringValue('p', this.props.pokemon.selectedPokemon);
  }

  handleOnChangeSavedBuild = value => {
    this.props.loadSelectedBuild({ buildId: value });
  };

  handleOnDeleteSavedBuild = value => {
    this.props.deleteSelectedBuild({ buildId: value });
  };

  render() {
    const { pokemon, darkMode } = this.props;

    return (
      <div className={`App ${darkMode ? 'dark-mode' : null}`}>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container container-s">
            <span className="navbar-brand mb-0 h1">Sync Grid Helper</span>

            <button
              type="button"
              className="btn btn-dark"
              id="feedback-button"
              data-toggle="modal"
              data-target="#feedbackModal"
            >
              Submit Feedback
            </button>
            <FeedbackFormDesktop />
          </div>
        </nav>
        <div className="content">
          <div className="container container-s">
            <div className="row">
              <div className="col-sm-8">
                <div style={{ marginTop: 24 }}>
                  <SelectPokemonDropdown
                    selectedPokemon={pokemon.selectedPokemon}
                    onChangeHandler={this.selectPokemon}
                  />
                  <LoadBuildDropdown
                    onChangeHandler={this.handleOnChangeSavedBuild}
                    onDeleteHandler={this.handleOnDeleteSavedBuild}
                  />
                  <div style={{ marginLeft: 8, marginTop: 3 }}>
                    <SaveBuildButtonDesktop />
                  </div>
                  <div style={{ marginLeft: 8, marginTop: 10 }}>
                    <ShareButtonDesktop />
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <DarkModeToggleDesktop />
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <ResetGridButtonDesktop />
                  </div>
                  <div style={{ marginTop: -130 }}>
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

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  darkMode: state.darkMode.mode
});

export default connect(mapStateToProps, {
  selectPokemon,
  resetGrids,
  loadSelectedBuild,
  deleteSelectedBuild
})(DesktopLayout);
