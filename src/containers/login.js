import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput
} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as loginActions from '../actions/login';

const mapReduxStoreToProps = (reduxStore) => {
  console.log('mapReduxStoreToProps called');
  // console.debug(reduxStore);
  return {
    // Why cannot use store.get here?
    user: reduxStore.items.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      login: bindActionCreators(loginActions.login, dispatch)
    }
  }
};

class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    const loginAction = this.props.actions.login;

    return (
      <View style={styles.loginBox}>
        <Text>User Name:</Text>
        <TextInput />
        <Text>Password:</Text>
        <TextInput />
        <Button
        title="Login"
        onPress={() => /*navigate('Items')*/loginAction("susan", "adams")}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginBox: {
    marginLeft: 20,
    marginRight: 20,
  },
});

module.exports = connect(mapReduxStoreToProps, mapDispatchToProps)(LoginScreen);
