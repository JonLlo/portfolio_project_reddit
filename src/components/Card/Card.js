import React from 'react';
import './Card.css';

const Card = ({ className, children }) => {
  return (
    <div className={`card ${className}`}>
      {children}
      <div>Camea</div>
    </div>
  );
};

export default Card;