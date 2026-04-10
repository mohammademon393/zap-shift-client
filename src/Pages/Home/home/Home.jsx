import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../works/Works';
import OurServices from '../ourServices/OurServices';
import Brands from '../brands/Brands';
import Reviews from '../reviews/Reviews';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Works></Works>
            <OurServices></OurServices>
            <Brands></Brands>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;