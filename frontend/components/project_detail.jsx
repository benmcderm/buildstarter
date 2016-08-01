// React
const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');
const ContributeForm = require('./contribute_form');
const SessionStore = require('../stores/session_store');


const ProjectDetail = React.createClass({
  getInitialState() {
    return ({ project: {}, user: SessionStore.currentUser(), newInvestment: 0 });
  },

  componentDidMount() {
    this.projectListener = ProjectStore.addListener(this.onChange);
    ProjectActions.fetchProject(this.props.params.projectId);
  },

  componentWillUnmount() {
    this.projectListener.remove();
  },

  onChange() {
    this.setState({ project: ProjectStore.find(this.props.params.projectId) });
  },

  investmentChange(e) {
    e.preventDefault();
    this.setState({ newInvestment: e.target.value });
  },

  render() {
    let contribute;
    if (!SessionStore.isUserLoggedIn()) {
      contribute =
        (<div>
          <h2 className="investment-stat">${this.state.project.investment}</h2>
          Investments
          <h2 className="goal-stat">${this.state.project.goal}</h2>
          Goal
          <br></br>
          <h3>Please Log In to Contribute</h3>
        </div>);
    } else {
      contribute = (<ContributeForm
        project={this.state.project}
        newInvestment={this.state.newInvestment}
        investmentChange={this.investmentChange}
      />);
    }
    let goalPercent;
    const goalPercentage = (this.state.project.investment / this.state.project.goal) * 100;
    if (goalPercentage < 0) {
      goalPercent = 0;
    } else if (goalPercentage < 100) {
      goalPercent = goalPercentage;
    } else {
      goalPercent = 100;
    }
    return (
      <div className="project-all">
        <div className="project-detail">
          <h1 className="project-detail-title">{this.state.project.name}</h1>
          <div className="total-progress-bar">
            <div className="progress-bar" style={{ width: `${goalPercent}%` }}></div>
          </div>

          <div className="project-detail-content">
            <div className="project-detail-media">
              <img
                alt="Project"
                className="project-media"
                src={this.state.project.media_url}
              ></img>
            </div>
          </div>

          <div className="project-detail-stats">
            <h2>{this.state.project.rating}</h2>
            Rating
            <h2>{this.state.project.end_date}</h2>
            End Date
            {contribute}
          </div>
        </div>

        <div className="project-detail-description">
          {this.state.project.description}
        </div>
      </div>
    );
  },
});

module.exports = ProjectDetail;
