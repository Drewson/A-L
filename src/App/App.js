import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainHeader from './../partials/header'
import MainFooter from './../partials/footer'

import './../styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <MainHeader />
          <div style={{marginTop:'185px'}}>
            { this.props.children }
          </div>
        <MainFooter />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
