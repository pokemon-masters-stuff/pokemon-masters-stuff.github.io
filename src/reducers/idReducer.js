import { SELECT_SYNC_PAIR } from '../actions/types';

const initialState = { trainerId: '18000000000' };

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_SYNC_PAIR:
      return {
        trainerId: action.trainerId,
      };
    default:
      return state;
  }
}
