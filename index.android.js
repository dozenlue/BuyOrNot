import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Provider
} from 'react-redux';

import App from './src/containers/App';
import configureStore from './src/store/configureStore';

const store = configureStore();

export default class BuyOrNot extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('BuyOrNot', () => BuyOrNot);
