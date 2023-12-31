import React from 'react';
import './Toaster.css';

const Toaster = React.memo(({ message }) => {
    if (!message) {
        return null;
    }

    return (
        <div className={`Toaster ${message.type}`}>
            {message.text}
        </div>
    );
})

export default Toaster;
