import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
    const buttonStyle = {
        display: 'inline-block',
        margin: '5px',
        padding: '10px 20px',
        backgroundColor: '#4caf50',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        textAlign: 'center',
    };

    return (
        <div style={{ margin: '20px' }}>
            <Link to="/" style={buttonStyle}>
                Go Back
            </Link>
        </div>
    );
}

export default HomeButton;
