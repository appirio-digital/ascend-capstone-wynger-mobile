import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { ListItem, Right, Left, Body, Button } from 'native-base';

const styles = StyleSheet.create({

})

export default class ProductList extends React.Component {
  
  keyExtractor = (item, index) => item.id;

  renderProduct = ({ item, index, separators }) => (
    <ListItem style={{ borderWidth: 1, borderStyle: 'solid', borderColor: 'red', marginRight: 15, marginBottom: 10,  }}>
      <Left>
        <Text>{index + 1}. </Text>
        <Text>{item.name}</Text>
      </Left>
      <Body><Text>{item.industry}</Text></Body>
      <Right>
        <Button transparent>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
  
  render() {
    console.log('Hello from ProductList')
    console.log(JSON.stringify(this.props.products));
    return (
      <FlatList 
        data={this.props.products}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderProduct}
      />
    );
  }
}
