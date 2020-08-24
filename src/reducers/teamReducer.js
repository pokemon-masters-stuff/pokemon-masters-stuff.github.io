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
} from '../actions/types';

const initialState = {
  team: { slot1: '', slot2: '', slot3: '' },
  teamGridData: { slot1: {}, slot2: {}, slot3: {} },
  teamRemainingEnergy: { slot1: 60, slot2: 60, slot3: 60 },
  teamOrbSpent: { slot1: 0, slot2: 0, slot3: 0 },
  teamSelectedCellsById: { slot1: {}, slot2: {}, slot3: {} },
  teamSavedBuilds: {
    byIds: {},
    allIds: [],
  },
  teamSelectedBuild: {
    id: '',
    name: '',
  },
  teamUrl: '',
  teamSyncLevels: { slot1: '5', slot2: '5', slot3: '5' },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TEAM_SYNC_LEVELS:
      let slot = action.payload.slot;
      let syncLevels = state.teamSyncLevel;
      syncLevels[slot] = action.payload.syncLevel;
      return {
        ...state,
        teamSyncLevels: syncLevels,
      };
    default:
      return state;
  }
}
