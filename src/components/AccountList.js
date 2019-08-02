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
    fontWeight: 'bold',
  },
  itemIndustry: {
    fontSize: 16,
    marginTop: 5
  }
});

function AccountList(props) {
  const keyExtractor = (item) => item.sfid;
  
  const renderAccount = ({ item, index }) => (
    <ListItem style={styles.item}>
      <Left>
        <View>
          <Text style={styles.itemName}>{`${index + 1}.  ${item.name || ''}`}</Text>
          {item.industries__c !== null ? <Text style={styles.itemIndustry}>{item.industries__c }</Text> : null}
        </View>
      </Left>
      <Right>
        <Button transparent onPress={() => props.navigateToDetailsPage('AccountDetails', item)}>
          <Icon type="Ionicons" name="ios-arrow-forward" style={{ color: Colors.wyngerGrey }} />
        </Button>
      </Right>
    </ListItem>
  );

  if (props.fetchingAccounts) {
    return <Text style={{ paddingLeft: 15, fontSize: 20, fontWeight: 'bold' }}>Loading Accounts...</Text>;
  }

  return (
    <FlatList 
      data={props.accounts}
      keyExtractor={keyExtractor}
      renderItem={renderAccount}
    />
  );
}

export default AccountList
