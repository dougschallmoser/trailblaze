import userReducer from './userReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentUser: userReducer,
  search: searchReducer
});

export default rootReducer