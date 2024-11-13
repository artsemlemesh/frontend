import React from 'react';
import PropTypes from 'prop-types';

function MyButton({ label, color, onClick, disabled }) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}


MyButton.propTypes = {
    label : PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

MyButton.defaultProps = {
    color: '#007bff',
    onClick: () => alert('Button clicked')
}

export default MyButton