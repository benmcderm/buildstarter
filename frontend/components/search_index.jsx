const React = require('react')
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const ProjectStore = require('../stores/project_store');
const SessionActions = require('../actions/session_actions');
const ProjectActions = require('../actions/project_actions');
const SearchIndexItem = require('./search_index_item');

const SearchIndex = React.createClass({
  getInitialState() {
    return ({projects: {}, results:[]});
  },

  componentDidMount() {
    this.projectListener = ProjectStore.addListener(this.onChange);
    ProjectActions.fetchProjects();
    this.setState({projects: ProjectStore.all()});
  },

  componentWillReceiveProps(props) {
    let string = props.queryString
    this.findSearchResults(string);
  },

  componentWillUnmount(){
    this.projectListener.remove();
  },

  onChange() {
    this.setState({projects: ProjectStore.all()});
  },

  findSearchResults(string){
    if (string === "") {
      this.setState({results: []});
      return;
    }
    let matchedProjects = [];
    let allProjects = this.state.projects;
    Object.keys(allProjects).forEach((key)=> {
      console.log(allProjects[key]);
      if(allProjects[key].name.toLowerCase().includes(string.toLowerCase()))
        matchedProjects.push(allProjects[key]);
    })
    this.setState({results: matchedProjects});
  },

  render() {
    if(this.state.results.length === 0){
      return(<div className="empty-results">
        <h2 className="results-title">Awaiting your query...</h2>
      </div>)
    } else {
    return (<ul className="project-list">
      {
        this.state.results.map((mapped_project) => {
          return (<SearchIndexItem key={mapped_project.id} project={mapped_project} />)
        })
      }
      </ul>
    )
  }
}
});

module.exports = SearchIndex;
