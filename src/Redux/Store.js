import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './user/User';

const rootReducer = combineReducers({
  user: userReducer,
});

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

export default store;
