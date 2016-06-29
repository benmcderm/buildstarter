const ProjectUtil = {
  fetchProjects(projects) {
    $.ajax({
      url: "/api/projects",
      dataType: "json",
      data: { projects: projects },
      success: function(projects) {
        ProjectActions.receiveProjects(projects)
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
      success: function(projects) {
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
