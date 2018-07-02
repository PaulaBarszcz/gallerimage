import React from "react";
import Slider from "react-slick";


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
        <div>
          <h3>1</h3>
          <img src="../images/cat.jpeg" />
        </div>
        <div>
          <h3>2</h3>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <h3>3</h3>
           <img src="../images/cat.jpeg" />
        </div>
        <div>
          <h3>4</h3>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <h3>5</h3>
           <img src="../images/cat.jpeg" />
        </div>
        <div>
          <h3>6</h3>
          <img src="http://placekitten.com/g/400/200" />
        </div>
      </Slider>
    );
  }
}

export {Carrousel}