import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';

//Json
//import Data from '../api.json'

class Layout extends Component {
  render() {
    return (
        <div className="">
            <Header />
            <Container />
            <Footer />
        </div>
    );
  }
}

export default Layout;
