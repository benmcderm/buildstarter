const React = require('react');
const SessionStore = require('../stores/session_store');
const ProjectActions = require('../actions/project_actions');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const ProjectStore = require('../stores/project_store');
const InvestmentStore = require('../stores/investment_store');
const InvestmentActions = require('../actions/investment_actions');
import CountUp from 'react-countup';

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const ContributeForm = React.createClass({

  componentWillReceiveProps() {
    this.appliedInvestment = this.props.project.investment;
  },

  handleSubmit(e) {
    e.preventDefault();
    this.appliedInvestment = +this.props.project.investment + +this.props.newInvestment;
    const currentProject = this.props.project;
    const projectData = {
      investment: +this.props.newInvestment + +currentProject.investment,
      id: currentProject.id,
    };
    ProjectActions.updateProject(projectData);

    const currentUser = SessionStore.currentUser();
    const investmentData = {
      amount: this.props.newInvestment,
      project_id: currentProject.id,
      user_id: currentUser.id,
    };
    InvestmentActions.createInvestment(investmentData);
  },

  render() {
    return (
      <div className="contribution-form-container">
        <form onSubmit={this.handleSubmit} className="project-contribution">
          <h2 id="investment-stat" className="investment-stat">$<CountUp
            start={this.appliedInvestment}
            end={this.props.project.investment}
            duration={2.15}
            useEasing
            separator=","
            decimal=","
          />
          </h2>
          Investments
          <h2 className="goal-stat">${this.props.project.goal}</h2>
          Goal
          <br></br>
          <input
            onChange={this.props.investmentChange}
            type="number"
            className="investment-field"
            placeholder="Investment Amount"
            value={this.props.newInvestment}
          />
          <input type="submit" className="invest-project-button" value="Invest in Project" />
        </form>
      </div>
    );
  },
});

module.exports = ContributeForm;
