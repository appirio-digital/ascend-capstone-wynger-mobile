import { combineReducers } from 'redux';

import accounts from './accounts';
import products from './products';
import user from './user';

export default combineReducers({
  accounts,
  products,
  user,
});
