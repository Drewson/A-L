import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainHeader from './partials/header'
import MainFooter from './partials/footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MainHeader />
        
      </MuiThemeProvider>
    );
  }
}

export default App;
