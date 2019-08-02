import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { 
  Container, 
  Header, 
  Title,
  Body, 
  Content, 
  Input,
  Picker,
  Icon,
  Left,
  Right,
  Button,
} from 'native-base';

import Colors from '../constants/Colors';

import ProductList from '../components/ProductList';
import UserHeader from '../components/UserHeader';

import { fetchProductsScreen } from '../store/actions/products';

const styles = StyleSheet.create({
  content: {
    backgroundColor: Colors.screenBackground
  },
  searchItem: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  searchInput: {
    borderStyle: 'solid',
    borderColor: Colors.wyngerGrey,
    borderRadius: 5,
    borderWidth: 1
  },
  picker: {
    width: undefined,
    marginVertical: 20,
  }
});

class Products extends React.Component {
  state = {
    selectedProduct: null
  }

  componentDidMount() {
    this.props.dispatch(fetchProductsScreen());
  }

  onSelectedProductValueChange = (value) => this.setState({ selectedProduct: value });

  navigateToDetailsPage = (path, item) => this.props.navigation.push(path, { item });

  renderListViews = () => {
    if (this.props.fetchingScreen) return <Text>Loading List Views...</Text>;

    if (!!this.props.listViews && this.props.listViews.constructor === Object) {
      return (
        <Picker.Item 
          key={'thelistview'}
          label={this.props.listViews.label}
          value={this.props.listViews.fullName}
        />  
      )
    }

    if (!!this.props.listViews && this.props.listViews.constructor === Array) {
      return this.props.listViews.map((listView, index) => (
        <Picker.Item 
          key={index}
          label={listView.label}
          value={listView.fullName}
        />
      ));
    }
  }
  
  render() {
    return (
      <Container style={styles.content}>
        <UserHeader />
        <Content style={styles.content}>
          <View style={styles.searchItem}>
            <Input 
              style={styles.searchInput}
              placeholder='Search Products Here...'
            />
          </View>
          <Picker
            mode='dropdown'
            iosIcon={<Icon name='arrow-down' />}
            style={styles.picker}
            textStyle={{ fontWeight: 'bold' }}
            itemTextStyle={{ fontWeight: 'bold' }}
            placeholder='Select A Listview'
            selectedValue={this.state.selectedProduct}
            onValueChange={this.onSelectedProductValueChange}
            renderHeader={(backAction) => (
              <Header>
                <Left>
                  <Button transparent onPress={backAction}>
                    <Icon name='arrow-back' />
                  </Button>
                </Left>
                <Body style={{ flex: 3 }}>
                  <Title>Select A Listview</Title>
                </Body>
                <Right />
              </Header>
            )}
          >
          {this.renderListViews()}
          </Picker>
          <ProductList 
            fetchingScreen={this.props.fetchingScreen}
            products={this.props.records}
            navigateToDetailsPage={this.navigateToDetailsPage}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  records: state.products.records,
  listViews: state.products.listViews,
  label: state.products.label,
  fetchingScreen: state.products.fetchingScreen,
  fetchScreenError: state.products.fetchScreenError,
  fetchingDetails: state.products.fetchingDetails,
  fetchingDetailsError: state.products.fetchingDetailsError,
  productId: state.products.productId,
  fields: state.products.fields,
  pricebookEntries: state.products.pricebookEntries
});

export default connect(mapStateToProps)(Products);
