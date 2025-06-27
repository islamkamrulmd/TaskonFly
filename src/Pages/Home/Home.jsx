import React from 'react';
import Banner from './Banner/Banner';
import Services from '../Services/Services';
import HowItWorks from './How It Works/HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>

            
        </div>
    );
};

export default Home;