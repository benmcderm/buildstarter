const React = require('react');
const SessionStore = require('../stores/session_store');
const ProjectActions = require('../actions/project_actions');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const ProjectStore = require('../stores/project_store');

function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ContributeForm = React.createClass({
  getInitialState(){
    return ({ investment: ""})
  },

  handleSubmit(e){
    e.preventDefault();
    const currentProject = this.props.project;
    const projectData = {
     investment: +this.state.investment + +currentProject.investment,
     id: currentProject.id
    }
    ProjectActions.updateProject(projectData);
    this.setState({ investment: ""});
    hashHistory.push(`/discover/${currentProject.id}`);
  },

  investmentChange(e) {
    e.preventDefault();
    this.setState({investment: e.target.value})
  },

  render() {
    return(
      <div className="contribution-form-container">
        <form onSubmit={this.handleSubmit} className="project-contribution">
          <h2 className="investment-stat">${this.props.project.investment}</h2>
          Investments
          <h2 className="goal-stat">${this.props.project.goal}</h2>
          Goal
          <br></br>
          <input onChange={this.investmentChange} type="number" className="investment-field" placeholder="Investment Amount" value={this.state.investment}/>
          <input type="submit" className="invest-project-button" value="Invest in Project" />
        </form>
      </div>
    )
  }
});

module.exports = ContributeForm;
