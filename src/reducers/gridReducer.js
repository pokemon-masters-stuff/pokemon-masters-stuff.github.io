import {
  DISPLAY_GRID_DATA,
  ADD_TO_GRID_LIST,
  REMOVE_FROM_GRID_LIST
} from '../actions/types';

const initialState = {
  gridData: {},
  activeGridList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_GRID_DATA:
      return { ...state, gridData: action.gridData };
    case ADD_TO_GRID_LIST:
      console.log('activeGridList', state.activeGridList);
      return {
        ...state,
        activeGridList: [...state.activeGridList, action.gridData.description]
      };
    default:
      return state;
  }
}
