import userReducer from './userReducer';
import searchReducer from './searchReducer';
import errorReducer from './errorReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentUser: userReducer,
  search: searchReducer,
  errors: errorReducer
});

export default rootReducer