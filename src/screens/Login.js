import React from 'react';
import { StyleSheet, Keyboard, View, Text, Image } from 'react-native'
import { Item, Input, Label, Button, Spinner } from 'native-base';
import { connect } from 'react-redux';

import { loginUser } from '../store/actions/user';
import imageLogo from '../../logo.png';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screenBackground,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
  },
  logo: {
    width: '100%',
    height: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  profileButtonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 20, 
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.wyngerRed
  },
  profileButtonText: {
    textAlign: 'center',
    height: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.wyngerRed
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.wyngerRed,
    marginTop: 20, 
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.wyngerRed
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    height: 20,
    fontWeight: 'bold',
    fontSize: 16
  },
  formItemEmail: {
    marginVertical: 12,
  }
});

class Login extends React.Component {
  state = {
    emailText: '',
    passwordText: '',
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.authenticationState === true) {
      this.props.navigation.navigate('Application');
    }
    return true;
  }

  onEmailTextChange = (emailText) => this.setState({ emailText });
  onPasswordTextChange = (passwordText) => this.setState({ passwordText });

  setLogin = (user) => {
    if (user === 'sally') {
      this.setState({
        emailText: 'sallysports@wynger.com',
        passwordText: 'SallyIsCool1!LFuNIYIZej7N9Vn7LumjgERM'
      });
    }

    if (user === 'mel') {
      this.setState({
        emailText: 'melmedical@wynger.com',
        passwordText: 'MelIsCool1!sbhjB3g1GxBCKdJ0vi7dvRFp7'
      });
    }
  }

  onSubmit = () => {
    Keyboard.dismiss();
    this.props.dispatch(loginUser(this.state.emailText, this.state.passwordText));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Image source={imageLogo} style={styles.logo} />
          <Item floatingLabel style={styles.formItemEmail}>
            <Label style={{ fontWeight: 'bold' }}>Email</Label>
            <Input
              style={{ fontWeight: 'bold' }}
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
              selectionColor={Colors.wyngerRed}
              value={this.state.emailText}
              onChangeText={this.onEmailTextChange}
            />
          </Item>
          <Item floatingLabel>
            <Label style={{ fontWeight: 'bold' }}>Password</Label>
            <Input
              style={{ fontWeight: 'bold' }}
              autoCapitalize='none'
              textContentType='password'
              secureTextEntry={true}
              selectionColor={Colors.wyngerRed}
              value={this.state.passwordText}
              onChangeText={this.onPasswordTextChange}
            />
          </Item>
          <Button style={styles.buttonContainer} onPress={this.onSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </Button>
          <Button style={styles.profileButtonContainer} onPress={() => this.setLogin('mel')}>
            <Text style={styles.profileButtonText}>Mel Medical</Text>
          </Button>
          <Button style={styles.profileButtonContainer} onPress={() => this.setLogin('sally')}>
            <Text style={styles.profileButtonText}>Sally Sports</Text>
          </Button>
          {this.props.isAuthenticating ? <Spinner color='red' /> : null}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticating: state.user.isAuthenticating,
  authenticationState: state.user.authenticationState,
});

export default connect(mapStateToProps)(Login);