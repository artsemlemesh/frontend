// src/components/List.js
import React from 'react';
import PropTypes from 'prop-types';

export default function List({ children }) {
  return <div style={{ width: '300px', margin: '20px auto' }}>{children}</div>;
}

List.propTypes = {
  children: PropTypes.node,
};