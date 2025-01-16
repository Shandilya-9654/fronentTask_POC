import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardContent from './components/DashboardContent';
import { useState } from 'react';
import './App.scss';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev); // Toggles between true and false
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="main-content">
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <Navbar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default App;
