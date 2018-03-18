import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="button">
                  <span className="icon">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </span>
                  <span>Tweet</span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary">
                  <span className="icon">
                    <i className="fa fa-download" aria-hidden="true"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
          <div className="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
