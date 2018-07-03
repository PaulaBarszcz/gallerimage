import React from "react";

class SingleSlide extends React.Component {

  render () {

 

  return <div>
      <h3>{this.props.number}</h3>
      <img src={this.props.src} />
    </div>
   };
}

export {SingleSlide}