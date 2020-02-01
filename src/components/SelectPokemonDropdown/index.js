import React from 'react';
import PropTypes from 'prop-types';

import {pokemonList} from '../../data';

const SelectPokemonDropDown = (props) => {
  const {onChangeHandler} = props;

  const handleOnChange = (e) => onChangeHandler ? onChangeHandler(e.target.value) : false;

  return (
    <div className="form-inline">
      <div className="form-group mt-3 mb-2">
        <select
          required
          className="form-control"
          id="Pokemon"
          onChange={handleOnChange}
        >
          {pokemonList.map((pokemon, index) => (
            <option key={index}>{pokemon.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

SelectPokemonDropDown.propTypes = {
  onChangeHandler: PropTypes.func.isRequired
};

export default SelectPokemonDropDown;
