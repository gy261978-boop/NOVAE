import React, { useState, useEffect } from 'react';
import '../styles/Archive.css';
import GridItem from './GridItem';

function Archive({ onAddToCart, onFilterChange, filteredCategory }) {
  const [displayItems, setDisplayItems] = useState([]);

  const products = [
    { id: 1, name: 'VOID TEE', price: 65, displayPrice: '$65', category: 'thrift', image: 'https://images.unsplash.com/photo-1552664199-fd31f7431a55?auto=format&fit=crop&q=80&w=1000', size: 'small' },
    { id: 2, name: 'ORBITAL RING / 01', price: 180, displayPrice: '$180', category: 'jewelry', image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=1000', size: 'tall' },
    { id: 3, name: 'FRAGMENT PENDANT', price: 210, displayPrice: '$210', category: 'jewelry', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=1000', size: 'wide' },
    { id: 4, name: 'ARCHIVE SHIRT', price: 120, displayPrice: '$120', category: 'thrift', image: 'https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&fit=crop&q=80&w=1000', size: 'medium' },
    { id: 5, name: 'OBSIDIAN CHAIN', price: 260, displayPrice: '$260', category: 'jewelry', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=1000', size: 'tall right' },
    { id: 6, name: 'RELIC CAP', price: 45, displayPrice: '$45', category: 'thrift', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1000', size: 'small bottom' },
  ];

  useEffect(() => {
    if (filteredCategory === 'all') {
      setDisplayItems(products);
    } else {
      setDisplayItems(products.filter(p => p.category === filteredCategory));
    }
  }, [filteredCategory]);

  const handleFilterClick = (category) => {
    onFilterChange(category);
  };

  return (
    <section className="archive">
      <div className="archive-intro">
        <p className="timestamp">// DISCOVERED RELICS 2024</p>
        <h3>Curated garments and engineered jewellery that feel discovered, not mass-produced.</h3>
      </div>

      <div className="filter-container">
        <button 
          className={`filter-btn ${filteredCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterClick('all')}
        >
          ALL ITEMS
        </button>
        <button 
          className={`filter-btn ${filteredCategory === 'thrift' ? 'active' : ''}`}
          onClick={() => handleFilterClick('thrift')}
        >
          THRIFT
        </button>
        <button 
          className={`filter-btn ${filteredCategory === 'jewelry' ? 'active' : ''}`}
          onClick={() => handleFilterClick('jewelry')}
        >
          JEWELRY
        </button>
      </div>

      <div className={`archive-grid ${filteredCategory === 'all' ? 'unorganised' : 'sequential-grid'}`}>
        {displayItems.map(product => (
          <GridItem 
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Archive;
