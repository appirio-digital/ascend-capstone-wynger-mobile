import React from "react";
import { StatusBar } from "react-native"
import { Container, Header, Title, Left, Right, Button, Body, Content, Card, CardItem, List, ListItem, Text, Accordion, Picker, Form, Input, Item, Subtitle, Thumbnail, Row } from "native-base";
import { FlatList } from "react-native-gesture-handler";

const user = {name:'Marky Mark', userType:'Eastern Marketing Team', id: '001'}

const fakelistviews = [
  { id: '000', name: 'view all'},
  { id: '001', name: 'view1'},
  { id: '002', name: 'view2'},
  { id: '003', name: 'view3'}
]

const fakedata = [
  { id: '001', accountName: 'Hospital Chicago'},
  { id: '001', accountName: 'Hospital Milwaukee'},
  { id: '002', accountName: 'Hospital Boston'},
  { id: '002', accountName: 'Hospital New York'},
  { id: '003', accountName: 'Hospital San Francisco'},
  { id: '003', accountName: 'Hospital Seattle'},
  { id: '004', accountName: 'Hospital Dallas'},
  { id: '004', accountName: 'Hospital Houston'},
  { id: '005', accountName: 'Hospital Miami'},
  { id: '005', accountName: 'Hospital Atlanta'},
  { id: '006', accountName: 'Hospital Denver'},
  { id: '006', accountName: 'Hospital Las Vegas'},
  { id: '007', accountName: 'Hospital Boseman'},
  { id: '007', accountName: 'Hospital Minneapolis'}
]



export default class AccountDetail extends React.Component {

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
      <Header span style={{alignItems:"flex-start", justifyContent:"center"}}>
          <Body style={{flexDirection:'column'}}>
            <Title>{user.name}</Title>
            <Subtitle>{user.userType}</Subtitle>
            <Thumbnail style={{alignSelf:"flex-end"}} source={{uri:'https://i.dailymail.co.uk/i/pix/2014/12/10/23C0FCDA00000578-0-image-m-3_1418220647087.jpg'}} />
          </Body>
        </Header>
        <Content>
          <Body>
            
          </Body>
        </Content>
      </Container>
    );
  }
}

