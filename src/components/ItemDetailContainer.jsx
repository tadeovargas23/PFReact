import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemById } from '../data';
import ItemQuantitySelector from './ItemQuantitySelector';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getItem = async () => {
      try {
        const fetchedItem = await fetchItemById(id);
        setItem(fetchedItem);
      } catch (error) {
        console.error("Error fetching item:", error);
      } finally {
        setLoading(false);
      }
    };

    getItem();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!item) return <p>Producto no encontrado.</p>;

  return (
    <div className="item-detail-container">
      <h1>{item.title}</h1>
      <img className="item-detail-image" src={item.imageid} alt={item.title} />
      <p className="item-price">Precio: ${item.price}</p>
      <p className="item-description">{item.description}</p>
      <div className="item-detail-actions">
        <ItemQuantitySelector item={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
