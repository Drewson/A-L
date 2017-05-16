import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import './style.css';

class MainHeader extends Component {
  render() {
    return (
    <div className='App-header'>
        <img src={require('../images/tEO.svg')} className="App-logo" alt="logo" />
        <FontAwesome className='fa fa-facebook' name='fa-facebook' />
        <FontAwesome className='fa fa-twitter' name='fa-twitter' />
        <FontAwesome className='fa fa-instagram' name='fa-instagram' />
        <ul>
          <li className='headerNav'>
            <Link to="/">Home</Link>
          </li>
          <li className='headerNav'>
            <Link to="/about">About</Link>
          </li>
          <li className='headerNav'>
            <Link to="/listings">Listings</Link>
          </li>
          <li className='headerNav'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
    </div>
    );
  }
}

export default MainHeader;
