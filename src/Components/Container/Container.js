import React, { Component } from 'react';
import Banner from './Banner/Banner';
import FamousList from './FamousList/FamoustList';

//Json
import Data from '../../api.json'

class Container extends Component {
  render() {
    return (
      <div>
        <Banner />
        <h2>Previous Rulings</h2>
        <FamousList famous={Data} />
      </div>
    );
  }
}

export default Container;