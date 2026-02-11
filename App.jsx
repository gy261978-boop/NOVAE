import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Archive from './components/Archive';
import CartSidebar from './components/CartSidebar';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [filteredCategory, setFilteredCategory] = useState('all');

  const handleAddToCart = (product) => {
    const newItem = {
      id: Date.now(),
      name: product.name,
      price: product.price,
      displayPrice: product.displayPrice,
    };
    setCartItems([...cartItems, newItem]);
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  };

  return (
    <div className="app">
      <Header 
        cartCount={cartItems.length}
        onCartToggle={() => setCartOpen(!cartOpen)}
      />
      <Hero />
      <Archive 
        onAddToCart={handleAddToCart}
        onFilterChange={setFilteredCategory}
        filteredCategory={filteredCategory}
      />
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        total={calculateTotal()}
      />
    </div>
  );
}

export default App;
