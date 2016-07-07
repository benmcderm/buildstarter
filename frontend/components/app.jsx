//React
const React = require('react');
const ReactDOM = require('react-dom');
const NavBar = require('./navbar');
const Footer = require('./footer');
const hashHistory = require('react-router').hashHistory;
//Actions
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
//Components
const SplashPage = require('./splash_page');
const SearchIndex = require('./search_index');

const App = React.createClass({
  getInitialState () {
    return({searchActive: false, searchQuery: ""});
  },

  onSearchWasClicked (e) {
    this.setState({searchActive: !this.state.searchActive, searchQuery: ""});
    if(!this.state.searchActive){
      this.setState({searchQuery: ""});
      hashHistory.push('/');
    }
    this.setState({searchQuery: ""});
  },

  getSearchState(){
    return this.state.searchActive ? "" : "-hidden";
  },

  onSearchWasChanged (e) {
    this.setState({searchQuery: e.target.value})
  },

  disableSearch(e){
    this.setState({searchActive: false, searchQuery: ""});
  },

  render() {
    if (this.state.searchActive) {
      return(
        <div>
          <NavBar onSearchClick={this.onSearchWasClicked} onSearchChange={this.onSearchWasChanged} searchState={this.getSearchState} queryString={this.state.searchQuery} />
          <SearchIndex queryString={this.state.searchQuery} disableSearch={this.disableSearch} />
          <Footer />
        </div>)
    } else {
    return(
      <div>
        <NavBar onSearchClick={this.onSearchWasClicked} onSearchChange={this.onSearchWasChanged} searchState={this.getSearchState} queryString={this.state.searchQuery} />
        {this.props.children}
        <Footer />
      </div>)
    }
  }
});

module.exports = App;
