import React from 'react';
import ReactDOM from 'react-dom';

// https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=677f0332a9e20fbbdd0abefde03c3461&tags=dog&text=dog&format=json&nojsoncallback=1&auth_token=72157696959738981-a2d54d53fc4dbde6&api_sig=fcefa8fad5d62840d3cbd9c7197f22b2


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
    fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1523e8646661fa3f64e6d84462a2274b&text=dog&format=json&nojsoncallback=1&api_sig=5c2b92aa0de1b7eb278ba49df1059705")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
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

      console.log(photos);

      return (
        <ul className="fetch-result-container">
          {photos.map(item => (
            <li key={item.id}>
              {item.owner}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export {Fetcher};