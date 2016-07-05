const React = require('react');
const SessionStore = require('../stores/session_store');
const ProjectActions = require('../actions/project_actions');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;


const ProjectForm = React.createClass({
  getInitialState(){
    const currentUserId = SessionStore.currentUser().id;
    return ({ name: "", description:"", street_address:"", city:"", state:"", zip_code:"", media_url:"", author_id:currentUserId, archived:false})
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
    ProjectActions.createProject(projectData);
    hashHistory.push("/");
  },

  nameChange(e) {
    e.preventDefault();
    this.setState({name: e.target.value})
  },

  streetChange(e) {
    e.preventDefault();
    this.setState({street_address: e.target.value})
  },

  cityChange(e) {
    e.preventDefault();
    this.setState({city: e.target.value})
  },

  stateChange(e) {
    e.preventDefault();
    this.setState({state: e.target.value})
  },

  zipChange(e) {
    e.preventDefault();
    this.setState({zip_code: e.target.value})
  },

  descriptionChange(e) {
    e.preventDefault();
    this.setState({description: e.target.value})
  },

  mediaChange(e) {
    e.preventDefault();
    this.setState({media_url: e.target.value})
  },

  render() {
    return(
      <div className="form-container">
        <h2>Create a New Project</h2>
        <form onSubmit={this.handleSubmit} className="project-form">
          <input onChange={this.nameChange} type="text" placeholder="Project Name" value={this.state.name}/>
          <input onChange={this.streetChange} type="text" placeholder="Street Address" />
          <input onChange={this.cityChange} type="text" placeholder="City" />
          <input onChange={this.stateChange} type="text" placeholder="State" />
          <input onChange={this.zipChange} type="text" placeholder="Zip Code" />
          <input onChange={this.descriptionChange} type="text" placeholder="Description" />
          <input onChange={this.mediaChange} type="text" placeholder="Image / Video URL" />
          <input type="submit" className="create-project-button" value="Create Project" />
        </form>
      </div>
    )
  }
});

module.exports = ProjectForm;
