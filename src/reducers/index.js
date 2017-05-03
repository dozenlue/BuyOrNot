const { combineReducers } = require('redux');

const items = require('./items');
const navigation = require('./navigation');

const rootReducer = combineReducers({
  items: items,
  nav: navigation
})

module.exports = rootReducer
