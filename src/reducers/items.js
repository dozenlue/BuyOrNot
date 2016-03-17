// Actions defined in ../actions
const {
  ADD_ITEM,
  REMOVE_ITEM,
  FETCH_ITEMS,
} = require('../actions/items')

// initial state: an empty list
const initialState = {
  itemList: []
}

module.exports = function items(state = initialState, action) {
  console.log('reducer get called');
  let list

  switch (action.type) {
  case ADD_ITEM:
    list = state.itemList.concat([action.itemData]).sort((a, b) => b.time - a.time)
    // A reducer must return a completely new object
    return {
      itemList: list
    }
  case REMOVE_ITEM:
    list = state.itemList.slice(0)
    const index = list.map(i => i.id).indexOf(action.id)
    list.splice(index, 1)
    return {
     itemList: list
    }
  case FETCH_ITEMS:
    // dummy code
    console.log('reducer called: fetchItems');
    list = state.itemList.concat({id: '1', name: 'aaa'});
    list.push({id: '2', name: 'bbb'})
    return {
      itemList: list
    }
  default:
    // unknown action, nothing to do
    return state
  }
}
