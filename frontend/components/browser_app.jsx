const React = require('react');
const BrowserIndex = require('./browser_index');

const BrowserApp = React.createClass({

  render () {
    return (
      <div>
        <BrowserIndex />
      </div>
    );
  }

});

module.exports = BrowserApp;
