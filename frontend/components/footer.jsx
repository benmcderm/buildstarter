const React = require('react')
const Link = require('react-router').Link;

const Footer = React.createClass({

  render() {
    return (
      <footer className="footer">
        <div className="footer-total">
          <div className="footer-left-links">
            <h3 className="footer-title">About</h3>
            <ul className="footer-list">
              <li>
                These Things
              </li>
              <li>
                Will Be
              </li>
              <li>
                Links
              </li>
            </ul>
          </div>
          <div className="footer-right-links">
            <h3 className="footer-title">Hello</h3>
            <ul className="footer-list">
              <li>
                Test right
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
