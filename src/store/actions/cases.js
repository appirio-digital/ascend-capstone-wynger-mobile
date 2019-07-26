import { CASES } from '../actionType';

export const fetchAllCases = () => {
  return (dispatch) => {
    dispatch(setFetching(true));
    fetch('http://172.16.7.84:3000/cases', { method: 'GET' })
      .then(response => response.json())
      .then(casesData => dispatch(fetchCasesSuccess(casesData)))
      .catch(error => dispatch(fetchCasesFailure(error)));  
  }
}

const setFetching = (value) => ({
  type: CASES.FETCHING_CASES,
  payload: value
});

const fetchCasesSuccess = (casesData) => ({
  type: CASES.FETCH_CASES_SUCCESS,
  payload: casesData.data
});

const fetchCasesFailure = (error) => ({
  type: CASES.FETCH_CASES_FAILURE,
  payload: error
});