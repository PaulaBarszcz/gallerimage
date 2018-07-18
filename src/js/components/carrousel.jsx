import React from "react";
import Slider from "react-slick";

class Carrousel extends React.Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let photos = this.props.photos;
    let photoInfo = this.props.photoInfo;

    console.log(photoInfo);

    return (
      <div className="fetch-result-container">
        <Slider {...settings}>

          {this.props.photos.map((item,element) => (
            this.imgid = item.id,
            this.userid = item.owner,
            this.imgfarm = item.farm,
            this.imgserver = item.server,
            this.imgsecret = item.secret,
            this.imgsrc = `https://farm${this.imgfarm}.staticflickr.com/${this.imgserver}/${this.imgid}_${this.imgsecret}.jpg`,

            <div key={item.id}>
                <p className='slide-title'>Dog picture #{element+1}/100</p>
                <img src={this.imgsrc} alt="dog image" />
            </div>
          ))}

        </Slider>
      </div>

    );
  }
}

export {Carrousel}