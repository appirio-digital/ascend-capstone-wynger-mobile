import { PRODUCTS } from '../actionType';
import DotEnv from '../../constants/DotEnv';

export const fetchProductsScreen = () => (dispatch) => {
  dispatch(setFetchingProductsScreen(true));
  fetch(`${DotEnv.API.ENDPOINT}/products_screen`, { method: 'GET' })
    .then(res => res.json())
    .then(json => dispatch(fetchProductsScreenSuccess(json)))
    .catch(error => dispatch(fetchProductsScreenFailure(error)));
}

const setFetchingProductsScreen = (value) => ({
  type: PRODUCTS.FETCHING_PRODUCTS_SCREEN,
  payload: value
});

const fetchProductsScreenSuccess = (productsData) => ({
  type: PRODUCTS.FETCH_PRODUCTS_SCREEN_SUCCESS,
  payload: productsData.data,
});

const fetchProductsScreenFailure = (error) => ({
  type: PRODUCTS.FETCH_PRODUCTS_SCREEN_FAILURE,
  payload: error
});

export const fetchProductDetailsScreen = (productId) => (dispatch) => {
  dispatch(setFetchingProductDetails(true));
  fetch(`${DotEnv.API.ENDPOINT}/product_details_screen/${productId}`, { method: 'GET' })
    .then(res => res.json())
    .then(json => dispatch(fetchProductDetailsSuccess(json)))
    .then(error => dispatch(fetchProductDetailsFailure(error)));
}

const setFetchingProductDetails = (value) => ({
  type: PRODUCTS.FETCHING_PRODUCT_DETAILS,
  payload: value,
});

const fetchProductDetailsSuccess = (productDetails) => ({
  type: PRODUCTS.FETCH_PRODUCT_DETAILS_SUCCESS,
  payload: productDetails.data,
});

const fetchProductDetailsFailure = (error) => ({
  type: PRODUCTS.FETCH_PRODUCT_DETAILS_FAILURE,
  payload: error,
});