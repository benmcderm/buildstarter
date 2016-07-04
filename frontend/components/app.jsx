//React
const React = require('react');
const ReactDOM = require('react-dom');
const NavBar = require('./navbar');
const Footer = require('./footer');
//Actions
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
//Components
const SplashPage = require('./splash_page')

const App = React.createClass({
  render() {
    return(
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>)
  }
});

module.exports = App;
