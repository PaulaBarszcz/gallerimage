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

        let photoInfo = this.props.photoInfo;

        return (
            <div className="fetch-result-container">
                <Slider {...settings}>

                    {
                        photoInfo.map((item, element) => (
                            this.imgid = item.id,
                            this.userid = item.owner,
                            this.imgfarm = item.farm,
                            this.imgserver = item.server,
                            this.imgsecret = item.secret,
                            this.author = item.username,
                            this.desc = item.desc,

                            this.imgsrc = `https://farm${this.imgfarm}.staticflickr.com/${this.imgserver}/${this.imgid}_${this.imgsecret}.jpg`,

                            <div key={item.id}>
                                <p className='slide-title'>Dog picture #{element + 1}/100</p>
                                <img src={this.imgsrc} alt="dog image"/>
                                <p>Author: {this.author}</p>

                            </div>
                    ))}

                </Slider>
            </div>

        );
    }
}

export {Carrousel}