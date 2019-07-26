import { CONTACTS } from '../actionType';

export const fetchAllContacts = () => {
  return (dispatch) => {
    dispatch(setFetching(true));
    fetch('http://172.16.7.84:3000/contacts', { method: 'GET' })
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