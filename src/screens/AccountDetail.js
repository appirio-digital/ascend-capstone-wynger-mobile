import React from 'react';
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
import { connect } from 'react-redux'

import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.wyngerRed,
  },
  headerTitle: {
    color: 'white'
  },
  headerSubtitle: {
    color: 'white'
  },
  content: {
    backgroundColor: Colors.screenBackground
  }
});

class AccountDetail extends React.Component {
  renderAccordionContent = (accordionContent) => {
    if (accordionContent.title === 'Contacts') {
      return (
        <FlatList
          data={accordionContent.content}
          keyExtractor={(item) => item.sfid}
          renderItem={({ item, index }) => {
            return (
              <ListItem key={item.sfid} style={{ marginLeft: 0, paddingLeft: 15 }} onPress={() => this.props.navigation.push('ContactDetails', { item })}>
                <Text>{`${index + 1}. ${item.name || ''}`}</Text>
              </ListItem>
            )
          }}
        />
      );
    }

    if (accordionContent.title === 'Cases') {
      return (
        <FlatList
          data={accordionContent.content}
          keyExtractor={(item) => item.sfid}
          renderItem={({ item, index }) => {
            return (
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
            )
          }}
        />
      );
    }
  }

  renderAccordionHeader = (item, expanded) => {
    if(item.title === 'Contacts') {
      return (
        <View 
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "center" ,
          }}
        >
          <Text style={{ fontWeight: "600" }}>{" "}{item.title}</Text>
          {expanded
            ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
            : <Icon style={{ fontSize: 18 }} name="add-circle" />}
        </View>
      );
     }
     if(item.title === 'Cases') {
      return (
        <View 
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "center" ,
          }}
        >
          <Text style={{ fontWeight: "600" }}>{" "}{item.title}</Text>
          {expanded
            ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
            : <Icon style={{ fontSize: 18 }} name="add-circle" />}
        </View>
      );
     }
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
            <View>
              <Text style={{ fontWeight: 'bold' }}>Account Name:</Text>
              <Text>{item.name || ''}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold' }}>Phone: </Text>
              <Text>{item.phone || ''}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold' }}>Industry: </Text>
              <Text>{item.industries__c || ''}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold' }}>Shipping Address: </Text>
              <Text>{`${item.shippingstreet || ''} ${item.shippingcity || ''}, ${item.shippingstate || ''} ${item.shippingpostalcode || ''} ${item.shippingcountry || ''}`}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold' }}>Website: </Text>
              <Text>{item.website || ''}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold' }}>Medical Practices: </Text>
              <Text>{item.medical_practices_c || ''}</Text>
            </View>
          </View>
          {/* Accordions */}
          <Accordion
            dataArray={[
              {title: 'Cases', content: this.props.cases},
              {title: 'Contacts', content: this.props.contacts}
            ]} 
            expanded={true}
            renderContent={this.renderAccordionContent}
            renderHeader={this.renderAccordionHeader}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.data,
  cases: state.cases.data
});

export default connect(mapStateToProps)(AccountDetail);
