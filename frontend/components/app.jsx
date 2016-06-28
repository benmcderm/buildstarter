//React
const React = require('react');
const ReactDOM = require('react-dom');
const NavBar = require('./navbar')

const App = React.createClass({
  render() {
    return(
      <div>
        <NavBar />
        {this.props.children}
      </div>)
  }
});

module.exports = App;
