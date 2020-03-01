import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import gridReducer from './gridReducer';
import darkModeReducer from './darkModeReducer';

export default combineReducers({
  pokemon: pokemonReducer,
  grid: gridReducer,
  darkMode: darkModeReducer
});
