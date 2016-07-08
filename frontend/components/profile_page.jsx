const React = require('react');
const ReactDOM = require('react-dom');
const SessionStore = require('../stores/session_store');
const InvestmentActions = require('../actions/investment_actions');
const InvestmentStore = require('../stores/investment_store');
const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');


const ProfilePage = React.createClass({
  getInitialState(){
  return({ investments: [], projects: [], user: SessionStore.currentUser()})
},

  componentDidMount(){
    this.investmentListener = InvestmentStore.addListener(this.onChange)
    this.projectListener = ProjectStore.addListener(this.onChange)
    InvestmentActions.fetchInvestments();
    ProjectActions.fetchProjects();
  },

  componentWillUnmount(){
    this.investmentListener.remove();
    this.projectListener.remove();
  },

  onChange(){
    const filteredInvestments = InvestmentStore.userFilter(this.state.user);
    this.setState({investments: InvestmentStore.all(), projects: ProjectStore.all()});
  },

  render: function () {
    if (this.state.investments === [] || this.state.projects === []) {
      return (
        <div className="profile-page">
          <h1 className="profile-title">{SessionStore.currentUser().username}</h1>
        </div>
      );
    } else {
    return (
      <div className="profile-page">
        <h1 className="profile-title">{SessionStore.currentUser().username}</h1>
        <h3 className="investment-title">Recent Investments</h3>
        <div className="investment-list">
        {
          this.state.investments.map((inv)=> {
            let currentProj = ProjectStore.find(inv.project_id);
            return (<div key={inv.id} className="investment-list-item">${inv.amount}   -   {currentProj.name}</div>)
          })
        }
        </div>
      </div>
    );
  }
}
});

module.exports = ProfilePage;
