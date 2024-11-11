import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 float-right">✕</button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;