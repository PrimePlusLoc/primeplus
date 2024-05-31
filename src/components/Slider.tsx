import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image2 from '../assets/primeplus2020-novoscomil.png';
import './Slide.css';  // Import the CSS file

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
    <div className="slide-container">
      <Slider {...settings}>
        <div className="slide-image-container">
          <img src={image2} alt="Slide 2" className="slide-image" />
        </div>
        <div className="slide-image-container">
          <img src={image2} alt="Slide 2" className="slide-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
