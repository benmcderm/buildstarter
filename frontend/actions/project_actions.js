const SessionApiUtil = require('../util/session_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const hashHistory = require('react-router').hashHistory;
const SessionConstants = require('../constants/session_constants.js');
const ProjectUtil = require('../util/project_util.js');

const ProjectActions = {

  fetchProject(id){
    ProjectUtil.fetchProject(id, this.receiveProject);
  },

  fetchProjects(){
    ProjectUtil.fetchProjects(this.receiveProjects);
  },

  searchProjects(search){
    ProjectUtil.searchProjects(search, this.receiveSearch);
  },

  receiveProjects(projects) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.RECEIVE_PROJECTS,
      projects: projects
    });
  },

  receiveProject(project) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.RECEIVE_PROJECT,
      project: project
    });
  },

  receiveSearch(projects) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.RECEIVE_SEARCH,
      projects: projects
    });
  },
};

module.exports = ProjectActions;
