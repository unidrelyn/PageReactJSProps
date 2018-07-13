import React, { Component } from 'react';

import './menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <a href="#">
            <h2 className="Title-logo">Rule of Thumb</h2>
          </a>
        </div>
        <div className="nav-menu">
          <ul className="menu">
            <li className="menu-item">
              <a href="#">Past Trials</a>
            </li>
            <li className="menu-item">
              <a href="#">How It Works</a>
            </li>	  
            <li className="nav-item">
              <a href="#">Log In / Sign Up</a>
            </li>	  	  
          </ul>
          <form className="form-search">	
            <span className="Search-icon">Search</span>
          </form>
        </div>
      </div>									
    );
  }
}

export default Menu;