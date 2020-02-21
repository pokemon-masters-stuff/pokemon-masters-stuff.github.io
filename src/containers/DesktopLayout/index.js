import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import { SelectedSkillListDesktop } from '../../components/SelectedSkillList';
import { FeedbackFormDesktop } from '../../components/FeedbackForm';
import SelectPokemonDropdown from '../../components/SelectPokemonDropdown';
import { ResetGridButtonDesktop } from '../../components/ResetGridButton';
import GridMap from '../../components/GridMap';
import { SkillOverviewDesktop } from '../../components/SkillOverview';
import {
  selectPokemon,
  resetGrids,
  loadSelectedBuild,
  deleteSelectedBuild
} from '../../actions/actionCreators';
import { SaveBuildButtonDesktop } from '../../components/SaveBuildButton';
import LoadBuildDropdown from '../../components/LoadBuildDropdown';

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

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  handleOnChangeSavedBuild = value => {
    this.props.loadSelectedBuild({ buildId: value });
  };

  handleOnDeleteSavedBuild = value => {
    this.props.deleteSelectedBuild({ buildId: value });
  };

  render() {
    const { pokemon } = this.props;

    return (
      <div className="App">
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
                  <br /> <ResetGridButtonDesktop />
                  <div style={{ marginLeft: 8, marginTop: 10 }}>
                    <SaveBuildButtonDesktop />
                  </div>
                  <div style={{ marginTop: 5 }}>
                    <LoadBuildDropdown
                      onChangeHandler={this.handleOnChangeSavedBuild}
                      onDeleteHandler={this.handleOnDeleteSavedBuild}
                    />
                  </div>
                  <div className="grid-data-display position-fixed">
                    <SkillOverviewDesktop />
                  </div>
                  <GridMap />
                </div>
              </div>
              <div className="col-sm-4 position-static mt-5">
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
  pokemon: state.pokemon
});

export default connect(mapStateToProps, {
  selectPokemon,
  resetGrids,
  loadSelectedBuild,
  deleteSelectedBuild
})(DesktopLayout);
