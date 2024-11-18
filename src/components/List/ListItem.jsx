// src/components/ListItem.js
import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem({ title, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '10px',
        margin: '5px 0',
        backgroundColor: isSelected ? '#007bff' : '#f0f0f0',
        color: isSelected ? '#fff' : '#000',
        cursor: 'pointer',
        borderRadius: '5px',
      }}
    >
      {title}
    </div>
  );
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

ListItem.defaultProps = {
  isSelected: false,
  onClick: () => {},
};