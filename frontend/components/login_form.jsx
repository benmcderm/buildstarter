const React = require('react');
const SessionActions = require('../actions/session_actions.jsx');

const LoginForm = {
  getInitialState(){
    return({ username: "", password: ""});
  },

  passwordChange(e){
    const newPassword = e.target.value;
    this.setState({ password: newPassword});
  },

  usernameChange(){
    const newUsername = e.target.value;
    this.setState({ username: newUsername});
  },

  handleSubmit(e){
    e.preventDefault();
    const formData = {
      username: this.state.username,
      password: this.state.password
    }
    if (this.props.location.pathname === "/login") {
      SessionActions.logIn(formData);
    } else {
      SessionActions.signUp(formData);
    }
  },

  render(){
    return(<div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.usernameChange}>Username</input>
        <input type="password" onChange={this.passwordChange}>Password</input>
      </form>
    </div>)
  }
};

module.exports = LoginForm;
