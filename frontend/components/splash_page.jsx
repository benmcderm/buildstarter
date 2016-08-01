const React = require('react');
const ReactDOM = require('react-dom');
const Slider = require('react-slick');
const Link = require('react-router').Link;


const SplashPage = React.createClass({
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5500,
      arrows: false,
    };
    return (
      <div className="splash-div">
        <h2 className="splash-header">Invest in real estate with others</h2>
        <Slider {...settings} className="slider">
          <div><Link to={`discover/`} className="splash-link">
            View Current Projects
          </Link><img src="http://res.cloudinary.com/di7w4wcnw/image/upload/v1469815242/slider1_lxh6h3.jpg"></img></div>
          <div><Link to={`discover/`} className="splash-link">
            View Current Projects
          </Link><img src="http://res.cloudinary.com/di7w4wcnw/image/upload/v1469815271/slider2_kfswil.jpg"></img></div>
          <div><Link to={`discover/`} className="splash-link">
            View Current Projects
          </Link><img src="http://res.cloudinary.com/di7w4wcnw/image/upload/v1469815271/slider3_u8o7zh.jpg"></img></div>
        </Slider>
      </div>
    );
  },
});

module.exports = SplashPage;
