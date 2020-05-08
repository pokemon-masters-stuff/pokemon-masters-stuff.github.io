import { v4 as uuidv4 } from 'uuid';

import {
  DISPLAY_GRID_DATA,
  HIDE_GRID_DATA,
  ADD_TO_GRID_LIST,
  REMOVE_FROM_GRID_LIST,
  SUBTRACT_FROM_REMAINING_ENERGY,
  ADD_BACK_TO_REMAINING_ENERGY,
  RESET_GRIDS,
  SAVE_CURRENT_BUILD,
  LOAD_SELECTED_BUILD,
  DELETE_SELECTED_BUILD,
  LOAD_GRID_FROM_URL,
  UPDATE_URL,
  SET_SYNC_LEVEL,
} from '../actions/types';

const initialState = {
  gridData: {},
  remainingEnergy: 60,
  orbSpent: 0,
  selectedCellsById: {},
  savedBuilds: {
    byIds: {},
    allIds: [],
  },
  selectedBuild: {
    id: '',
    name: '',
  },
  url: '',
  syncLevel: '3+',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DISPLAY_GRID_DATA:
      return { ...state, gridData: action.gridData };
    case HIDE_GRID_DATA:
      return { ...state, gridData: {} };
    case ADD_TO_GRID_LIST:
      return {
        ...state,
        selectedCellsById: {
          ...state.selectedCellsById,
          [action.gridData.cellId]: action.gridData,
        },
      };
    case REMOVE_FROM_GRID_LIST:
      const updateSelectedCellsById = { ...state.selectedCellsById };
      delete updateSelectedCellsById[action.gridData.cellId];

      return {
        ...state,
        selectedCellsById: updateSelectedCellsById,
      };
    case SUBTRACT_FROM_REMAINING_ENERGY:
      return {
        ...state,
        remainingEnergy: state.remainingEnergy - action.gridData.energy,
        orbSpent:
          state.orbSpent +
          (action.gridData.energy === 0 ? 5 : action.gridData.energy * 12),
      };
    case ADD_BACK_TO_REMAINING_ENERGY:
      return {
        ...state,
        remainingEnergy: state.remainingEnergy + action.gridData.energy,
        orbSpent:
          state.orbSpent -
          (action.gridData.energy === 0 ? 5 : action.gridData.energy * 12),
      };
    case SAVE_CURRENT_BUILD:
      const newBuildUUID = uuidv4();

      return {
        ...state,
        savedBuilds: {
          ...state.savedBuilds,
          byIds: {
            ...state.savedBuilds.byIds,
            [newBuildUUID]: {
              id: newBuildUUID,
              pokemon: action.payload.selectedPokemon,
              name: action.payload.buildName,
              selectedCellsById: state.selectedCellsById,
              remainingEnergy: state.remainingEnergy,
              orbSpent: state.orbSpent,
              url: state.url,
              syncLevel: state.syncLevel,
            },
          },
          allIds: [...state.savedBuilds.allIds, newBuildUUID],
        },
      };
    case LOAD_SELECTED_BUILD:
      return {
        ...state,
        selectedCellsById:
          state.savedBuilds.byIds[action.payload.buildId].selectedCellsById,
        selectedBuild: state.savedBuilds.byIds[action.payload.buildId],
        remainingEnergy:
          state.savedBuilds.byIds[action.payload.buildId].remainingEnergy,
        orbSpent: state.savedBuilds.byIds[action.payload.buildId].orbSpent,
        url: state.savedBuilds.byIds[action.payload.buildId].url,
        syncLevel:
          state.savedBuilds.byIds[action.payload.buildId].syncLevel || '3+', // old saves don't have sync level
      };
    case DELETE_SELECTED_BUILD:
      const updateSavedBuildsById = { ...state.savedBuilds.byIds };
      delete updateSavedBuildsById[action.payload.buildId];

      return {
        ...state,
        savedBuilds: {
          ...state.savedBuilds,
          byIds: updateSavedBuildsById,
          allIds: [
            ...state.savedBuilds.allIds.slice(
              0,
              state.savedBuilds.allIds.indexOf(action.payload.buildId)
            ),
            ...state.savedBuilds.allIds.slice(
              state.savedBuilds.allIds.indexOf(action.payload.buildId) + 1
            ),
          ],
        },
      };
    case LOAD_GRID_FROM_URL:
      return {
        ...state,
        selectedCellsById: {
          ...state.selectedCellsById,
          [action.gridData.cellId]: action.gridData,
        },
        remainingEnergy: action.remainingEnergy,
        orbSpent: action.orbSpent,
      };
    case RESET_GRIDS:
      return {
        ...state,
        gridData: {},
        remainingEnergy: 60,
        orbSpent: 0,
        selectedCellsById: {},
        selectedBuild: {
          id: '',
          name: '',
        },
      };
    case UPDATE_URL:
      let b64GridUrlArray;
      const gridUrlArray =
        Object.keys(state.selectedCellsById).length === 0
          ? ''
          : Object.keys(state.selectedCellsById).map((e) => {
              return e.slice(-2);
            });
      if (gridUrlArray === '') {
        b64GridUrlArray = '';
      } else {
        let len = gridUrlArray.length;
        let chArray = new Array(len);
        for (let i = 0; i < len; i++) {
          chArray[i] = String.fromCharCode(gridUrlArray[i]);
        }
        b64GridUrlArray = '&grid=' + window.btoa(chArray.join(''));
      }
      let syncLevelForUrl = state.syncLevel;
      if (state.syncLevel === '3+') {
        syncLevelForUrl = '3';
      }
      return {
        ...state,
        url: `https://pokemon-masters-stuff.github.io/?e=${state.remainingEnergy}${b64GridUrlArray}&o=${state.orbSpent}&p=${action.payload}&s=${syncLevelForUrl}`,
      };
    case SET_SYNC_LEVEL:
      return {
        ...state,
        syncLevel: action.payload,
      };
    default:
      return state;
  }
}
