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
        <a href={link} className="project">
            <img src={image} className="project-image" />
            <div className="project-info">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                
            </div>
        </a>
    );
}

export default Project;