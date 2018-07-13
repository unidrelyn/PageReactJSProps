import React, { Component } from 'react';
import MENU from '../Menu/Menu';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
          <MENU />
          <div className="article">
            <p>What’s your opinion on </p>		
					  <p className="Character">Pope Francis?</p>
						<p className="Description">He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) </p>
						<p className="Link">W<a href={this.props.linkmoreinformation}> More information </a></p>
						<p>Whats Your Verdict?</p>
						<p><span>HandUp</span><span>HandDomd</span></p>
          </div>
          <div className="close">
            <div className="closing">
                <span className="Closing-in">CLOSING IN </span>		
            </div>	
            <div className="days">
              <span className="Number-days">22 days</span>
            </div>
          </div>
      </div>
    );
  }
}

export default Header;