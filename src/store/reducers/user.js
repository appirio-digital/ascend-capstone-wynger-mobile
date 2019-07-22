import { handleActions } from 'redux-actions';
import { USER } from '../actionType';

const initialState = {
  loggedIn: false,
  session: {},
  identity: {},
};

export default handleActions({
  [USER.LOGIN]: function(state = initialState, action) {
    const { session, identity, accessConfig } = action.payload;
    console.log('Config object: ', accessConfig);
    return {
      loggedIn: true,
      session,
      identity,
      accessConfig,
    };
  },
  [USER.LOGOUT]: function(state = initialState, action) {
    return {
      loggedIn: false,
      session: {},
      identity: {},
    };
  },
}, initialState);
