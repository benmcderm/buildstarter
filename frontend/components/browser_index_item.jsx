//React
const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;

const BrowserIndexItem = React.createClass({
  render() {
    return (
      <li className="project-list-item">
        <div className="project-card">
          <div className="project-card-thumbnail">

          </div>

          <div className="project-card-content">
            <strong>{this.props.project.name}</strong>
            <br></br>
            {this.props.project.description}
          </div>

          <div className="project-card-footer">

          </div>
        </div>
      </li>
    )
  }
});

module.exports = BrowserIndexItem;
