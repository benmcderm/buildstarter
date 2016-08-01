// React
const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;

const BrowserIndexItem = React.createClass({
  transformPic(url, w, h, params) {
    if (params === undefined) {
      params = '';
    }
    const query = `/upload/w_${w},h_${h},c_fill${params}`;
    return url.split('/upload').join(query);
  },

  render() {
    let goalPercent;
    const goalPercentage = (this.props.project.investment / this.props.project.goal) * 100;
    if (goalPercentage < 0) {
      goalPercent = 0;
    } else if (goalPercentage < 100) {
      goalPercent = goalPercentage;
    } else {
      goalPercent = 100;
    }
    let url = this.transformPic(this.props.project.media_url, 288, 200);
    return (
      <li className="project-list-item">
        <div className="project-card">

          <div className="project-card-thumbnail">
            <Link to={`discover/${this.props.project.id}`} className="project-thumbnail-wrap">
              <img alt="Project" className="project-thumbnail-img" src={url} width="100%"></img>
            </Link>
          </div>

          <div className="project-card-content">
            <strong>{this.props.project.name}</strong>
            <br></br>
            {this.props.project.description}
          </div>

          <div className="project-card-footer">
            <div className="total-progress-bar">
              <div className="progress-bar" style={{ width: `${goalPercent}%` }}></div>
            </div>
            <h3>Investments: ${numberWithCommas(this.props.project.investment)}</h3>
            <h3>Goal: ${numberWithCommas(this.props.project.goal)}</h3>
          </div>

        </div>
      </li>
    );
  },
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

module.exports = BrowserIndexItem;
