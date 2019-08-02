import produce from 'immer';

import { PRODUCTS } from '../actionType';

// initial state
let initialState = {
  // products screen state
  records: [],
  listViews: [],
  fetchingScreen: false,
  fetchingScreenError: '',

  // product details screen state
  fetchingDetails: false,
  fetchingDetailsError: '',
  productId: '',
  fields: [],
  pricebookEntries: []
};

// reducer
const products = (state = initialState, action) => produce(state, draft => {
  switch(action.type) {
    case PRODUCTS.FETCHING_PRODUCTS_SCREEN:
      draft.fetchingScreen = action.payload;
      return;
    case PRODUCTS.FETCH_PRODUCTS_SCREEN_SUCCESS:
      draft.records = action.payload.products;
      draft.listViews = action.payload.metadata.listViews;
      draft.label = action.payload.metadata.label;
      draft.fields = action.payload.metadata.fields;
      draft.fetchingScreen = false;
      return;
    case PRODUCTS.FETCH_PRODUCTS_SCREEN_FAILURE:
      draft.fetchingScreenError = action.payload;
      draft.fetchingScreen = false;
      return;
    case PRODUCTS.FETCHING_PRODUCT_DETAILS:
      draft.fetchingDetails = action.payload;
      return;
    case PRODUCTS.FETCH_PRODUCT_DETAILS_SUCCESS:
      draft.pricebookEntries = action.payload;
      draft.fetchingDetails = false;
      return;
    case PRODUCTS.FETCH_PRODUCTS_SCREEN_FAILURE:
      draft.fetchingDetailsError = action.payload;
      draft.fetchingDetails = false;
      return;
    case PRODUCTS.SET_CURRENT_PRODUCT:
      draft.productId = action.payload;
      return;
  }  
});

export default products;