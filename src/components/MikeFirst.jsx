import PropTypes from 'prop-types';

export default function MikeFirst({
  color,
  borderRadius,
  label,
  onClick,
  disabled,
  padding,
}) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: 'white',
        padding: padding,
        border: 'none',
        borderRadius: borderRadius,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

MikeFirst.propTypes = {
  color: PropTypes.string,
  borderRadius: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  padding: PropTypes.string,
};

MikeFirst.defaultProps= {
    color: '#f70b0b',
    onClick: () => alert('Button clicked'),
    disabled: false,
    padding: '10px',
    borderRadius: '5px'
}
