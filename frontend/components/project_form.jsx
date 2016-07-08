const React = require('react');
const SessionStore = require('../stores/session_store');
const ProjectActions = require('../actions/project_actions');
const ReactRouter = require('react-router');
const LoginForm = require('./login_form');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const Link = require('react-router').Link;


const ProjectForm = React.createClass({
  getInitialState(){
    let currentUserId = SessionStore.currentUser().id;
    return ({ name: "", description:"", investment: 0, goal: "", rating:"", category:"", end_date:"", street_address:"", city:"", state:"", zip_code:"", media_url:"", author_id:currentUserId, archived:false, errors: ""})
  },

  handleSubmit(e){
    e.preventDefault();
    if (!SessionStore.isUserLoggedIn()) {
      this.setState({errors: "You must log in to create a project."})
    } else {
    const projectData = {
     name: this.state.name,
     description: this.state.description,
     street_address: this.state.street_address,
     city: this.state.city,
     state: this.state.state,
     zip_code: this.state.zip_code,
     media_url: this.state.media_url,
     author_id: this.state.author_id,
     archived: this.state.archived,
     goal: this.state.goal,
     investment: this.state.investment,
     rating: this.state.rating,
     end_date: this.state.end_date,
     category: this.state.category
    }
    ProjectActions.createProject(projectData);
    hashHistory.push("/");
  }
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

  goalChange(e) {
    e.preventDefault();
    this.setState({goal: e.target.value})
  },

  ratingChange(e) {
    e.preventDefault();
    this.setState({rating: e.target.value})
  },

  dateChange(e) {
    e.preventDefault();
    this.setState({end_date: e.target.value})
  },

  categoryChange(e) {
    e.preventDefault();
    this.setState({category: e.target.value})
  },

  render() {
    if (SessionStore.isUserLoggedIn()) {
    return(
      <div className="form-container">
        <h2 className="form-title">Create a New Project</h2>
        <div className="form-errors">{this.state.errors}</div>
        <form onSubmit={this.handleSubmit} className="project-form">
          <input onChange={this.nameChange} type="text" placeholder="Project Name" value={this.state.name}/>
          <input onChange={this.streetChange} type="text" placeholder="Street Address" />
          <input onChange={this.cityChange} type="text" placeholder="City" />
          <input onChange={this.stateChange} type="text" placeholder="State" />
          <input onChange={this.zipChange} type="text" placeholder="Zip Code" />
          <input onChange={this.goalChange} type="text" placeholder="Goal" />
          <input onChange={this.ratingChange} type="text" placeholder="Rating" />
          <input onChange={this.categoryChange} type="text" placeholder="Category" />
          <input onChange={this.dateChange} type="text" placeholder="End Date" />
          <input onChange={this.descriptionChange} type="text" placeholder="Description" />
          <input onChange={this.mediaChange} type="text" placeholder="Image / Video URL" />
          <input type="submit" className="create-project-button" value="Create Project" />
        </form>
      </div>
    );
    } else {
      return (
          <div className="login-to-create">
              <h2>Please Log In or Sign Up to create a project</h2>
              <div className="login-link-container"><Link to={'/login'} className="project-login-link">Log In</Link></div>
          </div>
      );
    }
  }
});

module.exports = ProjectForm;
