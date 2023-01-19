import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Math Magicians</h1>
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__item">
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="nav__item">
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
