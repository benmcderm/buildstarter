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
            <div className="total-progress-bar">
              <div className="progress-bar" style={{width:`${(this.props.project.investment / this.props.project.goal)*100}%`}}></div>
            </div>
            <h3>Investments: ${numberWithCommas(this.props.project.investment)}</h3>
            <h3>Goal: ${numberWithCommas(this.props.project.goal)}</h3>
          </div>
        </div>
      </li>
    )
  }
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = BrowserIndexItem;
