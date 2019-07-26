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
import { connect } from 'react-redux';

import Colors from '../constants/Colors';
import { fakeRelatedLists, fakeCases } from '../utils';


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
  }
});

class ProductDetail extends React.Component {
  renderAccordionContent = (accordionContent) => {
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
    if (item.title === 'Cases') {
      return (
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "center",
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
            <Text style={styles.headerTitle}>Product Detail</Text>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          {/* ----- Product Information Section ------ */}
          <View style={{ marginTop: 20, backgroundColor: 'lightgrey', width: '90%' }}>
            <Text>Product Name: {item.name || ''}</Text>
            <Text>Product Code: {item.productcode || ''}</Text>
            <Text>Product Quantity: {item.quantity__c || ''}</Text>
            <Text>Industry: {item.industry__c || ''}</Text>
            <Text>Description: {item.description || ''}</Text>
          </View>
          {/* Accordions */}
          {this.props.fetchingCases ? (
            <Text>Loading...</Text>
          ) : (
              <Accordion
                dataArray={[
                  { title: 'Cases', content: this.props.cases }
                ]}
                expanded={true}
                renderContent={this.renderAccordionContent}
                renderHeader={this.renderAccordionHeader}
              />
            )}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  cases: state.cases.data,
  fetchingCases: state.cases.fetching
});

export default connect(mapStateToProps)(ProductDetail);

