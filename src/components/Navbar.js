import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => (
  <div className="nav-bar">
    <Link to="/">Home</Link>
    <Link to="/Quote">Quote</Link>
    <Link to="/App">Calculator</Link>
  </div>
);

export default Navbar;
