import React, {
  Component,
  StyleSheet,
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
    login: bindActionCreators(loginActions.login, dispatch)
  }
};

class LoginPage extends Component {
  render() {
    return (
      <View style={styles.loginBox}>
        <Text>User Name:</Text>
        <TextInput />
        <Text>Password:</Text>
        <TextInput />
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

module.exports = {
  id: 'loginPage',
  name: 'Login',
  content: connect(mapReduxStoreToProps, mapDispatchToProps)(LoginPage)
}
