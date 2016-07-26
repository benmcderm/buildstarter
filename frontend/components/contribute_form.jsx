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
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ContributeForm = React.createClass({
  getInitialState(){
    return ({ investment: 0, newInvestment: 0})
  },

  handleSubmit(e){
    e.preventDefault();
    this.setState({ newInvestment: e.target.value});
    const currentProject = this.props.project;
    const projectData = {
     investment: +this.state.newInvestment + +currentProject.investment,
     id: currentProject.id
    }
    ProjectActions.updateProject(projectData);

    const currentUser = SessionStore.currentUser();
    const investmentData = {
     amount: this.state.investment,
     project_id: currentProject.id,
     user_id: currentUser.id
    }
    InvestmentActions.createInvestment(investmentData);

    this.setState({ investment: 0, newInvestment: 0});
    hashHistory.push(`/discover/${currentProject.id}`);
  },

  investmentChange(e) {
    e.preventDefault();
    this.setState({investment: e.target.value, newInvestment: e.target.value})

  },

  render() {
    return(
      <div className="contribution-form-container">
        <form onSubmit={this.handleSubmit} className="project-contribution">
          <h2 id="investment-stat" className="investment-stat">$<CountUp
              start={this.props.project.investment}
              end={parseInt(this.props.project.investment) + parseInt(this.state.newInvestment)}
              duration={2.75}
              useEasing={true}
              separator=","
              decimal=","
            />
          </h2>
          Investments
          <h2 className="goal-stat">${this.props.project.goal}</h2>
          Goal
          <br></br>
          <input onChange={this.investmentChange} type="number" className="investment-field" placeholder="Investment Amount" value={this.state.newInvestment}/>
          <input type="submit" className="invest-project-button" value="Invest in Project" />
        </form>
      </div>
    )
  }
});

module.exports = ContributeForm;
