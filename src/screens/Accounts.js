import React from "react";
import { StatusBar } from "react-native"
import { Container, Header, Title, Left, Right, Button, Body, Content, Card, CardItem, List, ListItem, Text, Accordion, Picker, Form, Input, Item } from "native-base";

const fakelistviews = [
  { id: '000', name: 'view all'},
  { id: '001', name: 'view1'},
  { id: '002', name: 'view2'},
  { id: '003', name: 'view3'}
]

const fakedata = [
  { id: '001', accountName: 'Hospital 1'},
  { id: '001', accountName: 'Hospital 1'},
  { id: '002', accountName: 'Hospital 2'},
  { id: '002', accountName: 'Hospital 2'},
  { id: '003', accountName: 'Hospital 3'},
  { id: '003', accountName: 'Hospital 3'},
]



export default class Accounts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Input placeholder="Search"/>
          </Item>
          <Body>
            <Title>Accounts</Title>
          </Body>
        </Header>
        <Content>
          <Body>
            <Text>Accounts Screen</Text>
              <Picker mode='dropdown'
              placeholder="Select List View"
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
              >
                {
                  fakelistviews.map(listview => (
                    <Picker.Item label={listview.name} value={listview.id}/>
                  ))
                }
              </Picker>
            <List>
                {
                  fakedata.map(account => (
                      <ListItem>
                        <Text>
                          {account.accountName}
                        </Text>
                      </ListItem>
                  ))
                }
            </List>
          </Body>
        </Content>
      </Container>
    );
  }
}

