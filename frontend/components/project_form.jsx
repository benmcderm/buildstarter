const React = require('react');

const ProjectForm = React.createClass({
  getInitialState(){
    return ({ name: "", description:"", street_address:"", city:"", state:"", zip_code:"", media_url:"", author_id:"", archived:false})
  },

  handleSubmit(e){
    e.preventDefault();
    const projectData = {
     name: this.state.name,
     description: this.state.description,
     street_address: this.state.street_address,
     city: this.state.city,
     state: this.state.state,
     zip_code: this.state.zip_code,
     media_url: this.state.media_url,
     author_id: this.state.author_id,
     archived: this.state.archived
    }

  },

  nameChange(e) {
    e.preventDefault();
    this.setState({name: e.target.value})
  },

  streetChange(e) {

  },

  cityChange(e) {

  },

  stateChange(e) {

  },

  zipChange(e) {

  },

  descriptionChange(e) {

  },

  nameChange(e) {

  },

  render() {
    return(
      <div className="form-container">
        <h2>Create a New Project</h2>
        <form onSubmit={this.handleSubmit} className="project-form">
          <input onChange={this.nameChange} type="text" placeholder="Project Name" />
          <input onChange={this.streetChange} type="text" placeholder="Street Address" />
          <input onChange={this.cityChange} type="text" placeholder="City" />
          <input onChange={this.stateChange} type="text" placeholder="State" />
          <input onChange={this.zipChange} type="text" placeholder="Zip Code" />
          <input onChange={this.descriptionChange} type="text" placeholder="Description" />
          <input onChange={this.nameChange} type="text" placeholder="Upload" />
          <input type="hidden" value={this.currentUser} />
          <input type="submit" className="create-project-button" value="Create Project" />
        </form>
      </div>
    )
  }
});

module.exports = ProjectForm;
