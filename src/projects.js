import "./css/panel.css";
import "./css/projects.css";
import Info from "./info.json";
import React, { useRef } from "react";

const projects = Info.projects;

function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}

function Projects() {
  const ref = useRef(null);

  return (
    <div ref={ref} className="projects">
      {projects.map((project, index) => (
        <div key={index} className="panel">
          <div className="panel-content">
            <div className="project-text">
              <h3 className="project-title">{project.name}</h3>
              
              {project.tech && project.tech.length > 0 && (
                <div className="project-tags">
                  {project.tech.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
              )}
              <p className="project-description">{project.description}</p>
              {project.link && (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
            </div>
            {project.image && (
              <div className="project-image-wrapper">
                <img src={require(`${project.image}`)} alt={project.name} className="project-image" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

  )
}

export default Projects;