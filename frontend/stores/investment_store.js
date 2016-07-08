const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants')

const InvestmentStore = new Store(AppDispatcher);

let _investments = {};

const resetInvestments = function(investments) {
  _investments = {};
  for (var i = 0; i < investments.length; i++) {
    _investments[investments[i].id] = investments[i];
  }
};

const resetInvestment = function(investment) {
  _investments[investment.id] = investment;
};

const removeInvestment = function(investment) {
  delete _investments[investment.id]
};

InvestmentStore.find = function (id) {
  return _investments[id];
};

InvestmentStore.userFilter = function (id) {
  let results = [];
  for (var i in _investments) {
    if (_investments.hasOwnProperty(i) && _investments[i].user_id === id) {
      results.push(_investments[i]);
    }
  }
  return results;
};

InvestmentStore.all = function () {
  let results = [];
  for (var i in _investments) {
    if (_investments.hasOwnProperty(i)) {
      results.push(_investments[i]);
    }
  }
  return results;
};


InvestmentStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case SessionConstants.RECEIVE_INVESTMENTS:
      resetInvestments(payload.investments);
      break;

    case SessionConstants.RECEIVE_INVESTMENT:
    	resetInvestment(payload.investment);
      break;
  }
  this.__emitChange();
};

module.exports = InvestmentStore;
