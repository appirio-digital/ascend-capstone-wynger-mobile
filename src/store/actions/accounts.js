import { ACCOUNTS } from '../actionType';
import DotEnv from '../../constants/DotEnv';

export const fetchAccountsScreen = () => (dispatch) => {
  dispatch(setFetchingAccountsScreen(true));
  fetch(`${DotEnv.API.ENDPOINT}/accounts_screen`, { method: 'GET' })
    .then(res => res.json())
    .then(json => dispatch(fetchAccountsSuccess(json)))
    .catch(error => dispatch(fetchAccountsFailure(error)));
}

const setFetchingAccountsScreen = (value) => ({
  type: ACCOUNTS.FETCHING_ACCOUNTS_SCREEN,
  payload: value
});

const fetchAccountsSuccess = (accountsData) => ({
  type: ACCOUNTS.FETCH_ACCOUNTS_SCREEN_SUCCESS,
  payload: accountsData.data,
});

const fetchAccountsFailure = (error) => ({
  type: ACCOUNTS.FETCH_ACCOUNTS_SCREEN_FAILURE,
  payload: error
});

export const fetchAccountDetailsScreen = (accountId) => (dispatch) => {
  dispatch(setFetchingAccountDetails(true));
  fetch(`${DotEnv.API.ENDPOINT}/account_details_screen/${accountId}`, { method: 'GET' })
    .then(res => res.json())
    .then(json => dispatch(fetchAccountDetailsSuccess(json)))
    .catch(error => dispatch(fetchAccountDetailsFailure(error)));
}

const setFetchingAccountDetails = (value) => ({
  type: ACCOUNTS.FETCHING_ACCOUNT_DETAILS,
  payload: value,
});

const fetchAccountDetailsSuccess = (accountDetailsData) => ({
  type: ACCOUNTS.FETCH_ACCOUNT_DETAILS_SUCCESS,
  payload: accountDetailsData.data,
});

const fetchAccountDetailsFailure = (error) => ({
  type: ACCOUNTS.FETCH_ACCOUNT_DETAILS_FAILURE,
  payload: error
});

export const setFiltering = (value) => ({
  type: ACCOUNTS.SET_FILTERING,
  payload: value
});

export const filterRecords = (searchText) => (dispatch, getState) => {
  let state = getState();
  let records = state.accounts.records;
  let filteredRecords = records.filter(rec => rec.name.includes(searchText));
  dispatch(setFilteredRecords(filteredRecords));
}

const setFilteredRecords = (filteredRecords) => ({
  type: ACCOUNTS.SET_FILTERED_RECORDS,
  payload: filterRecords
});