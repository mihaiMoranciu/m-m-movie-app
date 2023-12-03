import React from 'react';
import { Link } from 'react-router-dom';

const navbarStyle = {
  backgroundColor: '#000005',
  padding: '10px',
  
};

const ulStyle = {
  listStyle: 'none',
  padding: '0',
  display: 'flex',
  justifyContent: 'flex-start',
};



const linkStyle = {
  marginLeft:'20px',
  marginRight: '10px',
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
  transition: 'color 0.3s,' // Smooth transition for color change
};

linkStyle[':hover'] = {
  color: '#a948ef',
  
};

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={linkStyle}><Link to="/" >Popular Movies</Link></li>
        <li style={linkStyle}><Link to="/favorites" >Favorite Movies</Link></li>
        <li style={linkStyle}><Link to="/search" >Search Movies</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
