import React from 'react';
import { StyleSheet, View } from "react-native"
import { Header, Title, Subtitle, Thumbnail, Icon } from "native-base";
import { connect } from 'react-redux';

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
    alignSelf: 'center',
    fontSize: 60,
    color: 'white'
  }
});

export default class UserHeader extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <Header span style={styles.header}>
        <View style={styles.headerContentWrapper}>
          <View style={styles.headerUserTextWrapper}>
            <Title style={{ color: 'white' }}>{user.name || ''}</Title>
            <Subtitle style={{ color: 'white' }}>{user.title || ''}</Subtitle>
          </View>
          <View style={styles.headerUserAvatarWrapper}>
            <Icon 
              style={styles.headerUserAvatar} 
              type='Ionicons' 
              name='ios-person'
            />
          </View>
        </View>
      </Header>
    )
  }
}
