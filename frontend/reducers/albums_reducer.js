import { 
  RECEIVE_ALL_ALBUMS, 
  RECEIVE_ALBUM, 
  REMOVE_ALBUM,
  CLEAR_ALBUMS 
} from '../actions/album_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      return Object.assign({}, state, action.albums);
    case RECEIVE_ALBUM:
      return Object.assign({}, state, {[action.album.id]: action.album});
    case REMOVE_ALBUM:
      let newState = Object.assign({}, state);
      delete newState[action.albumId];
      return newState;
    case CLEAR_ALBUMS:
      return {};
    default:
      return state;
  };
};

export default albumsReducer;