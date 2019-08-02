import produce from 'immer';

import { ACCOUNTS } from '../actionType';

// initial state
let initialState = {
  // accounts screen state
  records: [],
  listViews: [],
  label: '',
  fetchingScreen: false,
  fetchScreenError: '',

  // account details screen state
  fetchingDetails: false,
  fetchingDetailsError: '',
  accountId: '',
  fields: [],
  accountCases: [],
  accountContacts: [],
  accountOps: []
};

// reducer
const accounts = (state = initialState, action) =>
  produce(state, draft => {
    switch(action.type) {
      case ACCOUNTS.FETCHING_ACCOUNTS_SCREEN:
        draft.fetchingScreen = action.payload;
        return;
      case ACCOUNTS.FETCH_ACCOUNTS_SCREEN_SUCCESS:
        draft.records = action.payload.accounts;
        draft.listViews = action.payload.metadata.listViews;
        draft.label = action.payload.metadata.label;
        draft.fields = action.payload.metadata.fields;
        draft.fetchingScreen = false;
        return;
      case ACCOUNTS.FETCH_ACCOUNTS_SCREEN_FAILURE:
        draft.fetchScreenError = action.payload
        draft.fetchingScreen = false;
        return;
      case ACCOUNTS.FETCHING_ACCOUNT_DETAILS:
        draft.fetchingDetails = action.payload;
        return;
      case ACCOUNTS.FETCH_ACCOUNT_DETAILS_SUCCESS:
        draft.accountCases = action.payload.cases;
        draft.accountContacts = action.payload.contacts;
        draft.accountOps = action.payload.opportunities;
        draft.fetchingDetails = false;
        return;
      case ACCOUNTS.FETCH_ACCOUNT_DETAILS_FAILURE:
        draft.fetchingDetailsError = action.payload;
        draft.fetchingDetails = false;
        return;
      case ACCOUNTS.SET_CURRENT_ACCOUNT:
        draft.accountId = action.payload;
        return;
    }  
  });

export default accounts;