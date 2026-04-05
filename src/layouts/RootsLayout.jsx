import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Sheared/navbar/Navbar';
import Footer from '../Pages/Sheared/footer/Footer';

const RootsLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootsLayout;