import produce from 'immer';

import { APP } from '../actionType';

// initial state
let initialState = {
  loading: true
};

// selectors
export const isLoading = (state) => {
  return state.app.loading;
}

// reducer
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch(action.type) {
      case APP.SET_LOADING:
        draft.loading = action.payload;
        return;
    }  
  });

export default appReducer;