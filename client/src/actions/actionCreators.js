// TODO: break into several files
import axios from 'axios';
import uuid from 'uuid';
import setAuthToken from '../utils/setAuthToken';
import {
  SELECT_POKEMON,
  ADD_TO_GRID_LIST,
  REMOVE_FROM_GRID_LIST,
  DISPLAY_GRID_DATA,
  HIDE_GRID_DATA,
  SUBTRACT_FROM_REMAINING_ENERGY,
  ADD_BACK_TO_REMAINING_ENERGY,
  RESET_GRIDS,
  SAVE_CURRENT_BUILD,
  LOAD_SELECTED_BUILD,
  DELETE_SELECTED_BUILD,
  LOAD_GRID_FROM_URL,
  UPDATE_URL,
  CHANGE_MODE,
  SET_ALERT,
  REMOVE_ALERT,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
  GET_BUILDS,
  GET_LIKED_BUILDS,
  GET_USERS_BUILDS,
  UPDATE_LIKES,
  GET_BUILD,
  BUILD_ERROR
} from './types';

export const selectPokemon = selectedPokemon => ({
  type: SELECT_POKEMON,
  selectedPokemon
});

export const addToGridList = gridData => ({
  type: ADD_TO_GRID_LIST,
  gridData
});

export const subtractFromRemainingEnergy = gridData => ({
  type: SUBTRACT_FROM_REMAINING_ENERGY,
  gridData
});

export const removeFromGridList = gridData => ({
  type: REMOVE_FROM_GRID_LIST,
  gridData
});

export const addBackToRemainingEnergy = gridData => ({
  type: ADD_BACK_TO_REMAINING_ENERGY,
  gridData
});

export const displayGridData = gridData => ({
  type: DISPLAY_GRID_DATA,
  gridData
});

export const hideGridData = () => ({
  type: HIDE_GRID_DATA
});

export const resetGrids = () => ({
  type: RESET_GRIDS
});

export const saveCurrentBuild = payload => ({
  type: SAVE_CURRENT_BUILD,
  payload
});

export const loadSelectedBuild = payload => ({
  type: LOAD_SELECTED_BUILD,
  payload
});

export const deleteSelectedBuild = payload => ({
  type: DELETE_SELECTED_BUILD,
  payload
});

export const loadGridFromUrl = (gridData, remainingEnergy, orbSpent) => ({
  type: LOAD_GRID_FROM_URL,
  gridData,
  remainingEnergy,
  orbSpent
});

export const updateUrl = payload => ({
  type: UPDATE_URL,
  payload
});

export const changeMode = () => ({
  type: CHANGE_MODE
});

export const setAlert = (msg, alertType, timeout = 2000) => dispatch => {
  const id = uuid.v4();

  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

// Register User
export const register = ({ username, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

// Login User
export const login = (username, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

// Logout
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};

// Get Builds
export const getBuilds = () => async dispatch => {
  try {
    const res = await axios.get('/api/builds');

    dispatch({
      type: GET_BUILDS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: BUILD_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Get Liked Builds
export const getLikedBuilds = () => async dispatch => {
  try {
    const res = await axios.get('/api/builds/liked');

    dispatch({
      type: GET_LIKED_BUILDS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: BUILD_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Get user's Builds
export const getUsersBuilds = () => async dispatch => {
  try {
    const res = await axios.get('/api/builds/users');

    dispatch({
      type: GET_USERS_BUILDS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: BUILD_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Add like
export const addLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/builds/like/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (error) {
    dispatch({
      type: BUILD_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Remove like
export const removeLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/builds/unlike/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (error) {
    dispatch({
      type: BUILD_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
