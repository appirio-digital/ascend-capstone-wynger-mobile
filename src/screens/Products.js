import React from "react";
import { StyleSheet, View } from "react-native"
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
} from "native-base";

import ProductList from '../components/ProductList';
import Colors from '../constants/Colors';
import { fakeProductListViews } from "../utils";

import UserHeader from '../components/UserHeader';

import { fetchAllProducts } from '../store/actions/products';
import { fetchAllCases } from '../store/actions/cases';

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

export default class Products extends React.Component {
  state = {
    selectedProduct: fakeProductListViews[0].value
  }

  componentDidMount() {
    this.props.dispatch(fetchAllProducts());
    this.props.dispatch(fetchAllCases());
  }

  onSelectedProductValueChange = (value) => {
    this.setState({ selectedProduct: value });
  }

  navigateToDetailsPage = (item) => {
    this.props.navigation.push('ProductDetails', { item });
  }
  
  render() {
    return (
      <Container style={styles.content}>
        <UserHeader user={this.props.currentUser} />
        <Content style={styles.content}>
          <View style={styles.searchItem}>
            <Input 
              style={styles.searchInput}
              placeholder="Search Products Here..." 
            />
          </View>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={styles.picker}
            textStyle={{ fontWeight: 'bold' }}
            itemTextStyle={{ fontWeight: 'bold' }}
            selectedValue={this.state.selectedProduct}
            onValueChange={this.onSelectedProductValueChange}
            renderHeader={(backAction) => (
              <Header>
                <Left>
                  <Button transparent onPress={backAction}>
                    <Icon name="arrow-back" />
                  </Button>
                </Left>
                <Body style={{ flex: 3 }}>
                  <Title>Choose A Listview</Title>
                </Body>
                <Right />
              </Header>
            )}
          >
          {fakeProductListViews.map((list, index) => {
            return (
              <Picker.Item 
                key={index}
                label={list.label} 
                value={list.value}
              />
            )
          })}
          </Picker>
          <ProductList 
            fetchingProducts={this.props.fetchingProducts}
            products={this.props.products}            
            navigateToDetailsPage={this.navigateToDetailsPage}
          />
        </Content>
      </Container>
    );
  }
}
