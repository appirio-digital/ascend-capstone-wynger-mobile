import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { 
  Container,
  Body,
  Content,
  Accordion,
  Header,
  Title,
  Left,
  Right,
  Subtitle,
  Button,
  Icon,
  ListItem
} from 'native-base';

import Colors from '../constants/Colors';
import { fakeRelatedLists } from '../utils';

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

export default class AccountDetail extends React.Component {
  renderAccordionContent = (accordionContent) => {
    if (accordionContent.title === 'Contacts') {
      return (
        <FlatList
          data={accordionContent.content}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <ListItem key={item.id} style={{ marginLeft: 0, paddingLeft: 15 }}>
                <Text>{index + 1}. {item.name}</Text>
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
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <ListItem key={item.id} style={{ marginLeft: 0, paddingLeft: 15 }}>
                <Left>
                  <View>
                    <Text>{index + 1}. {item.caseNumber}</Text>
                    <Text>{item.caseReason}</Text>
                  </View>
                </Left>
                <Right>
                  <Text>{item.caseStatus}</Text>
                </Right>
              </ListItem>
            )
          }}
        />
      );
    }

    if (accordionContent.title === 'Opportunities') {
      return (
        <FlatList
          data={accordionContent.content}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <ListItem key={item.id} style={{ marginLeft: 0, paddingLeft: 15 }}>
                <Left>
                  <View>
                    <Text>{index + 1}. {item.name}</Text>
                    <Text>{item.account}</Text>
                  </View>
                </Left>
                <Right>
                  <Text>{item.contact}</Text>
                </Right>
              </ListItem>
            )
          }}
        />
      );
    }
  }

  renderAccordionHeader = (item, expanded) => {
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
  
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{ color: 'white' }} />
            </Button>  
          </Left>
          <Body>
            <Title style={styles.headerTitle}>Account Details</Title>
          </Body>
          <Right/>
        </Header>
        <Content style={styles.content}>
          {/* ----- Account Information Section ------ */}
          <View style={{ marginTop: 20, backgroundColor: 'lightgrey', width: '90%' }}>
            <Text>Account Name: Mercy Hospital</Text>
            <Text>Phone: 555-256-8909</Text>
            <Text>Employees: 18,000</Text>
            <Text>Industry: Medical</Text>
            <Text>Billing Address: 456 Maryland Ave. Burlington, NC 27215, USA</Text>
            <Text>Account Number: 394875</Text>
            <Text>Website: https://mercyhealth.com</Text>
            <Text>Rating: Hot</Text>
            <Text>Medical Practices: Surgery</Text>
            <Text>Shipping Address: 456 Maryland Ave, Burlington NC 27215 USA</Text>
          </View>
          {/* Accordions */}
          <Accordion
            dataArray={fakeRelatedLists} 
            expanded={true}
            renderContent={this.renderAccordionContent}
            renderHeader={this.renderAccordionHeader}
          />
        </Content>
      </Container>
    );
  }
}

