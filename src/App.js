import React, { Component } from 'react';
import './App.css';
import {Toolbar} from 'material-ui/Toolbar';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <Toolbar>
            </Toolbar>
            <img src={require('./tEO.svg')} className="App-logo" alt="logo" />
            <h2>Welcome to A-L</h2>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
