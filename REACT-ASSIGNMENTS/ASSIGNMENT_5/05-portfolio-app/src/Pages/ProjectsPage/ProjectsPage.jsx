import React from 'react';
import { Outlet } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './ProjectsPage.css';

function ProjectsPage({ projects }) {

    console.log("**@ projects page , all projects are , ", projects)
    return (
        <div className="projects-page">
            <h1>My Projects</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;
