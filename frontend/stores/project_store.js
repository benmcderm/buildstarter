const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants')

const ProjectStore = new Store(AppDispatcher);

let _projects = {};

const resetProjects = function(projects) {
  _projects = {};
  for (var i = 0; i < projects.length; i++) {
    _projects[projects[i].id] = projects[i];
  }
};

const resetProject = function(project) {
  _projects[project.id] = project;
};

const removeProject = function(project) {
  delete _projects[project.id]
};

ProjectStore.all = function () {
  results = [];
  for (var i in _projects) {
    if (_projects.hasOwnProperty(i)) {
      results.push(_projects[i]);
    }
  }
  return results;
};


ProjectStore.__onDispatch = payload => {
  switch(payload.actionType) {
    case SessionConstants.RECEIVE_PROJECTS:
      resetProjects(payload.projects);
      ProjectStore.__emitChange();
      break;
    case SessionConstants.RECEIVE_PROJECT:
    	resetProject(payload.project);
      ProjectStore.__emitChange();
      break;
    case SessionConstants.RECEIVE_SEARCH:
    	searchProjects(projects)
      ProjectStore.__emitChange();
      break;
  }
};

module.exports = ProjectStore;
