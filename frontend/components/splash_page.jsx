const React = require('react');
const ReactDOM = require('react-dom');
const Slider = require('react-slick');


const SplashPage = React.createClass({
  render: function () {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5500,
      arrows: false
    };
    return (
      <div className="splash-div">
        <h2 className="splash-header">Invest in real estate with others</h2>
      <Slider {...settings} className="slider">
        <div><img src="http://res.cloudinary.com/di7w4wcnw/image/upload/v1467764510/Screen_Shot_2016-07-05_at_5.20.11_PM_dnm6u0.png"></img></div>
        <div><img src="http://res.cloudinary.com/di7w4wcnw/image/upload/v1467764499/Screen_Shot_2016-07-05_at_5.19.13_PM_ix5158.png"></img></div>
        <div><img src="http://res.cloudinary.com/di7w4wcnw/image/upload/v1467764518/Screen_Shot_2016-07-05_at_5.18.46_PM_f9lxhy.png"></img></div>
      </Slider>
      </div>
    );
  }
});

module.exports = SplashPage;
