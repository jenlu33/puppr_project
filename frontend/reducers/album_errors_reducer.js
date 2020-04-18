import {
  RECEIVE_ALBUM,
  RECEIVE_ALBUM_ERRORS,
  REMOVE_ALBUM_ERRORS
} from '../actions/album_actions';

// let _nullState = {
//   errors: []
// };

const albumErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_ALBUM_ERRORS:
      return action.errors;
    case RECEIVE_ALBUM:
      return state;
    case REMOVE_ALBUM_ERRORS:
      return state;
    default:
      return state;
  }
};

export default albumErrorsReducer;