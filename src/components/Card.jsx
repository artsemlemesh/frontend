import React from 'react';

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;