import userReducer from './userReducer';
import requestReducer from './requestReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  requests: requestReducer,
  user: userReducer
});

export default rootReducer