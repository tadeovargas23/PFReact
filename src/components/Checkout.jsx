// src/components/Checkout.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, getTotalPrice } = useCart();

  return (
    <div className="checkout">
      <h2>Resumen de Compra</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="checkout-items">
          {cart.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.imageid} alt={item.title} className="checkout-item-image" />
              <div className="checkout-item-details">
                <h3>{item.title}</h3>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="checkout-total">
        <h3>Total: ${getTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default Checkout;
