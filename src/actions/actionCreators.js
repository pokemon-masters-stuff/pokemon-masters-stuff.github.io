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
  SET_LOADING,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
  GET_BUILDS,
  GET_LIKED_BUILDS,
  GET_USERS_BUILDS,
  UPDATE_LIKES,
  ADD_BUILD,
  EDIT_BUILD,
  DELETE_BUILD,
  CLEAR_BUILDS,
  ADD_COMMENT,
  DELETE_COMMENT,
  BUILD_ERROR,
  CHANGE_FILTER,
  CHANGE_SORT,
  SET_LANGUAGE,
  SET_SYNC_LEVEL,
} from './types';

export const selectPokemon = (selectedPokemon) => ({
  type: SELECT_POKEMON,
  selectedPokemon,
});

export const addToGridList = (gridData) => ({
  type: ADD_TO_GRID_LIST,
  gridData,
});

export const subtractFromRemainingEnergy = (gridData) => ({
  type: SUBTRACT_FROM_REMAINING_ENERGY,
  gridData,
});

export const removeFromGridList = (gridData) => ({
  type: REMOVE_FROM_GRID_LIST,
  gridData,
});

export const addBackToRemainingEnergy = (gridData) => ({
  type: ADD_BACK_TO_REMAINING_ENERGY,
  gridData,
});

export const displayGridData = (gridData) => ({
  type: DISPLAY_GRID_DATA,
  gridData,
});

export const hideGridData = () => ({
  type: HIDE_GRID_DATA,
});

export const resetGrids = () => ({
  type: RESET_GRIDS,
});

export const saveCurrentBuild = (payload) => ({
  type: SAVE_CURRENT_BUILD,
  payload,
});

export const loadSelectedBuild = (payload) => ({
  type: LOAD_SELECTED_BUILD,
  payload,
});

export const deleteSelectedBuild = (payload) => ({
  type: DELETE_SELECTED_BUILD,
  payload,
});

export const loadGridFromUrl = (gridData, remainingEnergy, orbSpent) => ({
  type: LOAD_GRID_FROM_URL,
  gridData,
  remainingEnergy,
  orbSpent,
});

export const updateUrl = (payload) => ({
  type: UPDATE_URL,
  payload,
});

export const changeMode = () => ({
  type: CHANGE_MODE,
});

export const setAlert = (msg, alertType, timeout = 2000) => (dispatch) => {
  const id = uuid.v4();

  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(
      'https://us-central1-pokemonmasters-7e304.cloudfunctions.net/app/api/auth'
    );

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

// Register User
export const register = ({ username, password }) => async (dispatch) => {
  dispatch(setLoading(true));

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post(
      'https://us-central1-pokemonmasters-7e304.cloudfunctions.net/app/api/users',
      body,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
    dispatch(setLoading(false));
    dispatch(setAlert('Registration Successful', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch(setLoading(false));
  }
};

// Login User
export const login = (username, password) => async (dispatch) => {
  dispatch(setLoading(true));

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post(
      'https://us-central1-pokemonmasters-7e304.cloudfunctions.net/app/api/auth',
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
    dispatch(setLoading(false));
    dispatch(setAlert('Login Successful', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch(setLoading(false));
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

// Set Loading
export const setLoading = (payload) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload,
  });
};

// Get Builds
export const getBuilds = (filter, sort, skip, limit) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://us-central1-pokemonmasters-7e304.cloudfunctions.net/app/api/builds?skip=${skip}&limit=${limit}&sort=${sort}${
        filter !== 'None' ? '&filter=' + filter : ''
      }`
    );

    dispatch({
      type: GET_BUILDS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: BUILD_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Get Liked Builds
export const getLikedBuilds = (filter, sort, skip, limit) => async (
  dispatch
) => {
  try {
    const res = await axios.get(
      `https://us-central1-pokemonmasters-7e304.cloudfunctions.net/app/api/builds/liked?skip=${skip}&limit=${limit}&sort=${sort}${
        filter !== 'None' ? '&filter=' + filter : ''
      }`
    );

    dispatch({
      type: GET_LIKED_BUILDS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: BUILD_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Get user's Builds
export const getUsersBuilds = (filter, sort, skip, limit) => async (
  dispatch
) => {
  try {
    const res = await axios.get(
      `https://us-central1-pokemonmasters-7e304.cloudfunctions.net/app/api/builds/users?skip=${skip}&limit=${limit}&sort=${sort}${
        filter !== 'None' ? '&filter=' + filter : ''
      }`
    );

    dispatch({
      type: GET_USERS_BUILDS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: BUILD_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Add like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(
      `https://us-central1-pokemonmasters-7e304.cloudfunctions.net/app/api/builds/like/${id}`
    );
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (error) {
    dispatch({
      type: BUILD_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(
      `https://us-central1-pokemonmasters-7e304.cloudfunctions.net/app/api/builds/unlike/${id}`
    );
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (error) {
    dispatch({
      type: BUILD_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Add build
export const addBuild = (data) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      'https://us-central1-pokemonmasters-7e304.cloudfunctions.net/app/api/builds',
      data,
      config
    );

    dispatch({
      type: ADD_BUILD,
      payload: res.data,
    });

    dispatch(setAlert('Build Published', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: BUILD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Edit build
export const editBuild = (id, description) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ description });

  try {
    const res = await axios.put(
      `https://us-central1-pokemonmasters-7e304.cloudfunctions.net/app/api/builds/edit/${id}`,
      body,
      config
    );

    dispatch({
      type: EDIT_BUILD,
      payload: { id, description: res.data },
    });

    dispatch(setAlert('Build Updated', 'success'));
  } catch (err) {
    dispatch({
      type: BUILD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete build
export const deleteBuild = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://us-central1-pokemonmasters-7e304.cloudfunctions.net/app/api/builds/${id}`
    );

    dispatch({
      type: DELETE_BUILD,
      payload: id,
    });

    dispatch(setAlert('Build Removed', 'success'));
  } catch (err) {
    dispatch({
      type: BUILD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add comment
export const addComment = (buildId, text) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ text });
  try {
    const res = await axios.post(
      `https://us-central1-pokemonmasters-7e304.cloudfunctions.net/app/api/builds/comment/${buildId}`,
      body,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: { buildId: buildId, data: res.data },
    });

    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: BUILD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete comment
export const deleteComment = (buildId, commentId) => async (dispatch) => {
  try {
    await axios.delete(
      `https://us-central1-pokemonmasters-7e304.cloudfunctions.net/app/api/builds/comment/${buildId}/${commentId}`
    );

    dispatch({
      type: DELETE_COMMENT,
      payload: { buildId, commentId },
    });

    dispatch(setAlert('Comment Removed', 'success'));
  } catch (err) {
    dispatch({
      type: BUILD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const changeFilter = (payload) => ({
  type: CHANGE_FILTER,
  payload,
});

export const changeSort = (payload) => ({
  type: CHANGE_SORT,
  payload,
});

export const clearBuilds = () => ({
  type: CLEAR_BUILDS,
});

export const setLanguage = (payload) => ({
  type: SET_LANGUAGE,
  payload,
});

export const setSyncLevel = (payload) => ({
  type: SET_SYNC_LEVEL,
  payload,
});
