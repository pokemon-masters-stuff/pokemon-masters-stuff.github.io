import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import gridReducer from './gridReducer';
import modeReducer from './modeReducer';

export default combineReducers({
  pokemon: pokemonReducer,
  grid: gridReducer,
  mode: modeReducer
});
