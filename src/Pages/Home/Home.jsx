import React from 'react';
import Banner from './Banner/Banner';
import Services from '../Services/Services';
import HowItWorks from './How It Works/HowItWorks';
import ClientLogoSlider from './Client Logo Slider/ClientLogoSlider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <ClientLogoSlider></ClientLogoSlider>

            
        </div>
    );
};

export default Home;