// src/components/Navbar.js
import React from 'react';
import './Navbar.scss';

const Navbar = () => (
  <div className="navbar">
    <input type="text" placeholder="Search..." />
    <div className="profile">Profile</div>
  </div>
);

export default Navbar;
