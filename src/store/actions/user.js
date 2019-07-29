import { USER } from '../actionType';

// Actions
export const loginUser = (username, passwordPlusToken) => {
  return (dispatch) => {
    dispatch(setIsAuthenticating(true));
    fetch(
      'http://172.16.7.84:3000/login', 
      { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, passwordPlusToken }),
      }
    )
    .then(raw => raw.json())
    .then(res => {
      dispatch(setAuthState(true));
      dispatch(setCurrentUser(res.data.user));
      dispatch(setAccessToken(res.data.accessToken));
      
      if (res.data.user.profileid === '00e3i000000tY4pAAE') 
        dispatch(setProfileType('SPORTS'));
      
      if (res.data.user.profileid === '00e3i000000tY4kAAE') 
        dispatch(setProfileType('MEDICAL'));
      
      dispatch(setIsAuthenticating(false));
    })
    .catch(error => {
      console.error('Error user login: ', error);
      dispatch(setAuthState(false));
      dispatch(setIsAuthenticating(false));
    });
  }
}

// Action Creators
const setAccessToken = (token) => ({
  type: USER.SET_ACCESS_TOKEN,
  payload: token,
});

const setIsAuthenticating = (value) => ({
  type: USER.SET_IS_AUTHENTICATING,
  payload: value
});

const setAuthState = (state) => ({
  type: USER.SET_AUTH_STATE,
  payload: state,
});

const setCurrentUser = (user) => ({
  type: USER.SET_CURRENT_USER,
  payload: user,
});

const setProfileType = (profileType) => ({
  type: USER.SET_PROFILE_TYPE,
  payload: profileType
});