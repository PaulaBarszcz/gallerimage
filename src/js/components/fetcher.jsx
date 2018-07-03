import React from 'react';
import ReactDOM from 'react-dom';
import {Carrousel} from './carrousel.jsx';

class Fetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      photos: []
    };
  }

  componentDidMount() {
    fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1523e8646661fa3f64e6d84462a2274b&tags=dog&text=dog&has_geo=&format=json&nojsoncallback=1&api_sig=05efd965800a96fe5936f0e4a68a2666")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            photos: result.photos.photo
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    const { error, isLoaded, photos } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      this.photoArray= this.state.photos;

      return (

      <div className="slides-container"> 
        <Carrousel photos={this.photoArray} />
      </div>
      
      );
    }
  }
}

export {Fetcher};