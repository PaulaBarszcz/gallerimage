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
        this.photoInfoArray = [];
        fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=06ce4eb5530566dd57098561c9f2fa4f&tags=dog&text=dog&format=json&nojsoncallback=1&api_sig=d30d835510c9a69538b36843af036c80")
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
                (resultusers) => {

                    let identifNumber = 0;

                    for (var i = 0; i < this.allPhotos.length; i++) {

                        fetch(`https://api.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=06ce4eb5530566dd57098561c9f2fa4f&user_id=${this.allPhotos[i].owner}&format=json&nojsoncallback=1`)
                            .then(res => res.json())
                            .then(
                                (resultusers) => {

                                    let desc = Object.values(resultusers.person.description)[0];
                                    let username = Object.values(resultusers.person.username)[0];
                                    let date = Object.values(resultusers.person.photos.firstdatetaken)[0];
                                    this.photoInfoArray.push({
                                        "id": identifNumber,
                                        "desc": desc,
                                        "username": username,
                                        "date": date
                                    });

                                    identifNumber++;
                                },
                                (error) => {
                                    this.setState({
                                        isLoaded: true,
                                        error
                                    });
                                },
                            )
                    }
                })
            .then(
                console.log('this.photoInfoArray', this.photoInfoArray),
                console.log('this.photoInfoArray', this.photoInfoArray['0']),

                console.log('this.photoInfoArray', Object.keys(this.photoInfoArray)),

                //if(dlugosc this.photoInfoArray == 100){this.setState({...})}   - ale jak dobrac sie do tej dlugosci?


                this.setState({
                    isLoaded: true,
                    photoInfo: this.photoInfoArray
                })
            )
    }

    render() {

        const {error, isLoaded, photos, photoInfo} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            this.photoArray = this.state.photos;
            this.photoInfo = this.state.photoInfo;

            return (

                <div className="slides-container">
                    <Carrousel photos={this.photoArray} photoInfo={this.photoInfoArray}/>
                </div>

            );
        }
    }
}

export {Fetcher};