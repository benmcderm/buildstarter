const React = require('react')
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');

const NavBar = React.createClass({
  greeting(){
    if (SessionStore.isUserLoggedIn()) {
    	return (
        <header className="navBar">
          <div className="navLeft">
            <Link to="/discover" className="discover-link"><h4>Discover</h4></Link>
            <Link to="/build" className="build-link"><h4>Build</h4></Link>
          </div>
          <div className="navMiddle">
            <Link to="/" className="header-link"><h2>BuildStarter</h2></Link>
          </div>
          <div className="navRight">
            <Link to="api/users/show" className="signup-link"><h4>{SessionStore.currentUser().username}</h4></Link>
          </div>
        </header>
    	);
    } else {
      return (
        <header className="navBar">
          <div className="navLeft">
            <Link to="/discover" className="discover-link"><h4>Discover</h4></Link>
            <Link to="/build" className="build-link"><h4>Build</h4></Link>
          </div>
          <div className="navMiddle">
            <Link to="/" className="header-link"><h2>BuildStarter</h2></Link>
          </div>
          <div className="navRight">
            <Link to="/login" className="login-link"><h4>Log In</h4></Link>
            <Link to="/sign-up" className="signup-link"><h4>Sign Up</h4></Link>
          </div>
        </header>
      );
    }
   },

  render() {
    return (
      <div>
        { this.greeting() }
      </div>
    );
  }
});

module.exports = NavBar;
