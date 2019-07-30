import { ACCOUNTS } from '../actionType';
import DotEnv from '../../constants/DotEnv';

export const fetchAllAccounts = () => {
  return (dispatch) => {
    dispatch(setFetching(true));
    fetch(`${DotEnv.API.ENDPOINT}/accounts`, { method: 'GET' })
      .then(response => response.json())
      .then(accountsData => dispatch(fetchAccountsSuccess(accountsData)))
      .catch(error => dispatch(fetchAccountsFailure(error)));
  }
}

const setFetching = (value) => ({
  type: ACCOUNTS.FETCHING_ACCOUNTS,
  payload: value
});

const fetchAccountsSuccess = (accountsData) => ({
  type: ACCOUNTS.FETCH_ACCOUNTS_SUCCESS,
  payload: accountsData.data,
});

const fetchAccountsFailure = (error) => ({
  type: ACCOUNTS.FETCH_ACCOUNTS_FAILURE,
  payload: error
});