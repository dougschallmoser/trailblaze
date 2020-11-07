// import usersReducer from './usersReducer';
import requestsReducer from './requestsReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  requests: requestsReducer
  // users: usersReducer
});

