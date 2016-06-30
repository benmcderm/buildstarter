//React
const React = require('react');
const ReactDOM = require('react-dom');
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
    console.log(this.state.projects);
  },

  componentWillUnmount(){
    this.projectListener.remove();
  },

  handleChange(){
    this.setState({projects: ProjectStore.all()})
  },

  render() {
    return (<ul className="project-list">
      {
        this.state.projects.map((mapped_project) => {
          return (<BrowserIndexItem key={mapped_project.id} project={mapped_project} />)
        })
      }
      </ul>
    )
  }
})

module.exports = BrowserIndex;
