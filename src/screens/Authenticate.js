import React from 'react';
import {
  AsyncStorage
} from 'react-native';
import { Container, Header, Title, Body, Content, Text } from "native-base";

import DotEnv from '../constants/DotEnv';
import { AuthSession } from 'expo';

class Authenticate extends React.Component {

  state = {
    loading: false,
    result: {}
  };

  async componentDidMount() {
    await this.authorizeUser();
  }

  getAsyncStorageToken = async () => {
    let token = await AsyncStorage.getItem(DotEnv.ASYNC_STORAGE.TOKEN);
    if (!token) return '{}'
    return token;
  }

  getAsyncStorageCurrentUser = async () => {
    let user = await AsyncStorage.getItem(DotEnv.ASYNC_STORAGE.CURRENT_USER);
    if (!user) return '{}'
    return user;
  }
  
  setAsyncStorageCurrentUser = async response => {
    await AsyncStorage.setItem(
      ASYNC_STORAGE.CURRENT_USER,
      JSON.stringify(response)
    );
  };

  setAsyncStorageCurrentToken = async resposne => {
    const { access_token, refresh_token, expires_in } = response;
    await AsyncStorage.setItem(
      ASYNC_STORAGE.TOKEN,
      JSON.stringify({ access_token, refresh_token, expires_in })
    );
  };

  getRefreshToken = async refreshToken => {
    try {
      // receive a new JWT token
      const results = fetchRefreshToken(refreshToken);
      if (!results.data.refreshJwt) {
        await this.reauthorizeUser();
      } else {
        // update current user in application
        await this.storeAsyncStorageToken(results.data.refreshJwt);
        const { access_token } = results.data.refreshJwt;
        
        const userResults = fetchUserData(access_token);
        const { current_user } = userResults.data;
        const screen_permissions = current_user.screens;
        this.navigateToMain(current_user, screen_permissions);
      }
    } catch (error) {
      console.log(error);
      await this.reauthorizeUser();
    }
  };

  reauthorizeUser = async () => {
    const asyncStorageKeys = await AsyncStorage.getAllKeys();
    const removeKeys = asyncStorageKeys.map(key => {
      return AsyncStorage.removeItem(key);
    });
    await Promise.all(removeKeys);
    await this.authorizeUser();
  }

  async authorizeUser() {
    try {
      const { access_token } = JSON.parse(await this.getAsyncStorageToken());
      // if (!access_token) {
      await this.signIn();
      // } else {
      //   await this.verifyUser(access_token);
      // }
    } catch (error) {
      console.error('Error -- Authenticate.authorizeUser(): ', error);
      this.setState({
        loading: false,
        result: {
          type: 'error',
          ...error
        }
      });
    }
  }

  signIn = async () => {
    this.setState({ result: {}, loading: true });
    
    // send user to salesforce login for authentication
    const redirectUrl = AuthSession.getRedirectUrl();
    console.log('encodeURIComponent(redirectUrl): ', encodeURIComponent(redirectUrl));
    console.log('final URL: ', `${DotEnv.SF.OAUTH_URL}?redirect_uri=${encodeURIComponent(redirectUrl)}`)
    const result = await AuthSession.startAsync({
      authUrl: `${DotEnv.SF.OAUTH_URL}?redirect_uri=${encodeURIComponent(redirectUrl)}`
    });
    console.log('result: ', result);
    // this.setState({ result });

    // if (result.type === 'success') {
    //   await this.setAsyncStorageCurrentToken(result.params);
    //   const { access_token } = JSON.parse(await this.getAsyncStorageToken());
    //   await this.verifyUser(access_token);
    // } else {
    //   this.setState({ loading: false });
    // }
  }

  verifyUser = async access_token => {
    try {
      // hit API endpoint to verify user and fetch users data
      // const result = fetchUserData('fake_username');
      
      // store current user in AsyncStorage
      // await this.setAsyncStorageCurrentUser(result.data);

      // const { current_user } = result.data;
      // const screenPermissions = current_user.screens;
      // this.navigateToApplication(current_user, screenPermissions);
    } catch (error) {
      if (error.message === 'Network error: Network request failed') {
        const { current_user } = JSON.parse(await this.getAsyncStorageCurrentUser());
        const screenPermissions = current_user.screens;
        this.navigateToApplication(current_user, screenPermissions);
      } else {
        try {
          const { refresh_token } = JSON.parse(await this.getAsyncStorageToken());
          if (!refresh_token) throw new Error('Your refresh token is expired or invalid. Please login again');
          await this.getRefreshToken(refresh_token);
        } catch (error) {
          this.setState({
            loading: false,
            result: { type: 'error', ...error }
          });
        }
      }
    }
  }

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

export default Authenticate;