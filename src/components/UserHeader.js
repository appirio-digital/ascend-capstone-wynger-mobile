import React from 'react';
import { StyleSheet, View } from "react-native"
import {
  Header,
  Title,
  Subtitle,
  Thumbnail,
} from "native-base";

import { fakeUser } from "../utils";
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
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
  }
});

export default class UserHeader extends React.Component {
  render() {
    return (
      <Header span style={styles.header}>
        <View style={styles.headerContentWrapper}>
          <View style={styles.headerUserTextWrapper}>
            <Title style={{ color: 'white' }}>{fakeUser.name}</Title>
            <Subtitle style={{ color: 'white' }}>{fakeUser.userType}</Subtitle>
          </View>
          <View style={styles.headerUserAvatarWrapper}>
            <Thumbnail
              style={styles.headerUserAvatar}
              source={{ uri: fakeUser.photoUrl }} 
            />
          </View>
        </View>
      </Header>
    )
  }
}
