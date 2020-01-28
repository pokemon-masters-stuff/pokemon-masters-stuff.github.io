import React, { Component } from 'react';

class SelectPokemon extends Component {
  state = {};
  renderDropDown() {
    <div className="form">
      <div className="form-group">
        <label htmlFor="choosePokemon">Choose Pokemon</label>
        <select
          required
          className="form-control"
          id="Pokemon"
          // name="Pokemon"
          // value={this.state.pokemon}
          onChange={this.selectPokemon}
        >
          {DropDown.map((pokemon, index) => (
            <option key={index}>{pokemon.name}</option>
          ))}
        </select>
      </div>
    </div>;
  }
  render() {
    return <div>SelectPokemon</div>;
  }
}

export default SelectPokemon;
