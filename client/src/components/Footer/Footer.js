import React, { Component } from 'react';

export default class Footer extends Component {

  constructor (props) {
    super(props)
    this.state = { shownCollapsible: false, isActive: '' }
  }

  render() {

    return (
      <div className="Footer-wrapper">
        <footer>
          <div class="container">
            <div class="content has-text-centered">
              <p>
                Wabout 2018 - ivanmartinezlaborda®
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
