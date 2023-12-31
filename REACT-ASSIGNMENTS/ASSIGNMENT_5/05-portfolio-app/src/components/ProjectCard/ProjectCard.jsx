import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <Link to={`/projects/${project.id}`} className="project-card-link">
                <div className="project-image">
                    <img src={project.image} alt={project.name} />
                </div>
                <div className="project-info">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                </div>
            </Link>
        </div>
    );
}

export default ProjectCard;
