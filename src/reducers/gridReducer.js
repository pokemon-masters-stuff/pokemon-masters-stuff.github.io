import { v4 as uuidv4 } from 'uuid';
import { allSyncGrids } from '../utils/constants';

import {
  // grid helper
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
  // team builder
  ADD_TO_TEAM_GRID_LIST,
  REMOVE_FROM_TEAM_GRID_LIST,
  SET_TEAM,
  SET_TEAM_SYNC_LEVELS,
  RESET_INDIVIDUAL_GRID,
  RESET_TEAM,
  SAVE_CURRENT_TEAM_BUILD,
  LOAD_SELECTED_INDIVIDUAL_BUILD,
  LOAD_SELECTED_TEAM_BUILD,
  DELETE_SELECTED_TEAM_BUILD,
  LOAD_TEAM_GRID_FROM_URL,
  UPDATE_TEAM_URL,
  SUBTRACT_FROM_TEAM_REMAINING_ENERGY,
  ADD_BACK_TO_TEAM_REMAINING_ENERGY,
} from '../actions/types';

const initialState = {
  // grid helper
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
  syncLevel: '5',
  // team builder
  teamMembers: { slot1: '', slot2: '', slot3: '' },
  teamRemainingEnergy: { slot1: 60, slot2: 60, slot3: 60 },
  teamOrbSpent: { slot1: 0, slot2: 0, slot3: 0 },
  teamSelectedCellsById: { slot1: {}, slot2: {}, slot3: {} },
  teamUrl: '',
  teamSyncLevels: { slot1: '5', slot2: '5', slot3: '5' },
  teamSavedBuilds: {
    byIds: {},
    allIds: [],
  },
  teamSelectedBuild: {
    id: '',
    name: '',
  },
  teamSelectedIndividualBuilds: {
    slot1: { id: '', name: '' },
    slot2: { id: '', name: '' },
    slot3: { id: '', name: '' },
  },
};

export default function (state = initialState, action) {
  let syncPair = {};
  let gridData = {};
  let slot = '';
  let syncLevelToLoad;
  let oldSelectedCellsById;
  let updatedSelectedCellsById;
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
      syncLevelToLoad =
        state.savedBuilds.byIds[action.payload.buildId].syncLevel;
      if (!syncLevelToLoad) {
        syncLevelToLoad = '5';
      } else if (syncLevelToLoad === '3+') {
        syncLevelToLoad = '3';
      }

      oldSelectedCellsById =
        state.savedBuilds.byIds[action.payload.buildId].selectedCellsById;

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
          [action.selectedCellByIdFromUrl.cellId]:
            action.selectedCellByIdFromUrl,
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

      return {
        ...state,
        url: `https://pokemon-masters-stuff.github.io/?e=${state.remainingEnergy}${b64GridUrlArray}&o=${state.orbSpent}&p=${action.payload}&s=${state.syncLevel}`,
      };
    case SET_SYNC_LEVEL:
      return {
        ...state,
        syncLevel: action.payload,
      };

    // team builder
    case SET_TEAM:
      slot = action.payload.slot;
      syncPair = action.payload.syncPair;
      return {
        ...state,
        teamMembers: { ...state.teamMembers, [slot]: syncPair },
        teamRemainingEnergy: { ...state.teamRemainingEnergy, [slot]: 60 },
        teamOrbSpent: { ...state.teamOrbSpent, [slot]: 0 },
        teamSelectedCellsById: { ...state.teamSelectedCellsById, [slot]: {} },
        teamSyncLevels: { ...state.teamSyncLevels, [slot]: '5' },
      };
    case ADD_TO_TEAM_GRID_LIST:
      gridData = action.payload.gridData;
      slot = action.payload.slot;
      return {
        ...state,
        teamSelectedCellsById: {
          ...state.teamSelectedCellsById,
          [slot]: {
            ...state.teamSelectedCellsById[slot],
            [gridData.cellId]: gridData,
          },
        },
      };
    case REMOVE_FROM_TEAM_GRID_LIST:
      slot = action.payload.slot;
      gridData = action.payload.gridData;
      const updatedTeamSelectedCellsById = {
        ...state.teamSelectedCellsById[slot],
      };
      delete updatedTeamSelectedCellsById[gridData.cellId];

      return {
        ...state,
        teamSelectedCellsById: {
          ...state.teamSelectedCellsById,
          [slot]: updatedTeamSelectedCellsById,
        },
      };
    case SUBTRACT_FROM_TEAM_REMAINING_ENERGY:
      slot = action.payload.slot;
      gridData = action.payload.gridData;
      return {
        ...state,
        teamRemainingEnergy: {
          ...state.teamRemainingEnergy,
          [slot]: state.teamRemainingEnergy[slot] - gridData.energy,
        },
        teamOrbSpent: {
          ...state.teamOrbSpent,
          [slot]:
            state.teamOrbSpent[slot] +
            (gridData.energy === 0 ? 5 : gridData.energy * 12),
        },
      };
    case ADD_BACK_TO_TEAM_REMAINING_ENERGY:
      slot = action.payload.slot;
      gridData = action.payload.gridData;
      return {
        ...state,
        teamRemainingEnergy: {
          ...state.teamRemainingEnergy,
          [slot]: state.teamRemainingEnergy[slot] + gridData.energy,
        },
        teamOrbSpent: {
          ...state.teamOrbSpent,
          [slot]:
            state.teamOrbSpent[slot] -
            (gridData.energy === 0 ? 5 : gridData.energy * 12),
        },
      };
    case SAVE_CURRENT_TEAM_BUILD:
      const newTeamBuildUUID = uuidv4();
      return {
        ...state,
        teamSavedBuilds: {
          ...state.teamSavedBuilds,
          byIds: {
            ...state.teamSavedBuilds.byIds,
            [newTeamBuildUUID]: {
              id: newTeamBuildUUID,
              name: action.payload.buildName,
              teamMembers: state.teamMembers,
              teamRemainingEnergy: state.teamRemainingEnergy,
              teamOrbSpent: state.teamOrbSpent,
              teamSelectedCellsById: state.teamSelectedCellsById,
              teamUrl: state.teamUrl,
              teamSyncLevels: state.teamSyncLevels,
            },
          },
          allIds: [...state.teamSavedBuilds.allIds, newTeamBuildUUID],
        },
      };
    case LOAD_SELECTED_INDIVIDUAL_BUILD:
      syncLevelToLoad =
        state.savedBuilds.byIds[action.payload.buildId].syncLevel;
      if (!syncLevelToLoad) {
        syncLevelToLoad = '5';
      } else if (syncLevelToLoad === '3+') {
        syncLevelToLoad = '3';
      }

      oldSelectedCellsById =
        state.savedBuilds.byIds[action.payload.buildId].selectedCellsById;
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

      slot = action.payload.slot;
      return {
        ...state,
        teamSelectedCellsById: {
          ...state.teamSelectedCellsById,
          [slot]: updatedSelectedCellsById || oldSelectedCellsById,
        },
        teamSelectedIndividualBuilds: {
          ...state.teamSelectedIndividualBuilds,
          [slot]: state.savedBuilds.byIds[action.payload.buildId],
        },
        teamRemainingEnergy: {
          ...state.teamRemainingEnergy,
          [slot]:
            state.savedBuilds.byIds[action.payload.buildId].remainingEnergy,
        },
        teamOrbSpent: {
          ...state.teamOrbSpent,
          [slot]: state.savedBuilds.byIds[action.payload.buildId].orbSpent,
        },
        // url: state.savedBuilds.byIds[action.payload.buildId].url,
        teamSyncLevels: {
          ...state.teamSyncLevels,
          [slot]: syncLevelToLoad, // old saves don't have sync level
        },
      };
    case LOAD_SELECTED_TEAM_BUILD:
      return {
        ...state,
        teamMembers:
          state.teamSavedBuilds.byIds[action.payload.buildId].teamMembers,
        teamSelectedCellsById:
          state.teamSavedBuilds.byIds[action.payload.buildId]
            .teamSelectedCellsById,
        teamSelectedBuild: state.teamSavedBuilds.byIds[action.payload.buildId],
        teamRemainingEnergy:
          state.teamSavedBuilds.byIds[action.payload.buildId]
            .teamRemainingEnergy,
        teamOrbSpent:
          state.teamSavedBuilds.byIds[action.payload.buildId].teamOrbSpent,
        teamUrl: state.teamSavedBuilds.byIds[action.payload.buildId].teamUrl,
        teamSyncLevels:
          state.teamSavedBuilds.byIds[action.payload.buildId].teamSyncLevels,
      };
    case DELETE_SELECTED_TEAM_BUILD:
      const updatedTeamSavedBuildsById = { ...state.teamSavedBuilds.byIds };
      delete updatedTeamSavedBuildsById[action.payload.buildId];
      return {
        ...state,
        teamSavedBuilds: {
          ...state.teamSavedBuilds,
          byIds: updatedTeamSavedBuildsById,
          allIds: [
            ...state.teamSavedBuilds.allIds.slice(
              0,
              state.teamSavedBuilds.allIds.indexOf(action.payload.buildId)
            ),
            ...state.teamSavedBuilds.allIds.slice(
              state.teamSavedBuilds.allIds.indexOf(action.payload.buildId) + 1
            ),
          ],
        },
      };
    case LOAD_TEAM_GRID_FROM_URL:
      slot = action.payload.slot;
      let selectedCellByIdFromUrl = action.payload.selectedCellByIdFromUrl;
      let remainingEnergy = action.payload.remainingEnergy;
      let orbSpent = action.payload.orbSpent;
      return {
        ...state,
        teamSelectedCellsById: {
          ...state.teamSelectedCellsById,
          [slot]: {
            ...state.teamSelectedCellsById[slot],
            [selectedCellByIdFromUrl.cellId]: selectedCellByIdFromUrl,
          },
        },
        teamRemainingEnergy: {
          ...state.teamRemainingEnergy,
          [slot]: remainingEnergy,
        },
        teamOrbSpent: { ...state.teamOrbSpent, [slot]: orbSpent },
      };
    case RESET_TEAM:
      return {
        ...state,
        teamMembers: { slot1: '', slot2: '', slot3: '' },
        teamRemainingEnergy: { slot1: 60, slot2: 60, slot3: 60 },
        teamOrbSpent: { slot1: 0, slot2: 0, slot3: 0 },
        teamSelectedCellsById: { slot1: {}, slot2: {}, slot3: {} },
        teamUrl: '',
        teamSyncLevels: { slot1: '5', slot2: '5', slot3: '5' },
        teamSelectedBuild: {
          id: '',
          name: '',
        },
      };
    case RESET_INDIVIDUAL_GRID:
      slot = action.payload;
      return {
        ...state,
        teamRemainingEnergy: {
          ...state.teamRemainingEnergy,
          [slot]: 60,
        },
        teamOrbSpent: { ...state.teamOrbSpent, [slot]: 0 },
        teamSelectedCellsById: {
          ...state.teamSelectedCellsById,
          [slot]: {},
        },
        teamSelectedIndividualBuilds: {
          ...state.teamSelectedIndividualBuilds,
          [slot]: { id: '', name: '' },
        },
      };
    case UPDATE_TEAM_URL:
      let syncPair1 = state.teamMembers.slot1
        ? state.teamMembers.slot1.replace(/\s+/g, '').replace(/&/g, '_')
        : '';
      let syncPair2 = state.teamMembers.slot2
        ? state.teamMembers.slot2.replace(/\s+/g, '').replace(/&/g, '_')
        : '';
      let syncPair3 = state.teamMembers.slot3
        ? state.teamMembers.slot3.replace(/\s+/g, '').replace(/&/g, '_')
        : '';
      let slot1B64GridUrlArray = '';
      let slot2B64GridUrlArray = '';
      let slot3B64GridUrlArray = '';
      if (syncPair1) {
        const slot1GridUrlArray =
          Object.keys(state.teamSelectedCellsById.slot1).length === 0
            ? ''
            : Object.keys(state.teamSelectedCellsById.slot1).map((e) => {
                return e.slice(-2);
              });
        if (slot1GridUrlArray === '') {
          slot1B64GridUrlArray = '';
        } else {
          let len = slot1GridUrlArray.length;
          let chArray = new Array(len);
          for (let i = 0; i < len; i++) {
            chArray[i] = String.fromCharCode(slot1GridUrlArray[i]);
          }
          slot1B64GridUrlArray = window.btoa(chArray.join(''));
        }
      }

      if (syncPair2) {
        const slot2GridUrlArray =
          Object.keys(state.teamSelectedCellsById.slot2).length === 0
            ? ''
            : Object.keys(state.teamSelectedCellsById.slot2).map((e) => {
                return e.slice(-2);
              });
        if (slot2GridUrlArray === '') {
          slot2B64GridUrlArray = '';
        } else {
          let len = slot2GridUrlArray.length;
          let chArray = new Array(len);
          for (let i = 0; i < len; i++) {
            chArray[i] = String.fromCharCode(slot2GridUrlArray[i]);
          }
          slot2B64GridUrlArray = window.btoa(chArray.join(''));
        }
      }

      if (syncPair3) {
        const slot3GridUrlArray =
          Object.keys(state.teamSelectedCellsById.slot3).length === 0
            ? ''
            : Object.keys(state.teamSelectedCellsById.slot3).map((e) => {
                return e.slice(-2);
              });
        if (slot3GridUrlArray === '') {
          slot3B64GridUrlArray = '';
        } else {
          let len = slot3GridUrlArray.length;
          let chArray = new Array(len);
          for (let i = 0; i < len; i++) {
            chArray[i] = String.fromCharCode(slot3GridUrlArray[i]);
          }
          slot3B64GridUrlArray = window.btoa(chArray.join(''));
        }
      }

      let syncPair1Url = syncPair1
        ? `sp1=${syncPair1}&e1=${state.teamRemainingEnergy.slot1}&o1=${state.teamOrbSpent.slot1}&g1=${slot1B64GridUrlArray}&s1=${state.teamSyncLevels.slot1}`
        : '';
      let syncPair2Url = syncPair2
        ? `sp2=${syncPair2}&e2=${state.teamRemainingEnergy.slot2}&o2=${state.teamOrbSpent.slot2}&g2=${slot2B64GridUrlArray}&s2=${state.teamSyncLevels.slot2}`
        : '';
      let syncPair3Url = syncPair3
        ? `sp3=${syncPair3}&e3=${state.teamRemainingEnergy.slot3}&o3=${state.teamOrbSpent.slot3}&g3=${slot3B64GridUrlArray}&s3=${state.teamSyncLevels.slot3}`
        : '';

      let teamUrl = `https://pokemon-masters-stuff.github.io/#/team-builder/?${syncPair1Url}&${syncPair2Url}&${syncPair3Url}`;
      if (!syncPair1Url && !syncPair2Url && !syncPair3Url) {
        teamUrl = 'https://pokemon-masters-stuff.github.io/#/team-builder';
      }

      return {
        ...state,
        teamUrl: teamUrl,
      };
    case SET_TEAM_SYNC_LEVELS:
      slot = action.payload.slot;
      let syncLevel = action.payload.syncLevel;
      return {
        ...state,
        teamSyncLevels: { ...state.teamSyncLevels, [slot]: syncLevel },
      };
    default:
      return state;
  }
}
