import {
  RECEIVE_ALL_PHOTOS, 
  RECEIVE_ALL_USER_PHOTOS,
  RECEIVE_ALL_TAG_PHOTOS, 
  RECEIVE_PHOTO, 
  REMOVE_PHOTO,
  CLEAR_PHOTOS
} from '../actions/photo_actions';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return Object.assign({}, state, action.photos);
    case RECEIVE_PHOTO:
      return Object.assign({}, state, {[action.photo.id]: action.photo});
    case RECEIVE_ALL_USER_PHOTOS:
      return Object.assign({}, state, action.photos);
    case RECEIVE_ALL_TAG_PHOTOS:
      return Object.assign({}, state, action.photos);
    case REMOVE_PHOTO:
      let newState = Object.assign({}, state);
      delete newState[action.photoId];
      return newState;
    case CLEAR_PHOTOS:
      return {};
    default:
      return state;
  }
}

export default photosReducer;