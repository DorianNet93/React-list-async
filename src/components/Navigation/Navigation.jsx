import React from 'react';

import { NavLink } from 'react-router-dom';

import './style.css'

function Navigation(props) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/countries'>Сountries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;