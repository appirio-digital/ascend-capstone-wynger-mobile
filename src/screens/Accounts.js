import React from "react";
import { StatusBar } from "react-native"
import { Container, Header, Title, Left, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

export default class Accounts extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Accounts</Title>
          </Body>
        </Header>
        <Content>
          <Body>
            <Text>Accounts Screen</Text>
          </Body>
        </Content>
      </Container>
    );
  }
}

