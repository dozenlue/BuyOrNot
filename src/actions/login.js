var actions = exports = module.exports

exports.LOGIN = 'LOGIN'

exports.login = function addItem(itemData) {
  return {
    type: actions.LOGIN,
    itemData: itemData
  }
}
