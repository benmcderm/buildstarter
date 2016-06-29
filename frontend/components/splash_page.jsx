const React = require('react');
const ReactDOM = require('react-dom');

const SplashPage = React.createClass({
  render(){
    return (
      <div>
        <img
          src="http://res.cloudinary.com/di7w4wcnw/image/upload/v1467158729/slate_jxut8o.jpg">
        </img>
        <h1 className="splash-header">Invest Today</h1>
      </div>
    )
  }
});

module.exports = SplashPage;
