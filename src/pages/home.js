import React, { Component } from 'react';
import { MainHeader } from '../partials/header'
import { MainFooter } from '../partials/footer'

class Home extends Component {
    render(){
        return(
            <div>
                <MainHeader />
                <MainFooter />
            </div>
        )
    }
}

export default Home;