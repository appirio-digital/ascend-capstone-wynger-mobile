import produce from 'immer';

import { PRODUCTS } from '../actionType';

// initial state
let initialState = {
  data: [],
  fetching: false,
  fetchError: ''
};

// selectors
export const allProducts = (state) => {
  return state.products.data;
}

// reducer
const productsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch(action.type) {
      case PRODUCTS.FETCHING_PRODUCTS:
        draft.fetching = action.payload;
        return;
      case PRODUCTS.FETCH_PRODUCTS_SUCCESS:
        draft.data = action.payload;
        draft.fetching = false;
        return;
      case PRODUCTS.FETCH_PRODUCTS_FAILURE:
        draft.fetchError = action.payload;
        draft.fetching = false;
        return;
    }  
  });

export default productsReducer;