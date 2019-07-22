import React from "react";
import { StatusBar } from "react-native"
import { Container, Header, Title, Left, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

export default class Products extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Products</Title>
          </Body>
        </Header>
        <Content>
          <Body>
            <Text>Products Screen</Text>
          </Body>
        </Content>
      </Container>
    );
  }
}
