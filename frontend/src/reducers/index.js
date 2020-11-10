import userReducer from './userReducer';
import requestReducer from './requestReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  request: requestReducer,
  users: userReducer,
  search: searchReducer
});

export default rootReducer