const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const hashHistory = require('react-router').hashHistory;

const LoginForm = React.createClass({

  contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState(){
    return({ username: "Username", password: "Password"});
  },

  componentDidMount(){
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount(){
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn) {
      this.context.router.push("/")
    }
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

  guestLogin(e) {
    e.preventDefault();
    this.setState({username: "guest", password:"password"});
    const formData = {
      username: this.state.username,
      password: this.state.password
    }
    SessionActions.logIn(formData);
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
          <input
            className="login-username"
            type="text"
            placeholder="Username"
            onChange={this.usernameChange}  />
          <input className="login-password"
            type="password"
            placeholder="Password"
            onChange={this.passwordChange} />
          {submitButton}
          <input type="submit" className="signup-submit" value="Guest Login" onClick={this.guestLogin}/>
        </div>
      </form>
    </div>)
  }
});

module.exports = LoginForm;
