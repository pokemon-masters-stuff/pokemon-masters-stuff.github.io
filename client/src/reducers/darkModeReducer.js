import { CHANGE_MODE } from '../actions/types';

const initialState = { mode: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MODE:
      return { mode: !state.mode };
    default:
      return state;
  }
}
