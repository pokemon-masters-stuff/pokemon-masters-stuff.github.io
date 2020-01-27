import { SELECT_POKEMON } from '../actions/types';

const initialState = 'Pikachu';

export default function(state = initialState, action) {
  // console.log('changing pokemon');
  // console.log('pokemon reducer action', action.selectedPokemon);
  switch (action.type) {
    case SELECT_POKEMON:
      return {
        pokemon: action.selectedPokemon
      };
    default:
      return state;
  }
}
