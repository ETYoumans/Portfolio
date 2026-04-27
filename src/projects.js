import "./css/panel.css";
import "./css/projects.css";
import Info from "./info.json";
import React from "react";

const projects = Info.projects;

function normalizeCssSize(value) {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value === "number") return `${value}px`;
  if (typeof value === "string" && /^\d+(\.\d+)?$/.test(value.trim())) {
    return `${value}px`;
  }
  return value;
}

function Projects() {
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="panel">
          <div 
            className="panel-content"
            style={{
              flexDirection: project.layout === "column" ? "column" : "row"
            }}
          >
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
              <div
                className="project-image-wrapper"
                style={{
                  "--project-image-width": normalizeCssSize(project.imageWidth) || "40%",
                  "--project-image-height": normalizeCssSize(project.imageHeight) || "300px",
                  "--project-image-aspect": project.imageAspect || "auto",
                  "--project-image-fit": project.imageFit || "contain"
                }}
              >
                <img
                  src={require(`${project.image}`)}
                  alt={project.name}
                  className="project-image"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

  )
}

export default Projects;