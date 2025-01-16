import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardContent from './components/DashboardContent';
import './App.scss';


const App = () => {
  return (
    
    <div className="app">
      
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <DashboardContent />
      </div>
    </div>
    
  );
};

export default App;