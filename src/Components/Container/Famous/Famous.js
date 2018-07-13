import React, { Component } from 'react';

class Famous extends Component {
  render() {
    return (
      <div>SOY La Famous
        <span className="Message-title">{this.props.character} </span>
      </div>
    );
  }
}

export default Famous;