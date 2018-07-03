import React from 'react';
import ReactDOM from 'react-dom';
import {Carrousel} from './carrousel.jsx';

class Fetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      photos: [],
      users: []
    };
  }

  componentDidMount() {
    fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1523e8646661fa3f64e6d84462a2274b&tags=dog&text=dog&has_geo=&format=json&nojsoncallback=1&api_sig=05efd965800a96fe5936f0e4a68a2666")
      .then(res => res.json())
      .then(
        (result) => {
          this.allPhotos = result.photos.photo;
          this.setState({
            isLoaded: true,
            photos: result.photos.photo
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      .then(
        (resultusers) =>  {   
        console.log(this.allPhotos);

        for (var i=0; i<this.allPhotos.length; i++) {

          fetch(`https://api.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=1523e8646661fa3f64e6d84462a2274b&user_id=${this.allPhotos[i].owner}&format=json&nojsoncallback=1&auth_token=72157670792491088-fecc059fbd3d44cb&api_sig=8545aa490a24023369ac23219cb1bc90`)
            .then(res => res.json())
            .then(
              (resultusers) => {

                console.log(resultusers);
                
                this.setState({
                  isLoaded: true,
                  users: resultusers
                });
              },
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
          )
          
        }

        return resultusers

        })
      


    



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