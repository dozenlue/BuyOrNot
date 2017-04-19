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

var {screenHeight, screenWidth} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navBar: {
    backgroundColor: 'white',
    height: 48,
  },
  navBarTitle: {
    //flex: 1,
    height: 48,
    left: 80,
    right: 80 + (screenWidth - 80 * 2),
    // alignSelf: 'center',
    paddingVertical: 9,
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    textAlign: 'center'
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#5890FF',
  }
});

module.exports = connect(state => ({
  nav: state.nav,
}))(App);
