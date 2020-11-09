import userReducer from './userReducer';
import requestReducer from './requestReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  request: requestReducer,
  users: userReducer
});

export default rootReducer