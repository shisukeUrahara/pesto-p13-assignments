import React from 'react';
import './Recommendations.css';

const Recommendations = React.memo(({ recommendations }) => {
    return (
        <div className="Recommendations">
            {recommendations.map((recommendation, index) => (
                <div key={index} className={`recommendation-card ${index}`}>
                    <div className="recommendation-text">{recommendation}</div>
                </div>
            ))}
        </div>
    );
})

export default Recommendations;
