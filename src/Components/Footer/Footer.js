import React, { Component } from 'react';
import NewsLetter from './NewsLetter/NewsLetter';

import Twitter from '../../assets/imagen/twitter.png';
import Facebook from '../../assets/imagen/facebook.png';

import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <NewsLetter />
        <div className="footer">
          <div className="terms">
            <span>Terms and Conditions</span>
            <span>Privacy Policy</span>
            <span>Contact Us</span>							  					
          </div>	
          <div className="follow">
            <span>
              Follow Us							
            </span>
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
          </div>
        </div>
      </div>	 
    );
  }
}

export default Footer;