/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logom from '../../assets/logom.png';
import { RiMenu4Fill } from 'react-icons/ri';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`px-12 lg:px-[10%] w-full h-20 darknav text-white fixed top-0 left-0 flex items-center justify-between z-10 ${sticky ? 'darknav' : ''}`} ref={navRef}>
      <div className='flex items-center justify-center'>
        <NavLink to='/' className='w-[100px] h-[100px]'>
          <img src={logom} className='w-full h-full' alt='Nav Logo' />
        </NavLink>
        <h3 className='Archi'>
          Archi<span className='dome'>Dome</span>
        </h3>
      </div>
      <ul className={` ${mobileMenu ? '' : 'right-[-170px]'} delay-500 duration-500 ease-in-out flex w-[170px] lg:w-3/5 items-center lg:justify-between lg:items-center flex-col lg:flex-row h-[100svh] lg:bg-transparent lg:h-auto fixed top-0 right-0 lg:static pt-16 lg:pt-0`}>
        <li className="mb-8 lg:mb-0">
          <NavLink exact to='/' className='navLink' activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li className="mb-8 lg:mb-0">
          <NavLink to='/about' className='navLink' activeClassName='active'>
            About Us
          </NavLink>
        </li>
        <li className="mb-8 lg:mb-0">
          <NavLink to='/services' className='navLink' activeClassName='active'>
            Services
          </NavLink>
        </li>
        <li className="mb-8 lg:mb-0">
          <NavLink to='/project' className='navLink' activeClassName='active'>
            Project
          </NavLink>
        </li>
        <li className="mb-8 lg:mb-0">
          <NavLink to='/team' className='navLink' activeClassName='active'>
            Team
          </NavLink>
        </li>
        <li className="mb-8 lg:mb-0">
          <NavLink to='/blog' className='navLink' activeClassName='active'>
            Blog
          </NavLink>
        </li>
        <li className="mb-8 lg:mb-0">
          <NavLink to='/contact' className='navBtn navLink' activeClassName='active'>
            Contact Us
          </NavLink>
        </li>
      </ul>
      <button className='nav__toggle-btn static z-10 lg:hidden' onClick={toggleMenu}>
        <RiMenu4Fill />
      </button>
    </nav>
  );
};

export default Navbar;
