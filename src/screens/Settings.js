import React from 'react';
import { StyleSheet, Keyboard, View, Text } from 'react-native'
import { Item, Input, Label, Button, Spinner } from 'native-base';
import { connect } from 'react-redux';

import { logoutUser } from '../store/actions/user';

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
});

class Settings extends React.Component {
  logout = () => {
    this.props.dispatch(logoutUser());
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Button style={styles.buttonContainer} onPress={this.logout}>
            <Text style={styles.buttonText}>Logout</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default connect()(Settings);