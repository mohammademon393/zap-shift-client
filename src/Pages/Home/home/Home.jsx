import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../works/Works';
import OurServices from '../ourServices/OurServices';
import Brands from '../brands/Brands';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Works></Works>
            <OurServices></OurServices>
            <Brands></Brands>
        </div>
    );
};

export default Home;