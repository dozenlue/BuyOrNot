import React, {Component} from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import AppNavigator from './AppNavigator';

class App extends Component {
  render(){
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

module.exports = connect(state => ({
  nav: state.nav,
}))(App);
