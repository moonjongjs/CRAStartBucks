import React, { Component } from 'react';
import SkipComponent from './SkipComponent';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FootComponent from './FootComponent';



class WrapComponent extends Component {
    render() {
        return (
            <div id='wrap'>
                <SkipComponent />
                <HeaderComponent />
                <MainComponent />
                <FootComponent />
            </div>
        );
    }
}

export default WrapComponent;