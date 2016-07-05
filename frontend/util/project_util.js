
const ProjectUtil = {
  fetchProjects(callback) {
    $.ajax({
      url: "/api/projects",
      dataType: "json",
      success: function(projects) {
        callback(projects);
      },
      error() {
        console.log('Error fetching Projects');
      }
    });
  },

  fetchProject(id, callback) {
    $.ajax({
      url: `/api/projects/${id}`,
      dataType: "json",
      success: function(project) {
        callback(project)
      },
      error() {
        console.log('Error fetching Projects');
      }
    });
  },

  createProject(project, callback) {
    $.ajax({
      url: `/api/projects`,
      type: "POST",
      data: { project: project },
      dataType: "json",
      success: function(resp) {
        callback(resp)
      },
      error() {
        console.log('Error creating Project');
      }
    });
  },

  updateProject(project, callback) {
    $.ajax({
      url: `/api/projects/${project.id}`,
      type: "PATCH",
      data: { project: project },
      dataType: "json",
      success: function(resp) {
        callback(resp)
      },
      error() {
        console.log('Error updating Project');
      }
    });
  },

  searchProjects(search, callback) {
    $.ajax({
      url: "/api/projects",
      data: { search: search },
      success: function (projects) {
        callback(projects)
      }
    });
  }
}

module.exports = ProjectUtil;
