import React from 'react';
import { useCart } from '../context/CartContext';
import './AddItemButton.css';

const AddItemButton = ({ item, quantity }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...item, quantity });
  };

  return (
    <button onClick={handleAddToCart} className="add-item-button">
      Añadir al carrito
    </button>
  );
};

export default AddItemButton;
