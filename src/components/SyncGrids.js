import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectPokemonDropdown from './SelectPokemonDropdown';
import { ResetGridButtonDesktop } from './ResetGridButton';
import GridMap from './GridMap';
import { selectPokemon, resetGrids } from '../actions/actionCreators';

class SyncGrids extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.selectPokemon = this.selectPokemon.bind(this);
  }

  selectPokemon(value) {
    this.props.selectPokemon(value);
    this.props.resetGrids();
  }

  render() {
    return (
      <div>
        <SelectPokemonDropdown onChangeHandler={this.selectPokemon} />
        <br /> <ResetGridButtonDesktop />
        <GridMap />
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
