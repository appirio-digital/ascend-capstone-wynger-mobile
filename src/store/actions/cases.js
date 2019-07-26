import { CASES } from '../actionType';

export const fetchAllCases = () => {
  return async dispatch => {
    try {
      dispatch(setFetching(true));
      const res = await fetch('http://localhost:3000/cases');
      const data = await res.json();
      console.log('fetchAllCases data: ', data);
      dispatch(fetchCasesSuccess(data));
      dispatch(setFetching(false));
    } catch (error) {
      console.log('fetchAllCases error: ', error);
      dispatch(fetchCasesFailure(error));
      dispatch(setFetching(false));
    }
  }
}

const setFetching = (value) => ({
  type: CASES.FETCHING_CASES,
  payload: true
});

const fetchCasesSuccess = (data) => ({
  type: CASES.FETCH_CASES_SUCCESS,
  payload: data
});

const fetchCasesFailure = (data) => ({
  type: CASES.FETCH_CASES_FAILURE,
  payload: data
});