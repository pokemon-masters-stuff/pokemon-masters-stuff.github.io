import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import gridReducer from './gridReducer';

export default combineReducers({
  pokemon: pokemonReducer,
  grid: gridReducer
});
