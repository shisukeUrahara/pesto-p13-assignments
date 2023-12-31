import React from 'react';
import './Toaster.css';

function Toaster({ message }) {
    return (
        <div className="toaster">
            {message}
        </div>
    );
}

export default Toaster;
