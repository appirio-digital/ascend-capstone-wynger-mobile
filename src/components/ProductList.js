import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { ListItem, Right, Left, Button, Icon } from 'native-base';

import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
    marginLeft: 0,
    paddingLeft: 15,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemIndustry: {
    fontSize: 16,
  },
  icon: {
    color: Colors.wyngerGrey
  }
});

export default class ProductList extends React.Component {
  keyExtractor = (item) => item.sfid;

  renderProduct = ({ item, index }) => (
    <ListItem style={styles.item}>
      <Left>
        <View>
          <Text style={styles.itemName}>{`${index + 1}.  ${item.name}`}</Text>
          <Text style={styles.itemIndustry}>{item.industry__c}</Text>
        </View>
      </Left>
      <Right>
        <Button transparent onPress={() => this.props.navigateToDetailsPage('ProductDetails', item)}>
          <Icon type='Ionicons' name='ios-arrow-forward' style={styles.icon} />
        </Button>
      </Right>
    </ListItem>
  );

  render() {
    if (this.props.fetchingScreen) return <Text>Loading Products...</Text>;

    return (
      <FlatList 
        data={this.props.products}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderProduct}
      />
    );
  }
}
