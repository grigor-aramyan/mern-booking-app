import { combineReducers } from 'redux';
import countReducer from './countReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    count: countReducer,
    error: errorReducer,
    auth: authReducer
});