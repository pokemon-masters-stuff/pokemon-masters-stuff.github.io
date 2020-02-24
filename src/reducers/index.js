import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import gridReducer from './gridReducer';
// import urlReducer from './urlReducer';

export default combineReducers({
  pokemon: pokemonReducer,
  grid: gridReducer
  // url: urlReducer
});
