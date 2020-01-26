import { SELECT_POKEMON, UPDATE_GRID_LIST, DISPLAY_GRID_DATA } from './types';

export const selectPokemon = selectedPokemon => ({
  type: SELECT_POKEMON,
  selectedPokemon
});

export const updateGridList = gridData => ({
  type: UPDATE_GRID_LIST,
  gridData
});

export const displayGridData = gridData => ({
  type: DISPLAY_GRID_DATA,
  gridData
});
