import { v4 as uuidv4 } from 'uuid';
import { allSyncGrids } from '../utils/constants';
import {
  ADD_TO_TEAM_GRID_LIST,
  REMOVE_FROM_TEAM_GRID_LIST,
  SET_TEAM,
  SET_TEAM_SYNC_LEVELS,
  RESET_TEAM_GRIDS,
  SAVE_CURRENT_TEAM_BUILD,
  LOAD_SELECTED_TEAM_BUILD,
  DELETE_SELECTED_TEAM_BUILD,
  LOAD_TEAM_GRID_FROM_URL,
  UPDATE_TEAM_URL,
  SUBTRACT_FROM_TEAM_REMAINING_ENERGY,
  ADD_BACK_TO_TEAM_REMAINING_ENERGY,
} from '../actions/types';

const initialState = {
  team: { slot1: '', slot2: '', slot3: '' },
  gridData: { slot1: {}, slot2: {}, slot3: {} },
  remainingEnergy: { slot1: 60, slot2: 60, slot3: 60 },
  orbSpent: { slot1: 0, slot2: 0, slot3: 0 },
  selectedCellsById: { slot1: {}, slot2: {}, slot3: {} },
  savedBuilds: {
    byIds: {},
    allIds: [],
  },
  selectedBuild: {
    id: '',
    name: '',
  },
  teamUrl: '',
  syncLevels: { slot1: '5', slot2: '5', slot3: '5' },
};

export default function (state = initialState, action) {
  console.log('action payload', action.payload);
  let gridData = {};
  let slot = '';
  switch (action.type) {
    case ADD_TO_TEAM_GRID_LIST: // updated
      gridData = action.payload.gridData;
      slot = action.payload.slot;
      return {
        ...state,
        selectedCellsById: {
          ...state.selectedCellsById,
          [slot]: {
            ...state.selectedCellsById[slot],
            [gridData.cellId]: gridData,
          },
        },
      };
    case REMOVE_FROM_TEAM_GRID_LIST: // updated
      const updateSelectedCellsById = {
        ...state.selectedCellsById[action.payload.slot],
      };
      delete updateSelectedCellsById[action.payload.gridData.cellId];

      return {
        ...state,
        selectedCellsById: {
          ...state.selectedCellsById,
          [action.payload.slot]: updateSelectedCellsById,
        },
      };
    case SUBTRACT_FROM_TEAM_REMAINING_ENERGY: // updated
      return {
        ...state,
        remainingEnergy: {
          ...state.remainingEnergy,
          [action.payload.slot]:
            state.remainingEnergy[action.payload.slot] -
            action.payload.gridData.energy,
        },
        orbSpent: {
          ...state.orbSpent,
          [action.payload.slot]:
            state.orbSpent[action.payload.slot] +
            (action.payload.gridData.energy === 0
              ? 5
              : action.payload.gridData.energy * 12),
        },
      };
    case ADD_BACK_TO_TEAM_REMAINING_ENERGY: // updated
      return {
        ...state,
        remainingEnergy: {
          ...state.remainingEnergy,
          [action.payload.slot]:
            state.remainingEnergy[action.payload.slot] +
            action.payload.gridData.energy,
        },
        orbSpent: {
          ...state.orbSpent,
          [action.payload.slot]:
            state.orbSpent[action.payload.slot] -
            (action.payload.gridData.energy === 0
              ? 5
              : action.payload.gridData.energy * 12),
        },
      };
    case SAVE_CURRENT_TEAM_BUILD:
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
    case LOAD_SELECTED_TEAM_BUILD:
      let syncLevelToLoad =
        state.savedBuilds.byIds[action.payload.buildId].syncLevel;
      if (!syncLevelToLoad) {
        syncLevelToLoad = '5';
      } else if (syncLevelToLoad === '3+') {
        syncLevelToLoad = '3';
      }

      let oldSelectedCellsById =
        state.savedBuilds.byIds[action.payload.buildId].selectedCellsById;
      let updatedSelectedCellsById;
      // For old save files that don't contain moveId, value, and type, loop through grid to find them.
      if (!Object.values(oldSelectedCellsById)[0]['type']) {
        let selectedCellById = {};
        Object.keys(oldSelectedCellsById).map((cellId) => {
          allSyncGrids['en'][
            `${state.savedBuilds.byIds[
              action.payload.buildId
            ].pokemon.toLowerCase()}GridDataEN`
          ].forEach((cellData) => {
            if (cellData.cellId === Number(cellId)) {
              selectedCellById = {
                cellId: cellData.cellId,
                name: cellData.move.name,
                description: cellData.move.description,
                energy: cellData.move.energyCost,
                moveId: cellData.ability.moveId,
                value: cellData.ability.value,
                type: cellData.ability.type,
              };
            }
          });

          updatedSelectedCellsById = {
            ...updatedSelectedCellsById,
            [cellId]: selectedCellById,
          };

          return updatedSelectedCellsById;
        });
      }

      return {
        ...state,
        selectedCellsById: updatedSelectedCellsById || oldSelectedCellsById,
        selectedBuild: state.savedBuilds.byIds[action.payload.buildId],
        remainingEnergy:
          state.savedBuilds.byIds[action.payload.buildId].remainingEnergy,
        orbSpent: state.savedBuilds.byIds[action.payload.buildId].orbSpent,
        url: state.savedBuilds.byIds[action.payload.buildId].url,
        syncLevel: syncLevelToLoad, // old saves don't have sync level
      };
    case DELETE_SELECTED_TEAM_BUILD:
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
    case LOAD_TEAM_GRID_FROM_URL:
      return {
        ...state,
        selectedCellsById: {
          ...state.selectedCellsById,
          [action.payload.gridData.cellId]: action.payload.gridData,
        },
        remainingEnergy: action.remainingEnergy,
        orbSpent: action.orbSpent,
      };
    case RESET_TEAM_GRIDS:
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
    case UPDATE_TEAM_URL:
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

      return {
        ...state,
        url: `https://pokemon-masters-stuff.github.io/?e=${state.remainingEnergy}${b64GridUrlArray}&o=${state.orbSpent}&p=${action.payload}&s=${state.syncLevel}`,
      };
    case SET_TEAM_SYNC_LEVELS:
      let syncLevels = state.syncLevels;
      syncLevels[action.payload.slot] = action.payload.syncLevel;
      return {
        ...state,
        syncLevels: syncLevels,
      };
    default:
      return state;
  }
}
