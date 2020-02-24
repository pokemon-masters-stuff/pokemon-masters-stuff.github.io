import { UPDATE_URL } from '../actions/types';

const initialState = { url: window.loacation.href };

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_URL:
      return {
        url: action.payload
      };
    default:
      return state;
  }
}
