import React from 'react';
import './navigationbar.css';

function NavigationBar() {
  return (
    <div className="navbar">
      <div className="navbar-header">
        DEV@Deakin
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-options">
        <button>Post</button>
        <button>Login</button>
      </div>
    </div>
  );
}

export default NavigationBar;
