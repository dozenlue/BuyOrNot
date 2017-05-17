// Actions defined in ../actions
const {
  LOGIN,
  LOGIN_SUCCESS
} = require('../actions/login');

const Immutable = require('immutable');

const initialState = Immutable.fromJS({
  user: {
    loginName: "",
    password: "",
    loggedIn: false
  },
  token: ""
})

module.exports = function loginReducer(state = initialState, action) {
  let nextState;

  console.log('login reducer get called');

  switch (action.type) {
    case LOGIN:
      nextState = state.setIn(['user', 'loginName'], action.user)
                       .setIn(['user', 'password'], action.pass)
                       .setIn(['user', 'loggedIn'], true);
      break;
    case LOGIN_SUCCESS:
      /*nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Items' }),
        state
      );*/
      break;
    default:
      break;
  }

  return nextState || state;
}
