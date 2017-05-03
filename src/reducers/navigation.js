const AppNavigator = require('../containers/AppNavigator');

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return (newState ? newState : state)
};

module.exports = navReducer;
