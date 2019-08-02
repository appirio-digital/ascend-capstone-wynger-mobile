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

function ProductList(props) {
  const keyExtractor = (item) => item.sfid;

  const renderProduct = ({ item, index }) => (
    <ListItem style={styles.item}>
      <Left>
        <View>
          <Text style={styles.itemName}>{`${index + 1}.  ${item.name}`}</Text>
          {item.industry__c !== null ? <Text style={styles.itemIndustry}>{item.industry__c}</Text> : null}
        </View>
      </Left>
      <Right>
        <Button transparent onPress={() => props.navigateToDetailsPage('ProductDetails', item)}>
          <Icon type='Ionicons' name='ios-arrow-forward' style={styles.icon} />
        </Button>
      </Right>
    </ListItem>
  );

  if (props.fetchingScreen) {
    return <Text style={{ paddingLeft: 15, fontSize: 20, fontWeight: 'bold' }}>Loading Products...</Text>;
  }

  return (
    <FlatList 
      data={props.products}
      keyExtractor={keyExtractor}
      renderItem={renderProduct}
    />
  );
}

export default ProductList;
