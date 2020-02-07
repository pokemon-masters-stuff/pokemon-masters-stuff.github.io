import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectPokemonDropdown from './SelectPokemonDropdown';
import { ResetGridButtonDesktop } from './ResetGridButton';
import GridMap from './GridMap';
import CurrentGrid from './CurrentGrid';
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
      <>
        <SelectPokemonDropdown onChangeHandler={this.selectPokemon} />
        <br /> <ResetGridButtonDesktop />
        <div className="grid-data-display position-fixed">
          <CurrentGrid />
        </div>
        <GridMap />
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
})(SyncGrids);
