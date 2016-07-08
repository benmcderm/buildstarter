//React
const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;

//Actions
const ProjectActions = require('../actions/project_actions');
const ProjectStore = require('../stores/project_store');
//Components
const BrowserIndexItem = require('./browser_index_item');

const BrowserIndex = React.createClass({
  getInitialState(){
    return({ projects: ProjectStore.all()})
  },

  componentDidMount(){
    this.projectListener = ProjectStore.addListener(this.handleChange);
    ProjectActions.fetchProjects();
  },

  componentWillUnmount(){
    this.projectListener.remove();
  },

  handleChange(){
    this.setState({projects: ProjectStore.all()})
  },

  commercialClick(e){
    this.setState({projects: ProjectStore.categoryFilter("Commercial")})
  },

  residentialClick(e){
    this.setState({projects: ProjectStore.categoryFilter("Residential")})
  },

  render() {
    let featured;
    if(this.state.projects[0] === undefined){
      featured = <div></div>;
    } else {
      let goalPercent;
      let goalPercentage = (this.state.projects[0].investment / this.state.projects[0].goal)*100;
      if(goalPercentage < 0) {
        goalPercent = 0;
      } else if (goalPercentage < 100) {
        goalPercent = goalPercentage
      }
        else {
        goalPercent = 100;
      }
      featured =
      <div className="featured-project">
        <li className="featured-project-item">
          <div className="featured-project-card">
            <div className="featured-project-card-thumbnail">
              <Link to={`discover/${this.state.projects[0].id}`} className="project-thumbnail-wrap">
                <img alt="Project image" className="project-thumbnail-img" src={this.state.projects[0].media_url} width="100%"></img>
              </Link>
            </div>
            <div className="featured-project-card-right">
            <div className="featured-project-card-content">
              <strong>{this.state.projects[0].name}</strong>
              <br></br>
              {this.state.projects[0].description}
            </div>

            <div className="featured-project-card-footer">
              <div className="total-progress-bar">
                <div className="progress-bar" style={{width:`${goalPercent}%`}}></div>
              </div>
              <h3>Investments: ${numberWithCommas(this.state.projects[0].investment)}</h3>
              <h3>Goal: ${numberWithCommas(this.state.projects[0].goal)}</h3>

            </div>
          </div>
          </div>
        </li>
      </div>;
    }
    return (
      <div>
        <div className="all-categories">
          <div className="project-category" onClick={this.handleChange}>
            <h3 className="project-category-title">All</h3>
          </div>
          <div className="project-category" onClick={this.commercialClick}>
            <h3 className="project-category-title">Commercial</h3>
          </div>
          <div className="project-category" onClick={this.residentialClick}>
            <h3 className="project-category-title">Residential</h3>
          </div>
        </div>
        {featured}
        <ul className="project-list">
        {
          this.state.projects.slice(1).map((mapped_project) => {
            return (<BrowserIndexItem key={mapped_project.id} project={mapped_project} />)
          })
        }
        </ul>
      </div>
    )
  }
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


module.exports = BrowserIndex;
