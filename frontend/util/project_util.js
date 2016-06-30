const ProjectActions = require('../actions/project_actions');

const ProjectUtil = {
  fetchProjects() {
    $.ajax({
      url: "/api/projects",
      dataType: "json",
      success(projects) {
        ProjectActions.receiveProjects(projects);
      },
      error() {
        console.log('Error fetching Projects');
      }
    });
  },

  fetchProject(id) {
    $.ajax({
      url: `/api/projects/${id}`,
      dataType: "json",
      success: function(project) {
        ProjectActions.receiveProject(project)
      },
      error() {
        console.log('Error fetching Projects');
      }
    });
  },

  searchProjects(search) {
    $.ajax({
      url: "/api/projects",
      data: { search: search },
      success: function (projects) {
        ProjectActions.receiveSearch(projects)
      }
    });
  }
}

module.exports = ProjectUtil;
