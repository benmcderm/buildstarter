//React
const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');
const ContributeForm = require('./contribute_form')

const ProjectDetail = React.createClass({
  getInitialState() {
    return ({project: {}})
  },

  componentDidMount() {
    this.projectListener = ProjectStore.addListener(this.onChange)
    ProjectActions.fetchProject(this.props.params.projectId)
  },

  componentWillUnmount() {
    this.projectListener.remove();
  },

  onChange() {
    this.setState({project: ProjectStore.find(this.props.params.projectId)})
  },

  render() {
    console.log('detail rendered')
    
    return (
      <div className="project-detail">
        <div className="project-detail-content">
          <h1 className="project-detail-title">{this.state.project.name}</h1>

          <div className="project-detail-media">
            <img alt="Project image" className="project-media" src={this.state.project.media_url}></img>
            <div className="project-detail-description">
              {this.state.project.description}
            </div>
          </div>

          <div className="project-detail-stats">

          </div>
            <ContributeForm project={this.state.project}/>
        </div>
      </div>
    )
  }
});

module.exports = ProjectDetail;
