const React = require('react');
const ReactDOM = require('react-dom');
const SessionStore = require('../stores/session_store');


const ProfilePage = React.createClass({
  render: function () {
    return (
      <div className="profile-page">
        <h1 className="profile-title">{SessionStore.currentUser().username}</h1>
      </div>
    );
  }
});

module.exports = ProfilePage;
