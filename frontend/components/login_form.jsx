const React = require('react');
const SessionActions = require('../actions/session_actions');

const LoginForm = React.createClass({
  getInitialState(){
    return({ username: "Username", password: "Password"});
  },

  passwordChange(e){
    const newPassword = e.target.value;
    this.setState({ password: newPassword});
  },

  usernameChange(e){
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

  formType() {
    return this.props.location.pathname.slice(1);
  },

  render(){
    let header;
    let submitButton;
    if (this.formType() === "login") {
      header = <h2 className="login-form-title">Login</h2>
      submitButton = <input type="submit" className="login-submit" value="Log In" />
    } else {
      header = <h2 className="login-form-title">Sign Up</h2>
      submitButton = <input type="submit" className="signup-submit" value="Sign Up" />
    };
    return(<div>
      <form onSubmit={this.handleSubmit}>
        <div className="login-form">
          {header}
          <input className="login-username" type="text" value={this.state.username} onChange={this.usernameChange}  />
          <input className="login-password" type="text" onChange={this.passwordChange} value={this.state.password} />
          {submitButton}
        </div>
      </form>
    </div>)
  }
});

module.exports = LoginForm;
