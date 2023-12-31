import React from 'react';
import './Loader.css';

const Loader = React.memo(() => {
    return (
        <div className="Loader">
            Fetching Recommendations
        </div>
    );
})

export default Loader;
