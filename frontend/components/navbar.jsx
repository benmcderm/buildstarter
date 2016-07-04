const React = require('react')
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const NavBar = React.createClass({
  _handleLogOut () {
   SessionActions.logOut();
  },

  getInitialState() {
    return ({greeting: this.greeting()});
  },

  componentDidMount () {
    this.setState({greeting: this.greeting()});
  },

  greeting(){
    let navRight;
    if (SessionStore.isUserLoggedIn()) {
      navRight = <div className="navRight">
        <Link to="/" className="signout-link">
          <div className="logout-hover">
            <h4>{SessionStore.currentUser().username}</h4>
            <input className="logout-button" type="submit" value="Logout" onClick={ this._handleLogOut } />
          </div>
        </Link>
      </div>;
    } else {
      navRight = <div className="navRight">
        <Link to="/login" className="login-link"><h4>Log In</h4></Link>
        <Link to="/sign-up" className="signup-link"><h4>Sign Up</h4></Link>
      </div>;
    }

  	return (
      <header className="navBar">
        <div className="navLeft">
          <Link to="/discover" className="discover-link"><h4>Discover</h4></Link>
          <Link to="/build" className="build-link"><h4>Build</h4></Link>
        </div>
        <div className="navMiddle">
          <Link to="/" className="header-link"><h2>BuildStarter</h2></Link>
        </div>
        { navRight }
      </header>
      );
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
