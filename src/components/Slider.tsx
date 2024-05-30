import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../assets/logo.png';

const Slide: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={logo} alt="Slide 1" />
      </div>
      <div>
        <img src={logo} alt="Slide 2" />
      </div>
      <div>
        <img src={logo} alt="Slide 3" />
      </div>
    </Slider>
  );
};

export default Slide;
