var actions = exports = module.exports

exports.ADD_ITEM = 'ADD_ITEM'
exports.REMOVE_ITEM = 'REMOVE_ITEM'
exports.FETCH_ITEMS = 'FETCH_ITEMS'

exports.addItem = function addItem(itemData) {
  return {
    type: actions.ADD_ITEM,
    itemData: itemData
  }
}

exports.removeItem = function removeItem(id) {
  return {
    type: actions.REMOVE_ITEM,
    id: id
  }
}

exports.fetchItems = function fetchItems() {
  return {
    type: actions.FETCH_ITEMS
  }
}
