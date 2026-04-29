import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router';

const Logo = () => {
    return (
      <Link to={"/"}>
        <div className="flex items-end">
          <img src={logo} alt="Logo" />
          <h2 className="font-bold text-2xl -ms-2.5">ZapShift</h2>
        </div>
      </Link>
    );
};

export default Logo;