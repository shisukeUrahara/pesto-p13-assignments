import React from 'react';
import './Interests.css';

const Interests = React.memo(({ interests, onRemove }) => {
    return (
        <div className="Interests">
            {interests.map((interest, index) => (
                <div key={index} className="Interest-tag">
                    {interest}
                    <span className="Interest-remove" onClick={() => onRemove(index)}>×</span>
                </div>
            ))}
        </div>
    );
});

export default Interests;
