const React = require('react');
const Link = require('react-router').Link;

const Footer = React.createClass({

  render() {
    return (
      <footer className="footer">
        <div className="footer-total">
          <div className="footer-left-links">
            <h3 className="footer-title">What is Buildstarter?</h3>
            <ul className="footer-list">
              <li>
                A project developed
              </li>
              <li>
                by Ben McDermott
              </li>
              <li>
                Capitalizing on
              </li>
              <li>
                the trend
              </li>
              <li>
                of
              </li>
              <li>
                crowdfunding.
              </li>
            </ul>
          </div>
          <div className="footer-left-links">
            <h3 className="footer-title">About Me:</h3>
            <ul className="footer-list">
              <li>
                Software Engineer
              </li>
              <li>
                Salesforce Consultant
              </li>
              <li>
                Product Development
              </li>
              <li>
                App Development
              </li>
              <li>
                Long term traveler
              </li>
              <li>
                Artist
              </li>
              <li>
                Runner
              </li>
            </ul>
          </div>
          <div className="footer-right-links">
            <h3 className="footer-title">Hello</h3>
            <ul className="footer-list">
              <li>
                How are you?
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
  },
});

module.exports = Footer;
