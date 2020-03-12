import {RECEIVE_PHOTO, RECEIVE_PHOTO_ERRORS, REMOVE_PHOTO_ERRORS} from '../actions/photo_actions';

const photoErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:

      return action.errors;
    case RECEIVE_PHOTO:
      return [];
    case REMOVE_PHOTO_ERRORS:
      return [];
    default:
      return state;
  }
}

export default photoErrorsReducer;