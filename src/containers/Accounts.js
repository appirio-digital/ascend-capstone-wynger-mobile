import { connect } from 'react-redux';

import AccountsScreen from '../screens/Accounts';

const mapStateToProps = (state) => ({
  accounts: state.accounts.data,
  fetchingAccounts: state.accounts.fetching,
  fetchError: state.accounts.fetchError,
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(AccountsScreen);