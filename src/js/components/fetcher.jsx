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
      photoInfo: []
    };
  }

  componentDidMount() {
    fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5530b236f1442ae162669f80660df592&tags=dog&text=dog&format=json&nojsoncallback=1")
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

      let photoInfoArray = [];

      for (var i=0; i<this.allPhotos.length; i++) {

        fetch(`https://api.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=5530b236f1442ae162669f80660df592&user_id=${this.allPhotos[i].owner}&format=json&nojsoncallback=1`)
        .then(res => res.json())
        .then(
          (resultusers) => {
            let desc = Object.values(resultusers.person.description)[0];
            let username = Object.values(resultusers.person.username)[0];
            let date = Object.values(resultusers.person.photos.firstdatetaken)[0];
            photoInfoArray.push({"desc": desc, "username": username, "date": date});
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        ) 
      }

      this.setState({
        isLoaded: true,
        photoInfo: photoInfoArray
      })

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
      this.photoInfo = this.state.photoInfo;

      return (

      <div className="slides-container"> 
        <Carrousel photos={this.photoArray} photoInfo={this.photoInfo} />
      </div>
      
      );
    }
  }
}

export {Fetcher};