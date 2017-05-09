import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import '../styles.css';

const headerNav = {
  color: 'white',
  display: 'inline-block',
  padding: '5px',
  textTransform: 'uppercase'
}

class MainHeader extends Component {
  render() {
    return (
    <div className='App-header'>
        <img src={require('../images/tEO.svg')} className="App-logo" alt="logo" />
        <FontAwesome className='fa fa-facebook' name='fa-facebook' />
        <FontAwesome className='fa fa-twitter' name='fa-twitter' />
        <FontAwesome className='fa fa-instagram' name='fa-instagram' />
        <ul style={{background: '#130f00', width: '100%', textAlign: 'center', margin: '0' }} >
          <li style={headerNav}>
            <Link to="/about">About</Link>
          </li>
          <li style={headerNav}>
            <Link to="/contact">Contact</Link>
          </li>
          <li style={headerNav}>
            <Link to="/home">Home</Link>
          </li>
          <li style={headerNav}>
            <Link to="/listings">Listings</Link>
          </li>
        </ul>
    </div>
    );
  }
}

export default MainHeader;
