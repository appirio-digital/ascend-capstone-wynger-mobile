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

export default class CaseDetail extends React.Component {
  
  renderAccordionContent = (accordionContent) => {

    if (accordionContent.title === 'Case History') {
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

    if (accordionContent.title === 'Case Comments') {
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

    if (accordionContent.title === 'Solutions') {
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

    if (accordionContent.title === 'Notes & Attachments') {
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
    if(item.title === 'Case History') {
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

    if(item.title === 'Case Comments') {
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

    if(item.title === 'Solutions') {
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

    if(item.title === 'Notes & Attachments') {
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
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.pop()}>
              <Icon name="arrow-back" style={{ color: 'white' }} />
            </Button>  
          </Left>
          <Body>
            <Title style={styles.headerTitle}>Case Detail</Title>
          </Body>
          <Right/>
        </Header>
        <Content style={styles.content}>
          {/* ----- Account Information Section ------ */}
          <View style={{ marginTop: 20, backgroundColor: 'lightgrey', width: '90%' }}>
            <Text>Case Number: 1234</Text>
            <Text>Case Status: New</Text>
            <Text>Account: Hospital 1</Text>
            <Text>Industry: Medical</Text>
            <Text>Case Reason: Product Failure</Text>
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

