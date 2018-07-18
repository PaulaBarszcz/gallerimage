import React from "react";
import Slider from "react-slick";

class Carrousel extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      photoInfo: []
    };
  }

  componentWillReceiveProps(){
    this.setState({
      photoInfo: this.props.photoInfo
      })
  }

  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let photos = this.props.photos;


    console.log('photoInfo',this.props.photoInfo);
    console.log('photoInfo.desc',this.props.photoInfo.desc);
    console.log('Object.keys(this.props.photoInfo)',Object.keys(this.props.photoInfo));
    console.log('Object.values(this.props.photoInfo)',Object.values(this.props.photoInfo));


   

    return (
      <div className="fetch-result-container">
        <Slider {...settings}>

          {this.props.photos.map((item,element) => (
            this.imgid = item.id,
            this.userid = item.owner,
            this.imgfarm = item.farm,
            this.imgserver = item.server,
            this.imgsecret = item.secret,
            this.author = this.props.photoInfo[element],
            this.desc = this.props.photoInfo[element],
            this.date = this.props.photoInfo[element],
            this.imgsrc = `https://farm${this.imgfarm}.staticflickr.com/${this.imgserver}/${this.imgid}_${this.imgsecret}.jpg`,
           

            <div key={item.id}>
                <p className='slide-title'>Dog picture #{element+1}/100</p>
                <img src={this.imgsrc} alt="dog image" />
                <p>Author:{this.author}</p>
                <p>Description: {this.desc}</p>
                <p>Date: {this.date}</p>
            </div>
          ))}

        </Slider>
      </div>

    );
  }
}

export {Carrousel}