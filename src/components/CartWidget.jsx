import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useCart } from '../context/CartContext'; 
import './CartWidget.css';

const CartWidget = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout');
  };

  const totalQuantity = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <div className="cart-widget" onClick={handleClick}>
      <span className="cart-icon">🛒</span>
      {totalQuantity > 0 && <span className="cart-number">{totalQuantity}</span>}
    </div>
  );
};

export default CartWidget;
