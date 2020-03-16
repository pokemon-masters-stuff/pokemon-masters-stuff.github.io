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
  UPDATE_URL
} from '../actions/types';

const initialState = {
  gridData: {},
  remainingEnergy: 60,
  orbSpent: 0,
  selectedCellsById: {},
  savedBuilds: {
    byIds: {},
    allIds: []
  },
  selectedBuild: {
    id: '',
    name: ''
  },
  url: ''
};

export default function(state = initialState, action) {
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
          [action.gridData.cellId]: action.gridData
        }
      };
    case REMOVE_FROM_GRID_LIST:
      const updateSelectedCellsById = { ...state.selectedCellsById };
      delete updateSelectedCellsById[action.gridData.cellId];

      return {
        ...state,
        selectedCellsById: updateSelectedCellsById
      };
    case SUBTRACT_FROM_REMAINING_ENERGY:
      return {
        ...state,
        remainingEnergy: state.remainingEnergy - action.gridData.energy,
        orbSpent:
          state.orbSpent +
          (action.gridData.energy === 0 ? 5 : action.gridData.energy * 12)
      };
    case ADD_BACK_TO_REMAINING_ENERGY:
      return {
        ...state,
        remainingEnergy: state.remainingEnergy + action.gridData.energy,
        orbSpent:
          state.orbSpent -
          (action.gridData.energy === 0 ? 5 : action.gridData.energy * 12)
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
              url: state.url
            }
          },
          allIds: [...state.savedBuilds.allIds, newBuildUUID]
        }
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
        url: state.savedBuilds.byIds[action.payload.buildId].url
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
            )
          ]
        }
      };
    case LOAD_GRID_FROM_URL:
      return {
        ...state,
        selectedCellsById: {
          ...state.selectedCellsById,
          [action.gridData.cellId]: action.gridData
        },
        remainingEnergy: action.remainingEnergy,
        orbSpent: action.orbSpent
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
          name: ''
        }
      };
    case UPDATE_URL:
      const gridUrlArray =
        Object.keys(state.selectedCellsById).length === 0
          ? ''
          : '&grid=' +
            Object.keys(state.selectedCellsById)
              .map(e => {
                return e.slice(-2);
              })
              .join(',');
      return {
        ...state,
        url: `https://pokemon-masters-stuff.github.io/?e=${state.remainingEnergy}${gridUrlArray}&o=${state.orbSpent}&p=${action.payload}`
      };
    default:
      return state;
  }
}
