import React from "react";
import { StatusBar } from "react-native"
import { Container, Header, Title, Left, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

export default class Authenticate extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Authenticate</Title>
          </Body>
        </Header>
        <Content>
          <Body>
            <Text>Authenticate</Text>
          </Body>
        </Content>
      </Container>
    );
  }
}
