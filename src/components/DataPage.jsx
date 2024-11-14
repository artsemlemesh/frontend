// src/components/DataPage.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from './Skeleton';

const DataPage = ({ isLoading, isEmpty, data }) => {
    if (isLoading) {
        return <Skeleton/> // Skeleton loading state
    }

    if (isEmpty) {
        return <div>No data available.</div>; // Empty state
    }

    return (
        <div>
            <h1>Data Fetched</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

DataPage.propTypes = {
    isLoading: PropTypes.bool,
    isEmpty: PropTypes.bool,
    data: PropTypes.array,
};

export default DataPage;