import { NavigationActions } from 'react-navigation';

const {
  LOGIN,
  LOGIN_SUCCESS
} = require('../actions/login');

const AppNavigator = require('../containers/AppNavigator');

const navReducer = (state, action) => {
  let newState;

  switch (action.type) {
    case LOGIN:
      newState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Items' }),
        state
      );
      break;
    default:
      newState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return (newState ? newState : state)
};

module.exports = navReducer;
