import React from "react";
import { StyleSheet, View } from "react-native"
import { 
  Container, 
  Header, 
  Title,
  Body, 
  Content, 
  Input,
  Picker,
  Icon,
  Left,
  Right,
  Button,
  Subtitle,
  Thumbnail
} from "native-base";

import ProductList from '../components/ProductList';
import Colors from '../constants/Colors';
import { fakeProducts, fakeProductListViews, fakeUser } from "../utils";

const styles = StyleSheet.create({
  content: {
    backgroundColor: Colors.screenBackground
  },
  header: {
    backgroundColor: Colors.wyngerRed,
  },
  headerContentWrapper: {
    display: 'flex', 
    flexDirection: 'row', 
    width: '100%'
  },
  headerUserTextWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  headerUserAvatarWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  headerUserAvatar: {
    alignSelf: 'center'
  },
  searchItem: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  searchInput: {
    borderStyle: 'solid',
    borderColor: Colors.wyngerGrey,
    borderRadius: 5,
    borderWidth: 1
  },
  picker: {
    width: undefined,
    marginVertical: 20,
  }
});

export default class Products extends React.Component {
  state = {
    selectedProduct: fakeProductListViews[0].value
  }

  onSelectedProductValueChange = (value) => {
    this.setState({ selectedProduct: value });
  }
  
  render() {
    return (
      <Container style={styles.content}>
        <Header span style={styles.header}>
          <View style={styles.headerContentWrapper}>
            <View style={styles.headerUserTextWrapper}>
              <Title style={{ color: 'white'}}>{fakeUser.name}</Title>
              <Subtitle style={{ color: 'white'}}>{fakeUser.userType}</Subtitle>
            </View>
            <View style={styles.headerUserAvatarWrapper}>
              <Thumbnail
                style={styles.headerUserAvatar}
                source={{ uri: fakeUser.photoUrl }} 
              />
            </View>
          </View>
        </Header>
        <Content style={styles.content}>
          <View style={styles.searchItem}>
            <Input 
              style={styles.searchInput}
              placeholder="Search Products Here..." 
            />
          </View>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={styles.picker}
            textStyle={{ fontWeight: 'bold' }}
            itemTextStyle={{ fontWeight: 'bold' }}
            selectedValue={this.state.selectedProduct}
            onValueChange={this.onSelectedProductValueChange}
            renderHeader={(backAction) => (
              <Header>
                <Left>
                  <Button transparent onPress={backAction}>
                    <Icon name="arrow-back" />
                  </Button>
                </Left>
                <Body style={{ flex: 3 }}>
                  <Title>Choose A Listview</Title>
                </Body>
                <Right />
              </Header>
            )}
          >
          {fakeProductListViews.map((list, index) => {
            return (
              <Picker.Item 
                key={index}
                label={list.label} 
                value={list.value}
              />
            )
          })}
          </Picker>
          <ProductList products={fakeProducts} />
        </Content>
      </Container>
    );
  }
}
