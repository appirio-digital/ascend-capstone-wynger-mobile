import React from "react";
import { StyleSheet, View } from "react-native"
import {
  Container,
  Header,
  Title,
  Left,
  Right,
  Button,
  Body,
  Content,
  Picker,
  Input,
  Icon
} from "native-base";

import AccountList from '../components/AccountList'
import Colors from '../constants/Colors';
import { fakeAccounts, fakeAccountListViews, fakeUser } from "../utils";
import UserHeader from '../components/UserHeader'

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

export default class Accounts extends React.Component {

  state = {
    selectedAccount: fakeAccountListViews[0].value
  }

  onSelectedAccountValueChange = (value) => {
    this.setState({ selectedAccount: value });
  }

  navigateToDetailsPage = (account) => {
    this.props.navigation.navigate('AccountDetails');
  }

  render() {
    return (
      <Container>
        <UserHeader/>
        <Content style={styles.content}>
          <View style={styles.searchItem}>
            <Input 
              style={styles.searchInput}
              placeholder="Search Accounts Here..." 
            />
          </View>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={styles.picker}
            textStyle={{ fontWeight: 'bold' }}
            itemTextStyle={{ fontWeight: 'bold' }}
            selectedValue={this.state.selectedAccount}
            onValueChange={this.onSelectedAccountValueChange}
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
          {fakeAccountListViews.map((account, index) => {
            return (
              <Picker.Item 
                key={index}
                label={account.label} 
                value={account.value}
              />
            )
          })}
          </Picker>
          <AccountList 
            accounts={fakeAccounts} 
            navigateToDetailsPage={this.navigateToDetailsPage} 
          />
        </Content>
      </Container>
    );
  }
}

