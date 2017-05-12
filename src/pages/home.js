import React, { Component } from 'react';
import './style.css';

class Home extends Component {
    render(){
        return(
            <div>
                <div className='featuredListing'>
                    <span className='textWrapper'>
                        <div className='featuredHeader'>
                            <h2>Featured Listing</h2>
                        </div>
                        <p>It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
                        </p>
                    </span>
                </div>
                <div className='founders'>
                    <h2>A - L</h2>
                    <div className='alex'>
                        <h3>Alex</h3>
                    </div>
                    <div className='leon'>
                        <h3>Leon</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;