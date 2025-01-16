// src/components/SalesCard.js
// import React from 'react';
import './SalesCard.scss';
import { ThemeContext } from './ThemeProvider';
import React, { useContext } from 'react';

const SalesCard = () => 
  {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
  
  <div className={`app ${theme}`}>
  <div className="sales-card">
    <h2>Total Sales</h2>
    <p>$25,000</p>
    <p>Daily Growth: +5%</p>
  </div>
   </div>
);
  }

export default SalesCard;
