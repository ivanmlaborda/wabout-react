import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

export default class Main extends Component {

  render() {
    return (
      <div className="Main-wrapper">
        <NavBar />
        <Footer />
      </div>
    );
  }
}
