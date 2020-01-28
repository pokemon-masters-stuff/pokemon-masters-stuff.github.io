import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokemonList from './GridMaps/PokemonData/PokemonList';
import PikachuGrids from './GridMaps/PikachuGrids';
import TorkoalGrids from './GridMaps/TorkoalGrids';
import InfernapeGrids from './GridMaps/InfernapeGrids';
import DewgongGrids from './GridMaps/DewgongGrids';
import { selectPokemon, resetGrids } from '../actions/actionCreators';

class SyncGrids extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.selectPokemon = this.selectPokemon.bind(this);
  }

  renderContent() {
    switch (this.props.pokemon.selectedPokemon) {
      case 'Pikachu':
        return <PikachuGrids />;
      case 'Torkoal':
        return <TorkoalGrids />;
      case 'Infernape':
        return <InfernapeGrids />;
      case 'Dewgong':
        return <DewgongGrids />;
      default:
        return <PikachuGrids />;
    }
  }

  selectPokemon(e) {
    this.props.selectPokemon(e.target.value);
    this.props.resetGrids();
  }

  renderDropDown() {
    return (
      <div className="form-inline">
        <div className="form-group mt-3 mb-2">
          <select
            required
            className="form-control"
            id="Pokemon"
            onChange={this.selectPokemon}
          >
            {PokemonList.map((pokemon, index) => (
              <option key={index}>{pokemon.name}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderDropDown()}
        {this.renderContent()}
      </div>
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
})(SyncGrids);
