import React from 'react';
import '../styles/Header.css';

function Header({ cartCount, onCartToggle }) {
  return (
    <nav className="main-nav">
      <div className="logo">NOVAE</div>
      <div className="menu-items">
        <a href="#">ARCHIVE</a>
        <a href="#">ABOUT</a>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          onCartToggle();
        }} className="violet-accent">
          CART (<span>{cartCount}</span>)
        </a>
      </div>
    </nav>
  );
}

export default Header;
