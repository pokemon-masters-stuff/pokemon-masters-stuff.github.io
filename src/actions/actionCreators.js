// TODO: break into several files
import axios from 'axios';
import uuid from 'uuid';
import setAuthToken from '../utils/setAuthToken';
import {
  SELECT_SYNC_PAIR,
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
  REMOVE_ALL_ALERT,
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
  CHANGE_POKEMON_FILTER,
  CHANGE_SYNC_LEVEL_FILTER,
  CHANGE_SORT,
  SET_LANGUAGE,
  SET_SYNC_LEVEL,
  // for team building
  SET_TEAM,
  SET_TEAM_SYNC_LEVELS,
  ADD_TO_TEAM_GRID_LIST,
  REMOVE_FROM_TEAM_GRID_LIST,
  SUBTRACT_FROM_TEAM_REMAINING_ENERGY,
  ADD_BACK_TO_TEAM_REMAINING_ENERGY,
  RESET_TEAM,
  RESET_INDIVIDUAL_GRID,
  SAVE_CURRENT_TEAM_BUILD,
  LOAD_SELECTED_INDIVIDUAL_BUILD,
  LOAD_SELECTED_TEAM_BUILD,
  DELETE_SELECTED_TEAM_BUILD,
  LOAD_TEAM_GRID_FROM_URL,
  UPDATE_TEAM_URL,
  CHANGE_GENDER,
  ADD_TEAM,
  EDIT_TEAM,
  DELETE_TEAM,
  TEAM_ERROR,
  ADD_COMMENT_TO_TEAM,
  DELETE_COMMENT_FROM_TEAM,
  CLEAR_TEAMS,
  GET_TEAMS,
  GET_LIKED_TEAMS,
  GET_USERS_TEAMS,
  UPDATE_TEAM_LIKES,
  CHANGE_TEAM_SYNC_PAIR_FILTER,
  CHANGE_TEAM_SYNC_LEVEL_FILTER,
  CHANGE_TEAM_SORT,
  CHANGE_TEAM_TAG_FILTER,
} from './types';
import { CLOUD_FUNCTIONS_URL } from '../utils/constants';

export const selectSyncPair = (trainerId) => ({
  type: SELECT_SYNC_PAIR,
  trainerId,
});

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

export const loadGridFromUrl = (
  selectedCellByIdFromUrl,
  remainingEnergy,
  orbSpent
) => ({
  type: LOAD_GRID_FROM_URL,
  selectedCellByIdFromUrl,
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

export const setAlert =
  (msg, alertType, timeout = 2000) =>
  (dispatch) => {
    const id = uuid.v4();

    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

export const removeAllAlert = () => ({
  type: REMOVE_ALL_ALERT,
});

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${CLOUD_FUNCTIONS_URL}/api/auth`);

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
export const register =
  ({ username, password }) =>
  async (dispatch) => {
    dispatch(setLoading(true));

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ username, password });

    try {
      const res = await axios.post(
        `${CLOUD_FUNCTIONS_URL}/api/users`,
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
      `${CLOUD_FUNCTIONS_URL}/api/auth`,
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
export const getBuilds =
  (pokemonFilter, syncLevelFilter, sort, skip, limit) => async (dispatch) => {
    try {
      const res = await axios.get(
        `${CLOUD_FUNCTIONS_URL}/api/builds?skip=${skip}&limit=${limit}&sort=${sort}${
          pokemonFilter !== 'None' ? '&pokemonFilter=' + pokemonFilter : ''
        }${syncLevelFilter ? '&syncLevelFilter=' + syncLevelFilter : ''}`
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
export const getLikedBuilds =
  (pokemonFilter, syncLevelFilter, sort, skip, limit) => async (dispatch) => {
    try {
      const res = await axios.get(
        `${CLOUD_FUNCTIONS_URL}/api/builds/liked?skip=${skip}&limit=${limit}&sort=${sort}${
          pokemonFilter !== 'None' ? '&pokemonFilter=' + pokemonFilter : ''
        }${syncLevelFilter ? '&syncLevelFilter=' + syncLevelFilter : ''}`
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

// Get User's Builds
export const getUsersBuilds =
  (pokemonFilter, syncLevelFilter, sort, skip, limit) => async (dispatch) => {
    try {
      const res = await axios.get(
        `${CLOUD_FUNCTIONS_URL}/api/builds/users?skip=${skip}&limit=${limit}&sort=${sort}${
          pokemonFilter !== 'None' ? '&pokemonFilter=' + pokemonFilter : ''
        }${syncLevelFilter ? '&syncLevelFilter=' + syncLevelFilter : ''}`
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
    const res = await axios.put(`${CLOUD_FUNCTIONS_URL}/api/builds/like/${id}`);
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
      `${CLOUD_FUNCTIONS_URL}/api/builds/unlike/${id}`
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
      `${CLOUD_FUNCTIONS_URL}/api/builds`,
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
export const editBuild =
  (id, description, syncLevel, luckySkillIds) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ description, syncLevel, luckySkillIds });

    try {
      const res = await axios.put(
        `${CLOUD_FUNCTIONS_URL}/api/builds/edit/${id}`,
        body,
        config
      );

      dispatch({
        type: EDIT_BUILD,
        // payload: { id, description: res.data },
        payload: res.data,
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
    await axios.delete(`${CLOUD_FUNCTIONS_URL}/api/builds/${id}`);

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
      `${CLOUD_FUNCTIONS_URL}/api/builds/comment/${buildId}`,
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
      `${CLOUD_FUNCTIONS_URL}/api/builds/comment/${buildId}/${commentId}`
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

export const changePokemonFilter = (payload) => ({
  type: CHANGE_POKEMON_FILTER,
  payload,
});

export const changeSyncLevelFilter = (payload) => ({
  type: CHANGE_SYNC_LEVEL_FILTER,
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

// For team building
export const setTeam = (payload) => ({
  type: SET_TEAM,
  payload,
});

export const setTeamSyncLevels = (payload) => ({
  type: SET_TEAM_SYNC_LEVELS,
  payload,
});

export const addToTeamGridList = (payload) => ({
  type: ADD_TO_TEAM_GRID_LIST,
  payload,
});

export const subtractFromTeamRemainingEnergy = (payload) => ({
  type: SUBTRACT_FROM_TEAM_REMAINING_ENERGY,
  payload,
});

export const removeFromTeamGridList = (payload) => ({
  type: REMOVE_FROM_TEAM_GRID_LIST,
  payload,
});

export const addBackToTeamRemainingEnergy = (payload) => ({
  type: ADD_BACK_TO_TEAM_REMAINING_ENERGY,
  payload,
});

// export const displayTeamGridData = (gridData) => ({
//   type: DISPLAY_GRID_DATA,
//   gridData,
// });

// export const hideTeamGridData = () => ({
//   type: HIDE_GRID_DATA,
// });

export const resetTeam = (payload) => ({
  type: RESET_TEAM,
  payload,
});

export const resetIndividualGrid = (payload) => ({
  type: RESET_INDIVIDUAL_GRID,
  payload,
});

export const saveCurrentTeamBuild = (payload) => ({
  type: SAVE_CURRENT_TEAM_BUILD,
  payload,
});

export const loadSelectedIndividualBuild = (payload) => ({
  type: LOAD_SELECTED_INDIVIDUAL_BUILD,
  payload,
});

export const loadSelectedTeamBuild = (payload) => ({
  type: LOAD_SELECTED_TEAM_BUILD,
  payload,
});

export const deleteSelectedTeamBuild = (payload) => ({
  type: DELETE_SELECTED_TEAM_BUILD,
  payload,
});

export const loadTeamGridFromUrl = (payload) => ({
  type: LOAD_TEAM_GRID_FROM_URL,
  payload,
});

export const updateTeamUrl = (payload) => ({
  type: UPDATE_TEAM_URL,
  payload,
});

export const changeGender = () => ({
  type: CHANGE_GENDER,
});

// Add team
export const addTeam = (data) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      `${CLOUD_FUNCTIONS_URL}/api/teams`,
      data,
      config
    );

    dispatch({
      type: ADD_TEAM,
      payload: res.data,
    });

    dispatch(setAlert('Team Published', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: TEAM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Edit team
export const editTeam = (id, updatedTeamData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ updatedTeamData });

  try {
    const res = await axios.put(
      `${CLOUD_FUNCTIONS_URL}/api/teams/edit/${id}`,
      body,
      config
    );

    dispatch({
      type: EDIT_TEAM,
      // payload: { id, description: res.data },
      payload: res.data,
    });

    dispatch(setAlert('Team Updated', 'success'));
  } catch (err) {
    dispatch({
      type: TEAM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete team
export const deleteTeam = (id) => async (dispatch) => {
  try {
    await axios.delete(`${CLOUD_FUNCTIONS_URL}/api/teams/${id}`);

    dispatch({
      type: DELETE_TEAM,
      payload: id,
    });

    dispatch(setAlert('Team Removed', 'success'));
  } catch (err) {
    dispatch({
      type: TEAM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add comment to team
export const addCommentToTeam = (teamId, text) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ text });
  try {
    const res = await axios.post(
      `${CLOUD_FUNCTIONS_URL}/api/teams/comment/${teamId}`,
      body,
      config
    );

    dispatch({
      type: ADD_COMMENT_TO_TEAM,
      payload: { teamId: teamId, data: res.data },
    });

    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: TEAM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete comment from team
export const deleteCommentFromTeam =
  (teamId, commentId) => async (dispatch) => {
    try {
      await axios.delete(
        `${CLOUD_FUNCTIONS_URL}/api/teams/comment/${teamId}/${commentId}`
      );

      dispatch({
        type: DELETE_COMMENT_FROM_TEAM,
        payload: { teamId, commentId },
      });

      dispatch(setAlert('Comment Removed', 'success'));
    } catch (err) {
      dispatch({
        type: TEAM_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

export const clearTeams = () => ({
  type: CLEAR_TEAMS,
});

// Get Teams
export const getTeams =
  (syncPairFilter, syncLevelFilter, teamTagFilter, sort, skip, limit) =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `${CLOUD_FUNCTIONS_URL}/api/teams?skip=${skip}&limit=${limit}&sort=${sort}${
          syncPairFilter !== 'None' ? '&syncPairFilter=' + syncPairFilter : ''
        }${syncLevelFilter ? '&syncLevelFilter=' + syncLevelFilter : ''}${
          teamTagFilter !== ['']
            ? '&teamTagFilter=' + JSON.stringify(teamTagFilter)
            : ''
        }`
      );

      dispatch({
        type: GET_TEAMS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: TEAM_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  };

// Get Liked Teams
export const getLikedTeams =
  (syncPairFilter, syncLevelFilter, teamTagFilter, sort, skip, limit) =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `${CLOUD_FUNCTIONS_URL}/api/teams/liked?skip=${skip}&limit=${limit}&sort=${sort}${
          syncPairFilter !== 'None' ? '&syncPairFilter=' + syncPairFilter : ''
        }${syncLevelFilter ? '&syncLevelFilter=' + syncLevelFilter : ''}${
          teamTagFilter !== ['']
            ? '&teamTagFilter=' + JSON.stringify(teamTagFilter)
            : ''
        }`
      );

      dispatch({
        type: GET_LIKED_TEAMS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: TEAM_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  };

// Get User's Teams
export const getUsersTeams =
  (syncPairFilter, syncLevelFilter, teamTagFilter, sort, skip, limit) =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `${CLOUD_FUNCTIONS_URL}/api/teams/users?skip=${skip}&limit=${limit}&sort=${sort}${
          syncPairFilter !== 'None' ? '&syncPairFilter=' + syncPairFilter : ''
        }${syncLevelFilter ? '&syncLevelFilter=' + syncLevelFilter : ''}${
          teamTagFilter !== ['']
            ? '&teamTagFilter=' + JSON.stringify(teamTagFilter)
            : ''
        }`
      );

      dispatch({
        type: GET_USERS_TEAMS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: TEAM_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  };

// Add like to team
export const addLikeToTeam = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`${CLOUD_FUNCTIONS_URL}/api/teams/like/${id}`);
    dispatch({
      type: UPDATE_TEAM_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (error) {
    dispatch({
      type: TEAM_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Remove like from team
export const removeLikeFromTeam = (id) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${CLOUD_FUNCTIONS_URL}/api/teams/unlike/${id}`
    );
    dispatch({
      type: UPDATE_TEAM_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (error) {
    dispatch({
      type: TEAM_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const changeTeamSyncPairFilter = (payload) => ({
  type: CHANGE_TEAM_SYNC_PAIR_FILTER,
  payload,
});

export const changeTeamSyncLevelFilter = (payload) => ({
  type: CHANGE_TEAM_SYNC_LEVEL_FILTER,
  payload,
});

export const changeTeamSort = (payload) => ({
  type: CHANGE_TEAM_SORT,
  payload,
});

export const changeTeamTagFilter = (payload) => ({
  type: CHANGE_TEAM_TAG_FILTER,
  payload,
});
