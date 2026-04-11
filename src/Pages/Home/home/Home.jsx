import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../works/Works';
import OurServices from '../ourServices/OurServices';
import Brands from '../brands/Brands';
import Reviews from '../reviews/Reviews';

const reviewsPromise = fetch("reviews.json")
    .then((res) => res.json());

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Works></Works>
        <OurServices></OurServices>
        <Brands></Brands>
        <Reviews reviewsPromise={reviewsPromise}></Reviews>
      </div>
    );
};

export default Home;