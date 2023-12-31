import React from 'react';
import './SkillCard.css';

function SkillCard({ skill }) {
    return (
        <div className="skill-card">
            <div className="skill-icon">
                <img src={skill.image} alt={skill.name} />
            </div>
            <h2 className="skill-name">{skill.name}</h2>
        </div>
    );
}

export default SkillCard;
