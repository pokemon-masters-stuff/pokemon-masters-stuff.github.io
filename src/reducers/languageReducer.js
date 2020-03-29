import { SET_LANGUAGE } from '../actions/types';

const initialState = { currentLanguage: 'en' };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { currentLanguage: action.payload };
    default:
      return state;
  }
};
