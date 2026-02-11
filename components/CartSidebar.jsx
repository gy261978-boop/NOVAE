import React from 'react';
import '../styles/CartSidebar.css';

function CartSidebar({ isOpen, onClose, cartItems, onRemoveItem, total }) {
  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="cart-close" onClick={onClose}>&times;</button>
        </div>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">No items yet</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">{item.displayPrice}</div>
                </div>
                <button 
                  className="cart-item-remove"
                  onClick={() => onRemoveItem(item.id)}
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span id="total-price">${total}</span>
          </div>
          <button className="checkout-btn">CHECKOUT</button>
        </div>
      </div>
    </>
  );
}

export default CartSidebar;
