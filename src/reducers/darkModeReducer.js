// For darkmode
import { CHANGE_MODE } from '../actions/types';

const initialState = { mode: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MODE:
      console.log('reducer', state.mode);
      return { mode: !state.mode };
    default:
      return state;
  }
}
