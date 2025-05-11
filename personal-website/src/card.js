import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './card.css'

const Project = ({
    title,
    image,
    description
}) => {
    return (
        <div className="project">
            <Link to={`/pages/${title}`} style={{ display: 'contents' }}>
                <img src={image} className="project-image" />
                <div className="project-info">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                </div>
            </Link>
        </div>
    );
}

export default Project;