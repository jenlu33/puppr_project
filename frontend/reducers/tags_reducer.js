import {
  RECEIVE_ALL_TAGS, 
  RECEIVE_TAG, 
  REMOVE_TAG,
  CLEAR_TAGS 
} from '../actions/tag_actions';

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      return Object.assign({}, state, action.tags);
    case RECEIVE_TAG:
      return Object.assign({}, state, {[action.tag.id]: action.tag})
    case REMOVE_TAG:
      let newState = Object.assign({}, state);
      delete newState[action.tagId];
      return newState;
    case CLEAR_TAGS:
      return {};
    default:
      return state;
  };
};

export default tagsReducer;