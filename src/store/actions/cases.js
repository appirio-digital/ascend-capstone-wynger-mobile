import { CASES } from '../actionType';
import DotEnv from '../../constants/DotEnv';

export const fetchAllCases = () => {
  return (dispatch) => {
    dispatch(setFetching(true));
    fetch(`${DotEnv.API.ENDPOINT}/cases`, { method: 'GET' })
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