import { ACCOUNTS } from '../actionType';

export const fetchAllAccounts = () => {
  return (dispatch) => {
    dispatch(setFetching(true));
    fetch('http://172.16.7.84:3000/accounts', { method: 'GET' })
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