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
    this.setState({investments: filteredInvestments, projects: ProjectStore.all()});
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
        <ul className="investment-list">
        {
          this.state.investments.map((inv)=> {
            let currentProj = ProjectStore.find(inv.project_id);
            return (<li key={inv.id} className="investment-list-item"><h2 className="investment-list-amount">${inv.amount}</h2><h2 className="investment-list-name">{currentProj.name}</h2></li>)
          })
        }
      </ul>
      </div>
    );
  }
}
});

module.exports = ProfilePage;
