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
  ListItem,
} from 'native-base';

import RecordField from '../components/RecordField';

import Colors from '../constants/Colors';

import { fetchProductDetailsScreen } from '../store/actions/products';

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

class ProductDetail extends React.Component {

  componentDidMount() {
    const { item } = this.props.navigation.state.params;
    this.props.dispatch(fetchProductDetailsScreen(item.sfid));
  }

  renderAccordion = () => {
    if (this.props.fetchingDetails) return <Text>Loading Related Lists...</Text>;

    return (
      <Accordion
        dataArray={[
          { title: 'Price Book Entries', content: this.props.pricebookEntries }
        ]}
        expanded={true}
        renderContent={this.renderAccordionContent}
        renderHeader={this.renderAccordionHeader}
      />
    )
  }

  renderAccordionContent = (accordionContent) => (
    <FlatList
      data={accordionContent.content}
      keyExtractor={(item) => item.sfid}
      renderItem={({ item, index }) => {
        return (
          <ListItem key={item.sfid} style={styles.listItem}>
            <Left>
              <View>
                <Text>{index + 1}. {item.name}</Text>
              </View>
            </Left>
            <Right>
              <Text>${item.unitprice}</Text>
            </Right>
          </ListItem>
        )
      }}
    />
  );

  renderAccordionHeader = (item, expanded) => (
    <View style={styles.accordionHeader}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{' '}{item.title}</Text>
      {expanded
        ? <Icon style={{ fontSize: 20 }} name='remove-circle' />
        : <Icon style={{ fontSize: 20 }} name='add-circle' />}
    </View>
  );

  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.pop()}>
              <Icon name='arrow-back' style={{ color: 'white' }} />
            </Button>
          </Left>
          <Body>
            <Text style={styles.headerTitle}>Product Detail</Text>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          {/* ----- Product Information Section ------ */}
          <View style={{ marginTop: 20, padding: 10, width: '100%' }}>
            <RecordField label='Product Name' value={item.name || ''} />
            <RecordField label='Product Code' value={item.productcode || ''} />
            <RecordField label='Product Quantity' value={item.quantity__c || ''} />
            <RecordField label='Industry' value={item.industry__c || ''} />
            <RecordField label='Description' value={item.description || ''} />
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
  listViews: state.products.listViews,
  fetchingDetails: state.products.fetchingDetails,
  fetchingDetailsError: state.products.fetchingDetailsError,
  productId: state.products.productId,
  fields: state.products.fields,
  pricebookEntries: state.products.pricebookEntries,
});

export default connect(mapStateToProps)(ProductDetail);

