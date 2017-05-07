import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FontAwesome from 'react-fontawesome';

import '../App.css';

class MainHeader extends Component {
  render() {
    return (
    <div className='App-header'>
        <img src={require('../images/tEO.svg')} className="App-logo" alt="logo" />
        <h2 style={{flexBasis:'100%', alignSelf:'center'}} >Welcome to A-L</h2>
        <FontAwesome className='fa fa-facebook' name='fa-facebook' />
        <FontAwesome className='fa fa-twitter' name='fa-twitter' />
        <FontAwesome className='fa fa-instagram' name='fa-instagram' />
        <AppBar style={{width: '100%', alignSelf:'flex-end'}} >
        </AppBar>
    </div>
    );
  }
}

export default MainHeader;
