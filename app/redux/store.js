import { combineReducers, createStore } from 'redux';
import authReducer from './authReducer';
import expenseReducer from './expenseReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  expense: expenseReducer
});

const store = createStore(rootReducer);

export default store;
