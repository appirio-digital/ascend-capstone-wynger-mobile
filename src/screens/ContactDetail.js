import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { 
  Container,
  Body,
  Content,
  Header,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base';

import Colors from '../constants/Colors';

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
  field: {
    marginVertical: 5
  },
  fieldLabel: { 
    fontWeight: 'bold', 
    fontSize: 20 
  },
  fieldValue: {
    fontSize: 16
  }
});

export default class ContactDetail extends React.Component {
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
            <Text style={styles.headerTitle}>Contact Detail</Text>
          </Body>
          <Right/>
        </Header>
        <Content style={styles.content}>
          {/* ----- Contact Information Section ------ */}
          <View style={{ marginTop: 20, padding: 10, width: '100%' }}>
            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Name</Text>
              <Text style={styles.fieldValue}>{`${item.firstname} ${item.lastname}`}</Text>
            </View>
            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Phone</Text>
              <Text style={styles.fieldValue}>{item.phone || ''}</Text>
            </View>
            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Specialization</Text>
              <Text style={styles.fieldValue}>{item.specialization__c || ''}</Text>
            </View>
            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Email</Text>
              <Text style={styles.fieldValue}>{item.email || ''}</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

