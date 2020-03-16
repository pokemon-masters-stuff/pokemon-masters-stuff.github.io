import { v4 as uuidv4 } from 'uuid';

import {
  GET_BUILDS,
  GET_LIKED_BUILDS,
  GET_USERS_BUILDS,
  ADD_BUILD,
  EDIT_BUILD,
  DELETE_BUILD,
  CLEAR_BUILDS,
  BUILD_ERROR,
  UPDATE_LIKES,
  CHANGE_FILTER,
  CHANGE_SORT
} from '../actions/types';

const initialState = {
  builds: [],
  totalBuildCount: 0,
  loading: true,
  error: {},
  filter: 'None',
  sort: 'popular'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BUILDS:
    case GET_LIKED_BUILDS:
    case GET_USERS_BUILDS:
      return {
        ...state,
        builds: [...state.builds, ...action.payload.builds],
        totalBuildCount: action.payload.totalBuildCount,
        loading: false
      };
    case BUILD_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case UPDATE_LIKES:
      const newBuilds = state.builds.map(build => {
        return build._id === action.payload.id
          ? { ...build, likes: action.payload.likes }
          : build;
      });
      return {
        ...state,
        builds: newBuilds,
        loading: false
      };
    case ADD_BUILD:
      return {
        ...state,
        builds: [action.payload, ...state.builds],
        loading: false
      };
    case EDIT_BUILD:
      const newBuildsArray = state.builds.map(build => {
        return build._id === action.payload.id
          ? { ...build, description: action.payload.description }
          : build;
      });
      return {
        ...state,
        builds: newBuildsArray,
        loading: false
      };
    case DELETE_BUILD:
      return {
        ...state,
        builds: state.builds.filter(build => build._id !== action.payload),
        loading: false
      };
    case CHANGE_FILTER:
      return {
        ...state,
        builds: [],
        filter: action.payload
      };
    case CHANGE_SORT:
      return {
        ...state,
        builds: [],
        sort: action.payload
      };
    case CLEAR_BUILDS:
      return {
        ...state,
        builds: [],
        totalBuildCount: 0
      };
    default:
      return state;
  }
}
