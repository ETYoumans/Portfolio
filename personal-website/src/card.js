import React from 'react';
import Card from 'react-bootstrap/Card';
import './card.css'

const Project = ({
    title,
    image,
    description,
    link
}) => {
    return (
        <div className="project">
            <div className="project-info">
                <h3 div className="title">{title}</h3>
                <p className="description">{description}</p>
            </div>
        </div>
    );
}

export default Project;