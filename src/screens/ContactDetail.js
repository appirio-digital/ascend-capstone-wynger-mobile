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

export default class ContactDetail extends React.Component {
  renderAccordionContent = (accordionContent) => {
    if (accordionContent.title === 'Cases') {
      return (
          <FlatList
            data={accordionContent.content}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <ListItem key={item.id} style={{ marginLeft: 0, paddingLeft: 15 }} onPress={() => this.props.navigation.push('CaseDetails')}>
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
  }

  renderAccordionHeader = (item, expanded) => {
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
            <Text style={styles.headerTitle}>Contact Detail</Text>
          </Body>
          <Right/>
        </Header>
        <Content style={styles.content}>
          {/* ----- Contact Information Section ------ */}
          <View style={{ marginTop: 20, padding: 10, width: '100%' }}>
            <View>
              <Text style={{ fontWeight: 'bold' }}>Name: </Text>
              <Text>{`${item.firstname} ${item.lastname}`}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold' }}>Phone:</Text>
              <Text>{item.phone || ''}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold' }}>Specialization:</Text>
              <Text>{item.specialization__c || ''}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold' }}>Email:</Text>
              <Text>{item.email || ''}</Text>
            </View>
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

