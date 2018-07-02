import React from 'react';
import ReactDOM from 'react-dom';


class Geolocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: ""

    };
  }

  componentDidMount() {

    // fetch("data/batteries.json").then(r => r.json()).then(response => {

    //   this.setState({
    //     batteries: response
    //   })
    //   this.batteries = response;

    //   this.populateOptions();

    // });
  }

 


  render() {

      return <div>
       <p style={{color: 'white'}}>Geolocation</p>
        
      </div>
    }
}

export {Geolocation}
