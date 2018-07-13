import React, { Component } from 'react';

import './newsletter.css'

class NewsLetter extends Component {
  render() {
    return (
      <div className="newsletter">
        <div className="news-text">
						<p>
							Is there anyone else you would want us to add ? 					
						</p>
					</div>
					<div className="news-button">
						<button className="submit-news">Submit a Name</button>
					</div>
      </div>
    );
  }
}

export default NewsLetter;