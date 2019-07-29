import { combineReducers } from 'redux';

import accounts from './accounts';
import app from './app';
import cases from './cases';
import contacts from './contacts';
import products from './products';
import user from './user';

export default combineReducers({
  accounts,
  app,
  cases,
  contacts,
  products,
  user,
});
