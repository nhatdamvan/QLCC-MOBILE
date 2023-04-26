import {combineReducers} from '@reduxjs/toolkit';
import {userReducer} from './userReducer';
import {commonReducer} from './commonReducer';

const allReducers = combineReducers({
  userReducer,
  commonReducer,
});

export default allReducers;
