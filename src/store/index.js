import { createStore as _createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

// apply middleware
const middleware = applyMiddleware(thunk, createLogger());

// create application redux store
export default function createStore(intialState = {}) {
  const enhancers = composeWithDevTools(middleware);
  const store = _createStore(rootReducer, intialState, enhancers);
  return store;
}
