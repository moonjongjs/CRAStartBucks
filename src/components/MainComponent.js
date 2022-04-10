import React, { Component } from 'react';
import Section1Coponent from './main/Section1Coponent';
import Section2Coponent from './main/Section2Coponent';
import Section3Coponent from './main/Section3Coponent';
import Section4Coponent from './main/Section4Coponent';
import Section5Coponent from './main/Section5Coponent';
import Section6Coponent from './main/Section6Coponent';
import Section7Coponent from './main/Section7Coponent';
import Section8Coponent from './main/Section8Coponent';


class MainComponent extends Component {
    render() {
        return (
            <main id='main'>
                <Section1Coponent />
                <Section2Coponent />
                <Section3Coponent />
                <Section4Coponent />
                <Section5Coponent />
                <Section6Coponent />
                <Section7Coponent />
                <Section8Coponent />
            </main>
        );
    }
}

export default MainComponent;