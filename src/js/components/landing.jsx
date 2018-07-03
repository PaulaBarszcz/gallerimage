import React from "react";
import {Carrousel} from './carrousel.jsx';
import {Fetcher} from './fetcher.jsx';
import {
  Router,
  PropsRoute,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  createMemoryHistory
} from 'react-router';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return <div className="page-wrapper">
    <section> 
      <p style={{color: 'white'}}> pagewrapper - landing</p>

      <div className="fetch-container"> 
        <Fetcher />
      </div>


     

    </section>

     
      

    </div>
  };
}

export {Landing}