import { CONTACTS } from '../store/actionType';

export const fetchAllContacts = () => {
  return async dispatch => {
    try {
      dispatch(setFetching(true));
      const res = await fetch('http://localhost:3000/contacts');
      const data = await res.json();
      console.log('fetchAllCases data: ', data);
      dispatch(fetchContactsSuccess(data));
      dispatch(setFetching(false));
    } catch (error) {
      console.log('fetchAllCases error: ', error);
      dispatch(fetchCasesFailure(error));
      dispatch(setFetching(false));
    }
  }
}

const setFetching = (value) => ({
  type: CONTACTS.FETCHING_CONTACTS,
  payload: true
});

const fetchContactsSuccess = (data) => ({
  type: CONTACTS.FETCH_CONTACTS_SUCCESS,
  payload: data
});

const fetchContactsFailure = (data) => ({
  type: CONTACTS.FETCH_CONTACTS_FAILURE,
  payload: data
});