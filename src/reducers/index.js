const { combineReducers } = require('redux');

const items = require('./items');
const login = require('./login');
const navigation = require('./navigation');

const rootReducer = combineReducers({
  items: items,
  login: login,
  nav: navigation
})

module.exports = rootReducer
