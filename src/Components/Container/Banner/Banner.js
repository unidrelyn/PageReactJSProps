import React, { Component } from 'react';

import './banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner-tittle">
            <p>Speak out. Be heard</p>
            <p>Be counted</p>
        </div>
        <div className="banner-article">
          <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public</p>
        </div>
      </div>
    );
  }
}

export default Banner;