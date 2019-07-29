import produce from 'immer';

import { CASES } from '../actionType';

// initial state
let initialState = {
  data: [],
  fetching: false,
  fetchError: ''
};

// selectors
export const allCases = (state) => {
  return state.cases.data;
}

// reducer
const casesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch(action.type) {
      case CASES.FETCHING_CASES:
        draft.fetching = action.payload;
        return;
      case CASES.FETCH_CASES_SUCCESS:
        draft.data = action.payload;
        draft.fetching = false;
        return;
      case CASES.FETCH_CASES_FAILURE:
        draft.fetchError = action.payload
        draft.fetching = false;
        return;
    }  
  });

export default casesReducer;