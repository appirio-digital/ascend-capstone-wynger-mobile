import produce from 'immer';

import { CASES } from '../actionType';

// initial state
let initialState = {
  data: null,
  fetching: false,
  fetchError: null
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
      case CASES.FETCH_CASES_SUCCESS:
        draft.data = action.payload;
      case CASES.FETCH_CASES_FAILURE:
        draft.fetchError = action.payload
    }  
  });

export default casesReducer;