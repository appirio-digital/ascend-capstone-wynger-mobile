// import { oauth, net } from "react-native-force";
import { USER } from '../actionType';
import { ACTION_CREATORS as AppActions } from './app';

// import {
//     function1,
//     function2,
//     function3,
//     function4,
//     functionN,
// } from '../../services/salesforce'

export const ACTION_CREATORS = {
  doLogin: function(session) {
    return async function(dispatch) {
      // turn loading animation on
      dispatch(AppActions.loading());

      // login user and get information
      const identity = {};
      const accessConfig = {};

      if (session) {
        // update user state
        dispatch({
          type: USER.LOGIN,
          payload: {
            session,
            identity,
            accessConfig,
          },
        });
      }

      // turn loading animation off
      dispatch(AppActions.loading(false));
    };
  },
  doLogout: function () {
    return async function(dispatch) {
      // turn loading animation on
      dispatch(AppActions.loading());

      // logout user
      // await oauth.logout()

      // update user state
      dispatch({
        type: USER.LOGOUT,
        payload: {},
      });

      // turn loading animation off
      dispatch(AppActions.loading(false));
    };
  },
};
