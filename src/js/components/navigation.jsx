import React from 'react';
import {
  IndexLink,
  Link
} from 'react-router';

class Navigation extends React.Component {
  constructor(props) {
    super(props)
  }

  handleNavClick = (e) => {
    let body = document.querySelector("body")
    body.classList.toggle("nav-show");
    e.stopPropagation();
  };


  render() {

    return <div className="divNav">
      <div className="page-wrapper">
        <nav>
          <ul className="main-nav">
            <li className="menuLi"><IndexLink to="/" activeClassName="active-tab">GALLERIMAGE - Home</IndexLink></li>
            <li className="menuLi"><IndexLink to="/search" activeClassName="active-tab">Search</IndexLink>
            </li>
            <li className="menuLi"><IndexLink to="/geolocation" activeClassName="active-tab">Geolocation</IndexLink></li>
          </ul>
        </nav>
      </div>
      {this.props.children}
      
    </div>
  }
}

export {Navigation}