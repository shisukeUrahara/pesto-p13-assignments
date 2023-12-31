import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetailPage.css';

function ProjectDetailPage({ projects }) {
    const { id } = useParams();
    console.log("**@ PROJECT DETAILS PAGE , ID FROM URL IS , ", id);
    console.log("**@ PROJECT DETAILS PAGE , ALL PROJECTS ARE  , ", projects);
    const project = projects.find((project) => project.id === parseInt(id));
    console.log("**@ PROJECT DETAILS PAGE , SELECTED PROJECT IS  , ", project);


    return project ? (
        <div className="project-detail">
            <h2>{project.title}</h2>

            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
        </div>
    ) : (
        <div>Project not found</div>
    );
}

export default ProjectDetailPage;
