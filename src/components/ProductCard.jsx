// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  console.log('ProductCard')

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <span className="text-blue-500 font-bold">${product.price}</span>
    </div>
  );
};

export default ProductCard;