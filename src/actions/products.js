import { PRODUCTS } from '../store/actionType';

export const fetchAllProducts = () => {
  return async dispatch => {
    try {
      dispatch(setFetching(true));
      const res = await fetch('http://localhost:3000/products');
      const data = await res.json();
      console.log('fetchAllProducts() data: ', data);
      dispatch(fetchProductsSuccess(data));
      dispatch(setFetching(false));
    } catch (error) {
      console.log('fetchAllProducts() error: ', error);
      dispatch(fetchProductsFailure(error));
      dispatch(setFetching(false));
    }
  }
}

const setFetching = (value) => ({
  type: PRODUCTS.FETCHING_PRODUCTS,
  payload: true
});

const fetchProductsSuccess = (data) => ({
  type: PRODUCTS.FETCH_PRODUCTS_SUCCESS,
  payload: data
});

const fetchProductsFailure = (error) => ({
  type: PRODUCTS.FETCH_PRODUCTS_FAILURE,
  payload: error
});