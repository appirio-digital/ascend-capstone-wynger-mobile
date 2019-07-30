import { CONTACTS } from '../actionType';
import DotEnv from '../../constants/DotEnv';

export const fetchAllContacts = () => {
  return (dispatch) => {
    dispatch(setFetching(true));
    fetch(`${DotEnv.API.ENDPOINT}/contacts`, { method: 'GET' })
      .then(response => response.json())
      .then(contactsData => dispatch(fetchContactsSuccess(contactsData)))
      .catch(error => dispatch(fetchContactsFailure(error)));  
  }
}

const setFetching = (value) => ({
  type: CONTACTS.FETCHING_CONTACTS,
  payload: value
});

const fetchContactsSuccess = (contactsData) => ({
  type: CONTACTS.FETCH_CONTACTS_SUCCESS,
  payload: contactsData.data
});

const fetchContactsFailure = (error) => ({
  type: CONTACTS.FETCH_CONTACTS_FAILURE,
  payload: error
});