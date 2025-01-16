// src/components/Navbar.js
import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';
import './Navbar.scss';


const Navbar = () => (
  <div className="navbar">
    <input className='searchBar' type="text" placeholder="Search..." />
    <div className="profile">Profile</div>
    <ThemeToggleButton />
  </div>
);

export default Navbar;
