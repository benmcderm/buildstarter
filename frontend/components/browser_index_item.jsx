//React
const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;

const BrowserIndexItem = React.createClass({
  render() {
    return (
      <li className="project-list-item">
        {this.props.project.name}
        {this.props.project.description}
      </li>
    )
  }
});

module.exports = BrowserIndexItem;
