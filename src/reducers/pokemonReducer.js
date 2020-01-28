import { SELECT_POKEMON } from '../actions/types';

const initialState = { selectedPokemon: 'Pikachu' };

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_POKEMON:
      return {
        selectedPokemon: action.selectedPokemon
      };
    default:
      return state;
  }
}
