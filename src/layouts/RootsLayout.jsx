import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Sheared/navbar/Navbar';
import Footer from '../Pages/Sheared/footer/Footer';

const RootsLayout = () => {
    return (
        <div className='bg-gray-200'>
            
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default RootsLayout;