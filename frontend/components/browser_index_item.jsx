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
            <Link to={`discover/${this.props.project.id}`} className="project-thumbnail-wrap">
              <img alt="Project image" className="project-thumbnail-img" src={this.props.project.media_url} width="100%"></img>
            </Link>
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
