import React from 'react';
import './Description.css';

const Description = ({ text }) => {
  return (
    <div className="description">
      <p>{text}</p>
    </div>
  );
};

export default Description;
