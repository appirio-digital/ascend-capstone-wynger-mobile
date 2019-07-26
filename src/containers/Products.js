import { connect } from 'react-redux';

import { fetchAllProducts } from '../store/actions/products';

import ProductsScreen from '../screens/Products';

const mapStateToProps = (state, ownProps) => ({
  products: state.products.data,
  fetchingAccount: state.products.fetching,
  fetchError: state.products.fetchError
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllProducts: dispatch(fetchAllProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsScreen);