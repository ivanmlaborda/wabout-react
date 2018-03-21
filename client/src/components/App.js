import React, { Component } from 'react';
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
