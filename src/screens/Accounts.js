import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
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
} from 'native-base';

import Colors from '../constants/Colors';

import AccountList from '../components/AccountList'
import UserHeader from '../components/UserHeader'

import { fetchAccountsScreen, setFiltering, filterRecords } from '../store/actions/accounts';

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

class Accounts extends React.Component {

  state = {
    selectedAccount: null,
    searchText: '',
  }

  componentDidMount() {
    this.props.dispatch(fetchAccountsScreen());
  }

  onSelectedAccountValueChange = (selectedAccount) => this.setState({ selectedAccount });

  navigateToDetailsPage = (path, item) => this.props.navigation.push(path, { item });

  renderListViews = () => {
    if (this.props.fetchingScreen) return <Text>Loading List Views...</Text>;
    
    return this.props.listViews.map((listView, index) => (
      <Picker.Item 
        key={index}
        label={listView.label} 
        value={listView.fullName}
      />
    ));
  }

  onSearchChange = (searchText) => {
    if (searchText === '') {
      this.props.dispatch(setFiltering(false));
      this.setState({ searchText });
      return;
    }

    this.setState({ searchText });
    this.props.dispatch(setFiltering(true));
    this.props.dispatch(filterRecords(searchText));
  }

  render() {
    return (
      <Container>
        <UserHeader />
        <Content style={styles.content}>
          <View style={styles.searchItem}>
            <Input 
              style={styles.searchInput}
              placeholder='Search Accounts Here...'
              // value={this.state.searchText}
              // onChangeText={this.onSearchChange}
            />
          </View>
          <Picker
            mode='dropdown'
            iosIcon={<Icon name='arrow-down' />}
            style={styles.picker}
            textStyle={{ fontWeight: 'bold' }}
            itemTextStyle={{ fontWeight: 'bold' }}
            placeholder='Select A Listview'
            selectedValue={this.state.selectedAccount}
            onValueChange={this.onSelectedAccountValueChange}
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
          <AccountList 
            fetchingAccounts={this.props.fetchingScreen}
            accounts={this.props.records}
            navigateToDetailsPage={this.navigateToDetailsPage} 
          />
        </Content>
      </Container>
    );
  }
};

const mapStateToProps = (state) => ({
  records: state.accounts.records,
  listViews: state.accounts.listViews,
  label: state.accounts.label,
  fetchingScreen: state.accounts.fetchingScreen,
  fetchScreenError: state.accounts.fetchScreenError,
  filtering: state.accounts.filtering,
  filteredRecords: state.accounts.filteredRecords,
  fetchingDetails: state.accounts.fetchingDetails,
  fetchingDetailsError: state.accounts.fetchingDetailsError,
  accountId: state.accounts.accountId,
  fields: state.accounts.fields,
  accountCases: state.accounts.accountCases,
  accountContacts: state.accounts.accountContacts,
  accountOps: state.accounts.accountOps
});

export default connect(mapStateToProps)(Accounts);
