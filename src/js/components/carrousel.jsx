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

    var photos = this.props.photos;
        console.log('lala',photos[1].id);

    return (
      <Slider {...settings}>

        <div className="fetch-result-container">
        
          {this.props.photos.map(item => (
            this.imgid = item.id,
            console.log('imgid',this.imgid),
            this.userid = item.owner,

            

            this.imgfarm = item.farm,
            this.imgserver = item.server,
            this.imgsecret = item.secret,
            this.imgsrc = `https://farm${this.imgfarm}.staticflickr.com/${this.imgserver}/${ this.imgid}_${this.imgsecret}.jpg`,
            console.log('this.imgsrc',this.imgsrc),

            <SingleSlide key={item.id} imgsrc={this.imgsrc} />
              
         
          ))}
        </div>

     
       
      </Slider>
    );
  }
}

export {Carrousel}