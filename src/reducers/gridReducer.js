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
  DELETE_SELECTED_BUILD
} from '../actions/types';

const initialState = {
  gridData: {},
  remainingEnergy: 60,
  orbSpent: 0,
  activeGridList: [],
  selectedCellsById: {},
  savedBuilds: {
    byIds: {},
    allIds: []
  },
  selectedBuild: {
    id: '',
    name: ''
  }
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
        activeGridList: [
          ...state.activeGridList,
          action.gridData.description
        ].sort(),
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
        activeGridList: [
          ...state.activeGridList.slice(
            0,
            state.activeGridList.indexOf(action.gridData.description)
          ),
          ...state.activeGridList.slice(
            state.activeGridList.indexOf(action.gridData.description) + 1
          )
        ],
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
              selectedCellsById: state.selectedCellsById
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
        selectedBuild: state.savedBuilds.byIds[action.payload.buildId]
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
    case RESET_GRIDS:
      return {
        ...state,
        gridData: {},
        remainingEnergy: 60,
        orbSpent: 0,
        activeGridList: [],
        selectedCellsById: {},
        selectedBuild: {
          id: '',
          name: ''
        }
      };
    default:
      return state;
  }
}
