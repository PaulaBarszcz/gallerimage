import React from "react";
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
      <p style={{color: 'white'}}> pagewrapper - landing</p>

     
      

    </div>
  };
}

export {Landing}