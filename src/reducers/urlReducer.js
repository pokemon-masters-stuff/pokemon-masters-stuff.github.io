import { UPDATE_URL } from '../actions/types';

const initialState = { link: '' };

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_URL:
      return {
        link: action.payload
      };
    default:
      return state;
  }
}
