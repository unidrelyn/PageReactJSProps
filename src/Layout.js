import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';

class Layout extends Component {
  render() {
    return (
        <div className="layout">
            <Header />
            <Container />
            <Footer />
        </div>
    );
  }
}

export default Layout;
