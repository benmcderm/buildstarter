const SessionApiUtil = require('../util/session_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const hashHistory = require('react-router').hashHistory;
const SessionConstants = require('../constants/session_constants.js');
const ProjectUtil = require('../util/project_util');

const ProjectActions = {

  fetchProject(id){
    ProjectUtil.fetchProject(id);
  },

  fetchProjects(){
    ProjectUtil.fetchProjects();
  },

  searchProjects(search){
    ProjectUtil.searchProjects(search);
  },

  receiveProjects: function(projects) {
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
