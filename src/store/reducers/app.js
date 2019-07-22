import { handleActions } from 'redux-actions';
import { APP } from '../actionType';

const initialState = {
  loading: false,
};

export default handleActions({
  [APP.SET_LOADING]: function(state = initialState, action) {
    return { loading: action.payload };
  },
}, initialState);
