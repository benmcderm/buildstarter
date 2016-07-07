const React = require('react')
const Link = require('react-router').Link;

const Footer = React.createClass({

  render() {
    return (
      <footer className="footer">
        <div className="footer-total">
          <div className="footer-left-links">
            <h3 className="footer-title">About Us</h3>
            <ul className="footer-list">
              <li>
                What is Buildstarter?
              </li>
              <li>
                Who we are
              </li>
              <li>
                Jobs
              </li>
              <li>
                Press
              </li>
              <li>
                Stats
              </li>
              <li>
                Newsletters
              </li>
              <li>
                Spotlight
              </li>
            </ul>
          </div>
          <div className="footer-left-links">
            <h3 className="footer-title">Help</h3>
            <ul className="footer-list">
              <li>
                FAQ
              </li>
              <li>
                Our Rules
              </li>
              <li>
                Creator Handbook
              </li>
              <li>
                Campus
              </li>
              <li>
                Trust & Safety
              </li>
              <li>
                Support
              </li>
              <li>
                Terms of Use
              </li>
              <li>
                Privacy Policy
              </li>
              <li>
                Cookie Policy
              </li>
            </ul>
          </div>
          <div className="footer-right-links">
            <h3 className="footer-title">Hello</h3>
            <ul className="footer-list">
              <li>
                Blog
              </li>
            </ul>
          </div>
          <div className="footer-right-links">
            <h3 className="footer-title">Discover</h3>
            <ul className="footer-list">
              <li>
                Apartment Buildings
              </li>
              <li>
                Commercial Buildings
              </li>
              <li>
                Residential Buildings
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
