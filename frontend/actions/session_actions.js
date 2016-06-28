const SessionApiUtil = require('../util/session_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const hashHistory = require('react-router').hashHistory;
const SessionConstants = require('../constants/session_constants.js');

const SessionActions = {

  signUp(formData) {
    SessionApiUtil.signUp(formData, this.receiveCurrentUser)
  },

  logIn(formData) {
    SessionApiUtil.logIn(formData, this.receiveCurrentUser)
  },

  logOut() {
    SessionApiUtil.logOut(this.removeCurrentUser);
  },

  receiveCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    })
  },

  removeCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
      currentUser: currentUser
    });
    hashHistory.push("/login");
  }
};

module.exports = SessionActions;
