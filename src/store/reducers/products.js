import produce from 'immer';

import { PRODUCTS } from '../actionType';

// initial state
let initialState = {
  data: null,
  fetching: false,
  fetchError: null
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
      case PRODUCTS.FETCH_PRODUCTS_SUCCESS:
        draft.data = action.payload;
      case PRODUCTS.FETCH_PRODUCTS_FAILURE:
        draft.fetchError = action.payload
    }  
  });

export default productsReducer;