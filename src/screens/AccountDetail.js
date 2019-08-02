import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { 
  Container,
  Body,
  Content,
  Accordion,
  Header,
  Left,
  Right,
  Button,
  Icon,
  ListItem
} from 'native-base';

import RecordField from '../components/RecordField';

import Colors from '../constants/Colors';

import { fetchAccountDetailsScreen } from '../store/actions/accounts';

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.wyngerRed,
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold'
  },
  headerSubtitle: {
    color: 'white'
  },
  content: {
    backgroundColor: Colors.screenBackground
  },
  accordionHeader: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItem: { 
    marginLeft: 0, 
    paddingLeft: 15 
  },
});

class AccountDetail extends React.Component {

  componentDidMount() {
    const { item } = this.props.navigation.state.params;
    this.props.dispatch(fetchAccountDetailsScreen(item.sfid));
  }

  renderAccordion = () => {
    if (this.props.fetchingDetails) {
      return <Text>Loading...</Text>;
    }
    return (
      <Accordion
        dataArray={[
          {title: 'Cases', content: this.props.cases},
          {title: 'Contacts', content: this.props.contacts}
        ]} 
        expanded={true}
        renderContent={this.renderAccordionContent}
        renderHeader={this.renderAccordionHeader}
      />
    )
  }

  renderAccordionContent = (accordionContent) => {
    if (accordionContent.title === 'Contacts') {
      return (
        <FlatList
          data={accordionContent.content}
          keyExtractor={(item) => item.sfid}
          renderItem={({ item, index }) => (
            <ListItem key={item.sfid} style={styles.listItem} onPress={() => this.props.navigation.push('ContactDetails', { item })}>
              <Text>{`${index + 1}. ${item.name || ''}`}</Text>
            </ListItem>
          )}
        />
      );
    }

    if (accordionContent.title === 'Cases') {
      return (
        <FlatList
          data={accordionContent.content}
          keyExtractor={(item) => item.sfid}
          renderItem={({ item, index }) => (
            <ListItem key={item.sfid} style={{ marginLeft: 0, paddingLeft: 15 }} onPress={() => this.props.navigation.push('CaseDetails', { item })}>
              <Left>
                <View>
                  <Text>{index + 1}. {item.subject}</Text>
                  <Text>{item.casenumber}</Text>
                </View>
              </Left>
              <Right>
                <Text>{item.priority}</Text>
              </Right>
            </ListItem>
          )}
        />
      );
    }
  }

  renderAccordionHeader = (item, expanded) => (
    <View style={styles.accordionHeader}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{' '}{item.title}</Text>
      {expanded
        ? <Icon style={{ fontSize: 20 }} name='remove-circle' />
        : <Icon style={{ fontSize: 20 }} name='add-circle' />}
    </View>
  );

  renderSensitiveFields = (item) => {
    if (this.props.userProfileType === 'SPORTS') {
      let typeOfSport = '';
      if (item.type_of_sport__c !== null && item.type_of_sport__c !== '') {
        typeOfSport = item.type_of_sport__c.split(';').join(' | ');
      }
      return <RecordField label='Type Of Sport' value={typeOfSport} />;
    } else if (this.props.userProfileType === 'MEDICAL') {
      return <RecordField label='Medical Practices' value={item.medical_practices_c || ''} />;
    }
    return null;
  }
  
  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.pop()}>
              <Icon name="arrow-back" style={{ color: 'white' }} />
            </Button>  
          </Left>
          <Body>
            <Text style={styles.headerTitle}>Account Details</Text>
          </Body>
          <Right/>
        </Header>
        <Content style={styles.content}>
          {/* ----- Account Information Section ------ */}
          <View style={{ marginTop: 20, padding: 10, width: '100%'}}>
            <RecordField label='Account Name' value={item.name || ''} />
            <RecordField label='Phone' value={item.phone || ''} />
            <RecordField label='Industry' value={item.industries__c || ''} />
            <RecordField label='Shipping Address' value={`${item.shippingstreet || ''} ${item.shippingcity || ''}, ${item.shippingstate || ''} ${item.shippingpostalcode || ''} ${item.shippingcountry || ''}`} />
            <RecordField label='Website' value={item.website || ''} />
            {this.renderSensitiveFields(item)}
          </View>
          {/* Accordions */}
          {this.renderAccordion()}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  userProfileType: state.user.profileType,
  listViews: state.accounts.listViews,
  fetchingDetails: state.accounts.fetchingDetails,
  fetchingDetailsError: state.accounts.fetchingDetailsError,
  accountId: state.accounts.accountId,
  fields: state.accounts.fields,
  cases: state.accounts.accountCases,
  contacts: state.accounts.accountContacts,
  ops: state.accounts.accountOps
});

export default connect(mapStateToProps)(AccountDetail);
