
const ProjectUtil = {
  fetchProjects(callback) {
    $.ajax({
      url: "/api/projects",
      dataType: "json",
      success: function(projects) {
        callback(projects);
      },
      error(xhr){
      let errors = $.parseJSON(xhr.responseText).errors
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
      error(xhr){
      let errors = $.parseJSON(xhr.responseText).errors
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
      error(xhr){
      let errors = $.parseJSON(xhr.responseText).errors
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
