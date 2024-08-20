import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <Link to={`/item/${item.id}`} key={item.id} className="item">
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>${item.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
