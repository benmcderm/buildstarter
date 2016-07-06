const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants')

const ProjectStore = new Store(AppDispatcher);

let _projects = {};
let _search = {};

const resetProjects = function(projects) {
  _projects = {};
  for (var i = 0; i < projects.length; i++) {
    _projects[projects[i].id] = projects[i];
  }
};

const searchProjects = function(projects) {
  _search = {};
  for (var i = 0; i < projects.length; i++) {
    _search[projects[i].id] = projects[i];
  }
};

const resetProject = function(project) {
  _projects[project.id] = project;
};

const removeProject = function(project) {
  delete _projects[project.id]
};

ProjectStore.find = function (id) {
  return _projects[id];
};

ProjectStore.all = function () {
  let results = [];
  for (var i in _projects) {
    if (_projects.hasOwnProperty(i)) {
      results.push(_projects[i]);
    }
  }
  return results;
};


ProjectStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case SessionConstants.RECEIVE_PROJECTS:
      resetProjects(payload.projects);
      break;

    case SessionConstants.RECEIVE_PROJECT:
    	resetProject(payload.project);
      break;

    case SessionConstants.RECEIVE_SEARCH:
    	searchProjects(payload.project)
      break;
  }
  this.__emitChange();
};

module.exports = ProjectStore;
