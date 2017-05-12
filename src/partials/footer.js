import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './style.css';

class MainFooter extends Component {
  render() {
    return (
    <footer>
      <FontAwesome className='fa fa-facebook' name='fa-facebook' />
      <FontAwesome className='fa fa-twitter' name='fa-twitter' />
      <FontAwesome className='fa fa-instagram' name='fa-instagram' />
    </footer>
    );
  }
}

export default MainFooter;
