// For darkmode
import { CHANGE_MODE } from '../actions/types';

const initialState = { darkMode: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MODE:
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
}
