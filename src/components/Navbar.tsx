import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
    <ul className="navbar__list">
        <li className="navbar__item">
            <Link to="/" className="navbar__logo">JLR</Link>
        </li>
        <ul className="navbar__links">
            <li className="navbar__item">
                <Link to="/" className="navbar__link">Home</Link>
            </li>
            <li className="navbar__item">
                <Link to="/about" className="navbar__link">About</Link>
            </li>
            <li className="navbar__item">
                <Link to="/contact" className="navbar__link">Contact</Link>
            </li>
        </ul>
    </ul>
</nav>

  );
}

export default Navbar;
