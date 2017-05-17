var actions = exports = module.exports

exports.LOGIN = 'LOGIN';
exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';

exports.login = function login(user, pass) {
  return {
    type: actions.LOGIN,
    user: user,
    pass: pass
  }
};

exports.loginSuccess = function loginSuccess(token) {
  return {
    type: actions.LOGIN_SUCCESS,
    token: token
  }
};
