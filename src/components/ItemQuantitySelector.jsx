import React, { useState } from 'react';
import AddItemButton from './AddItemButton';
import './ItemQuantitySelector.css';

const ItemQuantitySelector = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity-selector">
      <button onClick={decreaseQuantity} className="quantity-btn">-</button>
      <span className="quantity">{quantity}</span>
      <button onClick={increaseQuantity} className="quantity-btn">+</button>
      <AddItemButton item={item} quantity={quantity} />
    </div>
  );
};

export default ItemQuantitySelector;
