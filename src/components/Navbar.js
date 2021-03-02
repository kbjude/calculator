import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/Quote">Quote</Link>
    <Link to="/App">Calculator</Link>
  </div>
);

export default Navbar;
