const React = require('react');
const BrowserIndex = require('./browser_index');

const BrowserApp = React.createClass({

  render() {
    return (
      <div className="browser-app">
        <BrowserIndex />
      </div>
    );
  },

});

module.exports = BrowserApp;
