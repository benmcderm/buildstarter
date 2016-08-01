const React = require('react')
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const ProjectStore = require('../stores/project_store');
const SessionActions = require('../actions/session_actions');
const ProjectActions = require('../actions/project_actions');
const SearchIndexItem = require('./search_index_item');

const SearchIndex = React.createClass({
  getInitialState() {
    return ({ projects: {}, results: [] });
  },

  componentDidMount() {
    this.projectListener = ProjectStore.addListener(this.onChange);
    ProjectActions.fetchProjects();
    this.setState({ projects: ProjectStore.all() });
  },

  componentWillReceiveProps(props) {
    const string = props.queryString;
    this.findSearchResults(string);
  },

  componentWillUnmount() {
    this.projectListener.remove();
  },

  onChange() {
    this.setState({ projects: ProjectStore.all() });
  },

  findSearchResults(string) {
    if (string === '') {
      this.setState({ results: [] });
      return;
    }
    const matchedProjects = [];
    const allProjects = this.state.projects;
    Object.keys(allProjects).forEach((key) => {
      if (allProjects[key].name.toLowerCase().includes(string.toLowerCase()) ||
      allProjects[key].description.toLowerCase().includes(string.toLowerCase()) ||
      allProjects[key].rating.toLowerCase().includes(string.toLowerCase()) ||
      allProjects[key].category.toLowerCase().includes(string.toLowerCase())
    ) {
        matchedProjects.push(allProjects[key]);
      }
      this.setState({ results: matchedProjects });
    });
  },

  render() {
    if (this.state.results.length === 0) {
      return (<div className="empty-results">
        <div>
          <h2 className="results-title">Common Searches:</h2>
          <ul className="results-title-list">
            <li>
              "123 Jane St"
            </li>
            <li>
              "Apartment Building"
            </li>
            <li>
              "Commercial" or "Residential"
            </li>
          </ul>
        </div>
      </div>);
    } else {
      return (<ul className="project-list">
      {
        this.state.results.map((mappedProject) => {
          return (
            <SearchIndexItem
              disableSearch={this.props.disableSearch}
              key={mappedProject.id}
              project={mappedProject}
            />);
        })
      }
    </ul>
  );
    }
  },
});

module.exports = SearchIndex;
