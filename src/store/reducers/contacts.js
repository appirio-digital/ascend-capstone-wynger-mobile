import produce from 'immer';

import { CONTACTS } from '../actionType';

// initial state
let initialState = {
  data: [],
  fetching: false,
  fetchError: ''
};

// selectors
export const allContacts = (state) => {
  return state.contacts.data;
}

// reducer
const contactsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch(action.type) {
      case CONTACTS.FETCHING_CONTACTS:
        draft.fetching = action.payload;
      case CONTACTS.FETCH_CONTACTS_SUCCESS:
        draft.data = action.payload;
        draft.fetching = false;
      case CONTACTS.FETCH_CONTACTS_FAILURE:
        draft.fetchError = action.payload;
        draft.fetching = false;
    }  
  });

export default contactsReducer;