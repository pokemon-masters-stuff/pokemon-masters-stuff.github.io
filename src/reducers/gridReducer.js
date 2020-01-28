import {
  DISPLAY_GRID_DATA,
  HIDE_GRID_DATA,
  ADD_TO_GRID_LIST,
  REMOVE_FROM_GRID_LIST,
  SUBTRACT_FROM_REMAINING_ENERGY,
  ADD_BACK_TO_REMAINING_ENERGY,
  RESET_GRIDS
} from '../actions/types';

const initialState = {
  gridData: {},
  remainingEnergy: 60,
  activeGridList: []
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
        ].sort()
      };
    case REMOVE_FROM_GRID_LIST:
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
        ]
      };
    case SUBTRACT_FROM_REMAINING_ENERGY:
      return {
        ...state,
        remainingEnergy: state.remainingEnergy - action.gridData.energy
      };
    case ADD_BACK_TO_REMAINING_ENERGY:
      return {
        ...state,
        remainingEnergy: state.remainingEnergy + action.gridData.energy
      };
    case RESET_GRIDS:
      return initialState;
    default:
      return state;
  }
}
