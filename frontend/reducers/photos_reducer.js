import {
  RECEIVE_ALL_PHOTOS, 
  RECEIVE_ALL_USER_PHOTOS, 
  RECEIVE_PHOTO, 
  REMOVE_PHOTO
} from '../actions/photo_actions';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return Object.assign({}, state, action.photos)
    case RECEIVE_PHOTO:
      return Object.assign({}, state, {[action.photo.id]: action.photo})
    default:
      return state;
  }
}

export default photosReducer;