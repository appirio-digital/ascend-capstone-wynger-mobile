import { connect } from 'react-redux';

import ProductsScreen from '../screens/Products';

const mapStateToProps = (state) => ({
  products: state.products.data,
  fetchingProducts: state.products.fetching,
  fetchError: state.products.fetchError,
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(ProductsScreen);