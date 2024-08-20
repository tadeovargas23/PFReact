import React from 'react';
import './Brief.css';

const Brief = ({ cart }) => {
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="brief-container">
      <h2>Resumen de compra</h2>
      <p>Total de items: {totalItems}</p>
      <p>Precio total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Brief;
