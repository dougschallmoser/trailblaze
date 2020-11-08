import userReducer from './userReducer';
import requestReducer from './requestReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  requests: requestReducer,
  user: userReducer
});

