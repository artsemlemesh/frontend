import PropTypes from "prop-types"



export default function Cosden({label, onClick, color, padding}){

    return(
        <button
            style={{
                outline: 'none',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 10,
                backgroundColor: color,
                padding: padding
            }}
            onClick={onClick}
        >
            {label}
        </button>
    )
}


Cosden.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string,
    padding: PropTypes.string
}

Cosden.defaultProps= {
    color: '#f70b0b',
    label: 'DEFAULT',
    padding: '3px',
    onClick: () => alert('beware, im default, very default')
}