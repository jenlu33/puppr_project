import {RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS} from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_ALL_USERS:
      return Object.assign({}, state, action.users)
    default:
      return state;
  }
}

export default usersReducer;