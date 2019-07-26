import { connect } from 'react-redux';

import AccountsScreen from '../screens/Accounts';

const mapStateToProps = (state) => ({
  accounts: state.accounts.data,
  fetchingAccounts: state.accounts.fetching,
  fetchError: state.accounts.fetchError
});

export default connect(mapStateToProps)(AccountsScreen);