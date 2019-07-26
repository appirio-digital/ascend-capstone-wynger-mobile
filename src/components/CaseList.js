import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { ListItem, Right, Left, Button, Icon } from 'native-base';

import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
    marginLeft: 0,
    paddingLeft: 15,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.30,
    // shadowRadius: 4.65,
    // elevation: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemIndustry: {
    fontSize: 16,
  }
})
export default class CaseList extends React.Component {
  
  keyExtractor = (item) => item.id;

  renderCase = ({ item, index }) => (
    <ListItem style={styles.item}>
      <Left>
        <View>
          <Text style={styles.itemName}>{index + 1}.  {item.id}</Text>
          <Text style={styles.itemIndustry}>{item.caseReason}</Text>
        </View>
      </Left>
      <Right>
        <Text>{item.caseStatus}</Text>
        <Button transparent onPress={() => this.props.navigateToDetailsPage(item)}>
          <Icon type="Ionicons" name="ios-arrow-forward" style={{ color: Colors.wyngerGrey }} />
        </Button>
      </Right>
    </ListItem>
  );
  
  render() {
    return (
      <FlatList 
        data={this.props.accounts}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderCase}
      />
    );
  }
}