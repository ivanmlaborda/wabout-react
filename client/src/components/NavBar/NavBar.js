import React, { Component } from 'react';

export default class NavBar extends Component {

  constructor (props) {
    super(props)
    this.state = { shownCollapsible: false, isActive: '' }
  }

  _handleClickNavBurger = () => {
    console.log('NavBar Burger Clicked')

    this.state.shownCollapsible
    ? this.setState({ shownCollapsible: !this.state.shownCollapsible, isActive: '' })
    : this.setState({ shownCollapsible: !this.state.shownCollapsible, isActive: 'is-active' })
  }

  render() {

    return (
      <div className="NavBar-wrapper">
        <nav className="navbar is-dark is-fixed-top">
          <div className="navbar-brand">
            <p className="navbar-item NavBar-logo">
              Wabout
            </p>
            <div
               className={"navbar-burger burger " + this.state.isActive}
               data-target="NavBar-menu"
               onClick={this._handleClickNavBurger}
               >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div
            id="NavBar-menu"
            className={"navbar-menu " + this.state.isActive}
            >
            <div className="navbar-start">
              <a className="navbar-item" href="https://bulma.io/">
                Home
              </a>
              <a className="navbar-item" href="https://bulma.io/">
                Help
              </a>
              <a className="navbar-item" href="https://bulma.io/">
                About
              </a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped is-pulled-right">
                  <p className="control">
                    <a className="button is-light">
                      <span className="icon">
                        <i className="fa fa-sign-in"></i>
                      </span>
                      <span>Login</span>
                    </a>
                  </p>
                  <p className="control">
                    <a className="button is-light">
                      <span>Register</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
