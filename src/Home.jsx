// Home.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './Themecontext';

const Home = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Home;
