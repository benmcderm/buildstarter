//React
const React = require('react');
const ReactDOM = require('react-dom');
const NavBar = require('./navbar');
//Actions
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
//Components
const SplashPage = require('./splash_page')

const App = React.createClass({
  _handleLogOut(){
   SessionActions.logOut();
 },
  render() {
    let logoutButton;
    if (SessionStore.isUserLoggedIn()) {
      logoutButton = <input className="logout-button" type="submit" value="logout" onClick={ this._handleLogOut } />
    }
    return(
      <div>
        <NavBar />
        { logoutButton }
        {this.props.children}
      </div>)
  }
});

module.exports = App;
