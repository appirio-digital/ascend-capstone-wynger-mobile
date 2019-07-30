import { PRODUCTS } from '../actionType';
import DotEnv from '../../constants/DotEnv';

export const fetchAllProducts = () => {
  return (dispatch) => {
    dispatch(setFetching(true));
    fetch(`${DotEnv.API.ENDPOINT}/products`, { method: 'GET' })
      .then(response => response.json())
      .then(productsData => dispatch(fetchProductsSuccess(productsData)))
      .catch(error => dispatch(fetchProductsFailure(error)));
  }
}

const setFetching = (value) => ({
  type: PRODUCTS.FETCHING_PRODUCTS,
  payload: true
});

const fetchProductsSuccess = (productsData) => ({
  type: PRODUCTS.FETCH_PRODUCTS_SUCCESS,
  payload: productsData.data
});

const fetchProductsFailure = (error) => ({
  type: PRODUCTS.FETCH_PRODUCTS_FAILURE,
  payload: error
});