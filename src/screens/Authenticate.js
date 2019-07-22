import React from 'react';
import { WebView } from 'react-native-webview';
import URL from 'url-parse';
import * as queryString from 'query-string';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class Authenticate extends React.Component {

  state = {
    loggedIn: false
  };

  async componentDidMount() {
    // await this.authorizeUser();
  }

  // async authorizeUser() {
  //   try {
  //      // retrieve token
  //     const { accessToken } = JSON.parse(await this.getAsyncStorageToken());
  //   } catch (error) {
  //     console.error('Error -- Authenticate.authorizeUser(): ', error);
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text>Authenticate Screen</Text>
      </View>
    );
  }
}

export default Authenticate;