import React from 'react';
import { StyleSheet, View } from 'react-native';
import { 
  Container,
  Body,
  Content,
  Header,
  Title,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base';

import RecordField from '../components/RecordField';

import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.wyngerRed,
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold'
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

export default class OpportunityDetail extends React.Component {  
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
            <Title style={styles.headerTitle}>Opportunity Detail</Title>
          </Body>
          <Right/>
        </Header>
        <Content style={styles.content}>
          {/* ----- Account Information Section ------ */}
          <View style={{ marginTop: 20, padding: 10, width: '100%'}}>
            <RecordField label='Opportunity Name' value={item.name || ''} />
            <RecordField label='Opportunity Probability' value={item.probability + '%' || ''} />
            <RecordField label='Account Name' value={item.accountname || ''} />
            <RecordField label='Amount' value={item.amount || ''} />
            <RecordField label='Type' value={item.type || ''} />
            <RecordField label='Industry' value={item.industry__c || ''} />
            <RecordField label='Description' value={item.description || ''} />
          </View>
        </Content>
      </Container>
    );
  }
}

