import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainHeader from './partials/header'
import MainFooter from './partials/footer'

import './styles.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <MainHeader />
          <MainFooter />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
