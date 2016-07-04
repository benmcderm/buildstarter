const React = require('react');

const ProjectForm = React.createClass({
  handleSubmit(e){
    e.preventDefault();
  },

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="project-form">
        <input type="text" placeholder="Project Name" />
        <input type="text" placeholder="Street Address" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
        <input type="text" placeholder="Zip Code" />
        <input type="text" placeholder="Description" />
        <input type="text" placeholder="Upload" />
        <input type="hidden" value={this.currentUser} />
        <input type="submit" value="Create Project" />
      </form>
    )
  }
});

module.exports = ProjectForm;
