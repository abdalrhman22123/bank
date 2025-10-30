import React, { Component } from 'react';
import Logo from "../assets/logo.svg"
import Nav from './nav';
import "./Navbar.css";
const Navbar = () => {
    return ( 
        <>
        <Nav />
        <div className='navb'>
        <img src={Logo} alt="logo" />
         <Nav title='About Us' />
        <Nav title='Investor Relations' />
        <Nav title='Responsible Banking' /> 
        <Nav title='Newsroom' /> 
        <Nav title='Learning Center' /> 
        <Nav title='Careers'/>
         <Nav title='Others'/>
        </div>
        </>
     );
}
 
export default Navbar;