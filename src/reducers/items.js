// Actions defined in ../actions
const {
  ADD_ITEM,
  REMOVE_ITEM,
  FETCH_ITEMS,
} = require('../actions/items')

const Immutable = require('immutable')

// initial state: an empty list
const initialState = Immutable.fromJS({
  user: {
    loginName: "",
    password: "",
    loggedIn: false
  },
  itemList: []
})

module.exports = function items(state = initialState, action) {
  console.log('reducer get called');
  let list

  switch (action.type) {
  case ADD_ITEM:
    // TODO: Not sure if this is correct...
    return state.updateIn(['itemList'], list => list.push(action.itemData))
  case REMOVE_ITEM:
    // TODO: How to remove an item with Immutable...
    return state
  case FETCH_ITEMS:
    // dummy code
    console.log('reducer called: fetchItems');
    return state.updateIn(['itemList'], list => Immutable.fromJS(
      [
        {id: '1', name: 'aaa'},
        {id: '2', name: 'bbb'},
        {id: '3', name: 'ccc'}
      ]
    ))
  default:
    // unknown action, nothing to do
    return state
  }
}
