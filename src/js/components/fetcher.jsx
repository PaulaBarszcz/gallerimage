import React from 'react';
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

                    return result.photos.photo;
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

                    let promises = [];

                    for (let i = 0; i < this.allPhotos.length; i++) {

                        promises.push(fetch(`https://api.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=06ce4eb5530566dd57098561c9f2fa4f&user_id=${this.allPhotos[i].owner}&format=json&nojsoncallback=1`)
                            .then(res => res.json())
                            .then(
                                (result) => {
                                    let desc = Object.values(result.person.description)[0];
                                    let username = Object.values(result.person.username)[0];
                                    let date = Object.values(result.person.photos.firstdatetaken)[0];
                                    resultusers[i].desc = result.person.description._content;
                                    resultusers[i].username = result.person.username._content;
                                    // this.resultusers[i].date = result.person.description;

                                },
                                (error) => {
                                    this.setState({
                                        isLoaded: true,
                                        error
                                    });
                                },
                            )
                        );
                    }

                    return Promise.all(promises)
                        .then(
                            () =>  resultusers
                        );
                })
            .then(
                (resultusers) => {

                    this.setState({
                        isLoaded: true,
                        photoInfo: resultusers
                    })

                }
            )
    }

    render() {

        const {error, isLoaded, photoInfo} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            this.photoArray = this.state.photos;
            this.photoInfo = this.state.photoInfo;

            return (

                <div className="slides-container">
                    <Carrousel photoInfo={this.state.photoInfo}/>
                </div>

            );
        }
    }
}

export {Fetcher};