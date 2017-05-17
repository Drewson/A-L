import React, { Component } from 'react';

class About extends Component {
    render(){
        return(
            <div className='about'>
                <div className='a-lAbout'>
                    <h2>A & L</h2>
                    <p>filler</p>
                </div>

                <div className='leonAbout' >
                    <h2>Meet Leon</h2>
                    <div className='leon' />
                    <h3>Leon Tsui</h3>
                    <h4>Realtor</h4>
                    <span className='email' ><h3>Email: </h3><p>leont604@gmail.com</p></span>
                    <p>
                        Much of my business comes through referrals from wonderful people like you.
                        I would be thrilled to be introduced to anyone you know that may be thinking about buying or selling a home.
                    </p>
                </div>

                <div className='alexAbout'>
                    <h2>Meet Alex</h2>
                    <div className='alex' />
                    <h3>Alex Chieng</h3>
                    <h4>Realtor</h4>
                    <span className='email' ><h3>Email: </h3><p> alex@vancouvermarketer.ca</p></span>
                    <p>
                        Much of my business comes through referrals from wonderful people like you.
                        I would be thrilled to be introduced to anyone you know that may be thinking about buying or selling a home.
                    </p>
                </div>
            </div>
        )
    }
}

export default About;