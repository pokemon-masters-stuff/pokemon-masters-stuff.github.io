import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import gridReducer from './gridReducer';
import darkModeReducer from './darkModeReducer';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import publishedBuildReducer from './publishedBuildReducer';

export default combineReducers({
  pokemon: pokemonReducer,
  grid: gridReducer,
  darkMode: darkModeReducer,
  alert: alertReducer,
  auth: authReducer,
  build: publishedBuildReducer
});
