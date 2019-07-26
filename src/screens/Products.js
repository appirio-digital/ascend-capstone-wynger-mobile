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
import { fakeProducts, fakeProductListViews, fakeUser } from "../utils";
import UserHeader from '../components/UserHeader';

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

  onSelectedProductValueChange = (value) => {
    this.setState({ selectedProduct: value });
  }

  navigateToDetailsPage = (product) => {
    this.props.navigation.push('ProductDetails');
  }
  
  render() {
    return (
      <Container style={styles.content}>
        <UserHeader/>
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
            products={fakeProducts}            
            navigateToDetailsPage={this.navigateToDetailsPage}
          />
        </Content>
      </Container>
    );
  }
}
