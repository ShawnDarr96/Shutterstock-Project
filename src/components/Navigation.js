import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/forest">Forest</NavLink></li>
        <li><NavLink to="/tokyo">Tokyo</NavLink></li>
        <li><NavLink to="/elephant">Elephant</NavLink></li>
        <li><NavLink to="/artic">Artic</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
