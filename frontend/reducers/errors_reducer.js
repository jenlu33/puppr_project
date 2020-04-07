import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import photoErrorsReducer from './photo_errors_reducer';
import commentErrorsReducer from './comment_errors_reducer';

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  photoErrors: photoErrorsReducer,
  commentErrors: commentErrorsReducer
});

export default errorsReducer;