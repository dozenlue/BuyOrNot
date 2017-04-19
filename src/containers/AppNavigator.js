import { StackNavigator } from 'react-navigation';

const ItemsScreen = require('./itemList');
const LoginScreen = require('./login');

const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Items: { screen: ItemsScreen }
});

module.exports = AppNavigator;
