import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchAllItems, fetchItemsByCategory } from '../data';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (id) {
          const data = await fetchItemsByCategory(id);
          setItems(data);
        } else {
          const data = await fetchAllItems();
          setItems(data);
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, [id]);

  return (
    <div className="item-list-container">
      {items.length > 0 ? (
        items.map((item) => (
          <Link to={`/item/${item.id}`} key={item.id} className="item-card">
            <img src={item.imageid} alt={item.title} className="item-image" />
            <h2>{item.title}</h2>
            <p>${item.price}</p>
          </Link>
        ))
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
};

export default ItemListContainer;
