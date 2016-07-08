const SessionApiUtil = require('../util/session_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const hashHistory = require('react-router').hashHistory;
const SessionConstants = require('../constants/session_constants.js');
const InvestmentUtil = require('../util/investment_util.js');

const InvestmentActions = {

  fetchInvestment(id){
    InvestmentUtil.fetchInvestment(id, this.receiveInvestment);
  },

  fetchInvestments(){
    InvestmentUtil.fetchInvestments(this.receiveInvestments);
  },

  createInvestment(investment){
    InvestmentUtil.createInvestment(investment, this.receiveInvestment);
  },

  updateInvestment(investment){
    InvestmentUtil.updateInvestment(investment, this.receiveInvestment);
  },

  receiveInvestments(investments) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.RECEIVE_INVESTMENTS,
      investments: investments
    });
  },

  receiveInvestment(investment) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.RECEIVE_INVESTMENT,
      investment: investment
    });
  }
};

module.exports = InvestmentActions;
