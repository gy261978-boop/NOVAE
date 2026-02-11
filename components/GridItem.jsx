import React, { useState } from 'react';
import '../styles/GridItem.css';

function GridItem({ product, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddClick = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className={`grid-item ${product.size} is-visible visible`}>
      <img src={product.image} alt={product.name} />
      <div className="item-overlay">
        <span 
          className={`action primary add-to-cart ${isAdded ? 'added' : ''}`}
          onClick={handleAddClick}
        >
          {isAdded ? 'Added!' : 'Add to Cart'}
        </span>
        <span className="action">View Similar</span>
      </div>
      <div className="item-info">
        <span>{product.name}</span>
        <span>{product.displayPrice}</span>
      </div>
    </div>
  );
}

export default GridItem;
