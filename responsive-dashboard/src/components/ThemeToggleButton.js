// export default ThemeToggleButton;

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import './ThemeToggleButton.scss';

const ThemeToggleButton = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const getClassName = () => {
      if (theme === "dark") {
        return "theme-toggle-button-light ";
      } else {
        return "theme-toggle-button-dark";
      }
    };

  return (
    <button onClick={toggleTheme} className={getClassName()}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeToggleButton;
