import React from 'react';

const Button = ({ label, onClick, variant = 'primary' }) => {
  const variantClass = variant === 'secondary' ? 'bg-gray-500' : 'bg-blue-500';
  return (
    <button 
      className={`${variantClass} text-white py-2 px-4 rounded`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;