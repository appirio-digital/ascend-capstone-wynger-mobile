import { ACCOUNTS } from '../store/actionType';

export const fetchAllAccounts = () => {
  return async dispatch => {
    try {
      dispatch(setFetching(true));
      const res = await fetch('http://localhost:3000/accounts');
      const data = await res.json();
      console.log('data: ', data);
      dispatch(fetchAccountsSuccess(data));
      dispatch(setFetching(false));
    } catch (error) {
      console.log('fetchAllAccounts error: ', error);
      dispatch(fetchAccountsFailure(error));
      dispatch(setFetching(false));
    }
  }
}

const setFetching = (value) => ({
  type: ACCOUNTS.FETCHING_ACCOUNTS,
  payload: true
});

const fetchAccountsSuccess = (data) => ({
  type: ACCOUNTS.FETCH_ACCOUNTS_SUCCESS,
  payload: data
});

const fetchAccountsFailure = (data) => ({
  type: ACCOUNTS.FETCH_ACCOUNTS_FAILURE,
  payload: data
});