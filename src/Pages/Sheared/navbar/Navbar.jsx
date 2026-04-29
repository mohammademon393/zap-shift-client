import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../../components/logo/Logo';

const Navbar = () => {

  const navClass = ({ isActive }) =>
isActive
 ? "bg-primary text-black rounded-full px-5 py-2 font-medium"
 : "px-5 font-medium py-2 rounded-full hover:bg-base-200 transition-all duration-200";
 
    const Links = (
<>
  <li>
    <NavLink to="/" className={navClass}>
      Home
    </NavLink>
  </li>

  <li>
    <NavLink to="/services" className={navClass}>
      Services
    </NavLink>
  </li>

  <li>
    <NavLink to="/coverage" className={navClass}>
      Coverage
    </NavLink>
  </li>

  <li>
    <NavLink to="/aboutUs" className={navClass}>
      About Us
    </NavLink>
  </li>

  <li>
    <NavLink to="/pricing" className={navClass}>
      Pricing
    </NavLink>
  </li>

  <li>
    <NavLink to="/blog" className={navClass}>
      Blog
    </NavLink>
  </li>

  <li>
    <NavLink to="/contact" className={navClass}>
      Contact
    </NavLink>
  </li>
</>
    );

    return (
      <div className="navbar bg-base-100 shadow-sm rounded-xl px-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <Link to={"/"}>
            <Logo></Logo>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Link to={"/register"} className='btn btn-primary btn-outline text-black'>Register</Link>
          <Link to={"/login"} className='btn btn-primary text-black'>Login</Link>
        </div>
      </div>
    );
};

export default Navbar;