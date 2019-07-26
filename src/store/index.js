import { createStore as _createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// create application redux store
function createStore() {
  const middleware = applyMiddleware(thunk);
  let store = _createStore(rootReducer, middleware);
  return store;
}

export default {
  createStore
}
