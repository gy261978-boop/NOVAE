import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <header className="hero">
      <div className="hero-split thrift">
        <div 
          className="bg-image" 
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2070')"}}
        ></div>
        <div className="content">
          <h2>THRIFT</h2>
          <button className="cta-btn">ENTER ARCHIVE</button>
        </div>
      </div>
      <div className="hero-split jewellery">
        <div 
          className="bg-image" 
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=1974')"}}
        ></div>
        <div className="content">
          <h2>JEWELLERY</h2>
          <button className="cta-btn">VIEW RELICS</button>
        </div>
      </div>
    </header>
  );
}

export default Hero;
