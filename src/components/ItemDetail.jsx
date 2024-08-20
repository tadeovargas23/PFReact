// src/components/ItemDetail.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

function ItemDetail({ item }) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(item);
    };

    return (
        <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
}

export default ItemDetail;
