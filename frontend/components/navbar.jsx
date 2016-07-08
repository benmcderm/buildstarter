const React = require('react')
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const ProjectStore = require('../stores/project_store');
const SessionActions = require('../actions/session_actions');
const ProjectActions = require('../actions/project_actions');
const ProfilePage = require('./profile_page');


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

  handleSearchClick(e) {
    this.props.onSearchClick(e);
    if (this.props.searchState() === "-hidden") {
      $('.search-input').focus()
    }
  },

  handleSearch(e){
    e.preventDefault();
    this.props.onSearchChange(e);
  },

  greeting(){
    let navRight;
    if (SessionStore.isUserLoggedIn()) {
      navRight = <div className={`navRight`}>
        <a onClick={this.handleSearchClick} className="nav-search" href="#">
          <img src="http://res.cloudinary.com/di7w4wcnw/image/upload/v1467822040/magnifying-glass_rjnbyg.svg"
               height="18px"
               width="18px">
          </img>
        </a>
        <Link to="/" className="signout-link">
          <div className="logout-hover">
            <Link to="/profile" className="username-navbar"><h4 className="username">{SessionStore.currentUser().username}</h4></Link>
          </div>
          <div className="nav-dropdown">
            <Link to="/profile" className="username-navbar">
              <input className="profile-button" type="submit" value="Profile" />
            </Link>
            <input className="logout-button" type="submit" value="Logout" onClick={ this._handleLogOut } />
          </div>
        </Link>
      </div>;
    } else {
      navRight = <div className={`navRight`}>
        <a onClick={this.handleSearchClick} className="nav-search" href="#">
          <img src="http://res.cloudinary.com/di7w4wcnw/image/upload/v1467822040/magnifying-glass_rjnbyg.svg"
               height="18px"
               width="18px">
          </img>
        </a>
        <Link to="/login" className="login-link"><h4>Log In</h4></Link>
        <Link to="/sign-up" className="signup-link"><h4>Sign Up</h4></Link>
      </div>;
    }

  	return (
      <header className={`navBar`}>
        <div className={`navLeft`}>
          <Link to="/discover" className="discover-link"><h4>Discover</h4></Link>
          <Link to="/build" className="build-link"><h4>Build</h4></Link>
        </div>
        <div className={`navMiddle`}>
          <Link to="/" className="header-link"><h2>BuildStarter</h2></Link>
        </div>
        { navRight }
        <div className={`search-navbar${this.props.searchState()}`}>
          <input className="search-input" onChange={this.handleSearch} onKeyDown={this.handleEscape} type="text" placeholder="Search" value={this.props.queryString}></input>
            <a onClick={this.handleSearchClick} className="nav-search-active" href="#">
              <img src="http://res.cloudinary.com/di7w4wcnw/image/upload/v1467822040/magnifying-glass_rjnbyg.svg"
                   height="18px"
                   width="18px">
              </img>
            </a>
        </div>
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
