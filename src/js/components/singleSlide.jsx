import React from "react";

class SingleSlide extends React.Component {

  render () {

 

  return <div>
  <div>
      <h3>{this.props.imgsrc}</h3>
      <img src={this.props.imgsrc} alt="dog image" />
      </div>
    </div>
   };
}

export {SingleSlide}