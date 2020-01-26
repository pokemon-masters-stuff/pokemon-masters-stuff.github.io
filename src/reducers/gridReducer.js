import { DISPLAY_GRID_DATA, UPDATE_GRID_LIST } from '../actions/types';

const initialState = {
  gridData: {},
  activeGridList: []
};

export default function(state = initialState, action) {
  console.log('grid reducer state', state);
  console.log('grid reducer action', action);
  switch (action.type) {
    case DISPLAY_GRID_DATA:
      return { ...state, gridData: action.gridData };
    case UPDATE_GRID_LIST:
      console.log('update grid list', this.state.activeGridList);
      return {
        ...state,
        activeGridList: this.state.activeGridList.push(
          action.gridData.description
        )
      };
    default:
      return state;
  }
}
