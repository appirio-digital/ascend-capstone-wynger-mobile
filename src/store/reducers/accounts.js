import produce from 'immer';

import { ACCOUNTS } from '../actionType';

// initial state
const initialState = {
  data: null,
  fetching: false,
  fetchError: null
};

// selectors
export const allAccounts = (state) => {
  return state.accounts.data;
}

// reducer
const accountsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch(action.type) {
      case ACCOUNTS.FETCHING_ACCOUNTS:
        draft.fetching = action.payload;
      case ACCOUNTS.FETCH_ACCOUNTS_SUCCESS:
        draft.data = action.payload;
      case ACCOUNTS.FETCH_ACCOUNTS_FAILURE:
        draft.fetchError = action.payload
    }  
  });

export default accountsReducer;