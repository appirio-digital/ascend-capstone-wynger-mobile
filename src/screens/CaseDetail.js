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

import RecordField from '../components/RecordField';

import Colors from '../constants/Colors';
import DotEnv from '../constants/DotEnv';
import { fakeRelatedLists } from '../utils';

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.wyngerRed,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerSubtitle: {
    color: 'white'
  },
  content: {
    backgroundColor: Colors.screenBackground
  },
  accordionHeader: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center" ,
  },
  listItem: { 
    marginLeft: 0, 
    paddingLeft: 15 
  },
});

export default class CaseDetail extends React.Component {
  state = {
    fetchingDetails: false,
    relatedLists: []
  };

  componentDidMount = async () => {
    this.setState({ fetchingDetails: true });
    try {
      const caseId = this.props.navigation.state.params.item.sfid;
      const res = await fetch(`${DotEnv.API.ENDPOINT}/case_details_screen/${caseId}`);
      const json = await res.json();
      let newState = [
        { title: 'Case History', content: json.data.caseHistory },
        { title: 'Case Comments', content: json.data.caseComments }
      ];
      this.setState({ 
        relatedLists: newState,
        fetchingDetails: false
      });
    } catch (error) {
      console.error(error);
      this.setState({ fetchingDetails: false });
    }
  }
  
  renderAccordionContent = (accordionContent) => {
    if (accordionContent.title === 'Case History') {
      return (
        <FlatList
          data={accordionContent.content}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ListItem key={item.id} style={styles.listItem}>
              <Text>{index + 1}. {item.name}</Text>
            </ListItem>
          )}
        />
      );
    }

    if (accordionContent.title === 'Case Comments') {
      return (
        <FlatList
          data={accordionContent.content}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ListItem key={item.id} style={styles.listItem}>
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
            <Text style={styles.headerTitle}>Case Detail</Text>
          </Body>
          <Right/>
        </Header>
        <Content style={styles.content}>
          {/* ----- Case Information Section ------ */}
          <View style={{ marginTop: 20, width: '100%', padding: 10 }}>
            <RecordField label='Case Subject' value={item.subject || ''} />
            <RecordField label='Case Priority' value={item.priority || ''} />
            <RecordField label='Case Number' value={item.casenumber || ''} />
            <RecordField label='Case Status' value={item.status || ''} />
            <RecordField label='Case Industry' value={item.industry__c || ''} />
            <RecordField label='Case Reason' value={item.reason || ''} /> 
          </View>
          {/* Accordions */}
          {
            this.state.fetchingDetails ? <Text>Loading...</Text>
            :
            <Accordion
              dataArray={this.state.relatedLists}
              expanded={true}
              renderContent={this.renderAccordionContent}
              renderHeader={this.renderAccordionHeader}
            />
          }
        </Content>
      </Container>
    );
  }
}

