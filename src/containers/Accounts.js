import { connect } from 'react-redux';

import { fetchAllAccounts } from '../actions/accounts';

import AccountsScreen from '../screens/Accounts';

const mapStateToProps = (state, ownProps) => ({
  accounts: state.accounts.data,
  fetchingAccount: state.accounts.fetching,
  fetchError: state.accounts.fetchError
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllAccounts: dispatch(fetchAllAccounts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsScreen);