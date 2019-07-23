import React from "react";
import { StyleSheet } from "react-native"
import { 
  Container, 
  Header, 
  Title, 
  Button, 
  Body, 
  Content,
  Text, 
  Input,
  Item,
  Picker
} from "native-base";

import ProductList from '../components/products/ProductList';
import Colors from '../constants/Colors';

const ProductScreen = {
  listViews: [
    { id: 'sd09h87setr8h7', label: 'All Products', value: 'All' },
    { id: 'sd0a98fr7garf', label: 'My Products', value: 'My' },
    { id: 'sdas9fg788asfgdtr8h7', label: 'Midwest Products', value: 'Midwest' },
    { id: 'sd09ha9sfg8a7rg7', label: 'Eastern Products', value: 'Eastern' },
    { id: 'sdasf9g7ayftr8h7', label: 'Southern Products', value: 'Southern' },
  ], 
  products: [
    { id: 'sd09h87setr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'sd0a98fr7garf', name: 'Hockey Kit 2', industry: 'Sports' },
    { id: 'sdas9fg788asfgdtr8h7', name: 'Hockey Kit 3', industry: 'Sports' },
    { id: 'sd09ha9sfg8a7rg7', name: 'Soccer Kit 1', industry: 'Sports' },
    { id: 'sdasf9g7ayftr8h7', name: 'Soccer Kit 2', industry: 'Sports' },
    { id: 'sd09h87setas9f8g7as9', name: 'Soccer Kit 3', industry: 'Sports' },
    { id: 'as9dgf7as9dsetr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'asf9gaf9getr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'aslifguayregisetr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'sd09h8adf9g8a8frgh7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'sd09h8ad9fg8ad7setr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'sd09hasf0g9a87setr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'sd09afgafrgh87setr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'sd0adf9g8a89fg9h87setr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'sd09ha9fgafg987setr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'sd09a98rdgafd9g8h87setr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'sd09hafg09a0fd87setr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'sd09hafg8a9f8g87setr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'sd09h87a0fg9asetr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'afg98afdsd09h87setr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'sd09h87as89fgas9setr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'sd09h87saf89gafgetr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'sd09h8adf9g8adf7setr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
    { id: 'sd09h8ad0f9gadfg7setr8h7', name: 'Hockey Kit 1', industry: 'Sports' },
  ]
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.screenBackground
  },
  searchItem: {
    marginTop: 10,
    marginLeft: 2,
    marginRight: 2,
  },
  searchInput: {
    borderStyle: 'solid',
    borderColor: Colors.wyngerGrey,
    borderRadius: 5,
    borderWidth: 1
  }
})

export default class Products extends React.Component {
  state = {
    selectedProduct: ProductScreen.listViews[0].value
  }

  onSelectedProductValueChange = (value) => {
    this.setState({ selectedProduct: value });
  }
  
  render() {
    return (
      <Container >
        <Header>
          <Body>
            <Title>Products</Title>
          </Body>
        </Header>
        <Content style={styles.container}>
          <Item style={styles.searchItem}>
            <Input 
              style={styles.searchInput}
              placeholder="Search Products Here..." 
            />
            <Button>
              <Text>Search</Text>
            </Button>
          </Item>
          <Picker
            style={{ backgroundColor: 'yellow' }}
            mode="dropdown"
            selectedValue={this.state.selectedProduct}
            onValueChange={this.onSelectedProductValueChange}
          >
          {ProductScreen.listViews.map((list, index) => {
            return (
              <Picker.Item key={index} label={list.label} value={list.value} />
            )
          })}
          </Picker>
          <ProductList products={ProductScreen.products} />
        </Content>
      </Container>
    );
  }
}
