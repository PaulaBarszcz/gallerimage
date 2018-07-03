import React from "react";
import Slider from "react-slick";
import {SingleSlide} from './singleSlide.jsx';

class Carrousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>

      <SingleSlide number="1" src="../images/cat.jpeg" />
      <SingleSlide number="2" src="http://placekitten.com/g/400/200" />
       
      </Slider>
    );
  }
}

export {Carrousel}