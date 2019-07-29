import produce from 'immer';

import { USER } from '../actionType';

// initial state
const initialState = {
  authenticationState: false,
  isAuthenticating: false,
  accessToken: '',
  currentUser: {},
  profileType: ''
};

// selectors

// reducer
const user = (state = initialState, action) =>
  produce(state, draft => {
    switch(action.type) {
      case USER.SET_AUTH_STATE:
        draft.authenticationState = action.payload;
        return;
      case USER.SET_IS_AUTHENTICATING:
        draft.isAuthenticating = action.payload;
        return;
      case USER.SET_ACCESS_TOKEN:
        draft.accessToken = action.payload;
        return;
      case USER.SET_CURRENT_USER:
        draft.currentUser = action.payload;
        return;
      case USER.SET_PROFILE_TYPE:
        draft.profileType = action.payload;
        return;
    }  
  });

export default user;