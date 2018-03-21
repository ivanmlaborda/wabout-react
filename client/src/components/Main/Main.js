import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'

export default class Main extends Component {

  constructor (props) {
    super(props)
    this.state = { shownCollapsible: false, isActive: '' }
  }

  render() {

    return (
      <div className="Main-wrapper">
        <NavBar />
      </div>
    );
  }
}
