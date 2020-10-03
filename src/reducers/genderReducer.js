import { CHANGE_GENDER } from '../actions/types';

const initialState = { selectedGender: 'Male' };

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_GENDER:
      let newGender;
      if (state.selectedGender === 'Male') {
        newGender = 'Female';
      } else {
        newGender = 'Male';
      }
      return {
        selectedGender: newGender,
      };
    default:
      return state;
  }
}
