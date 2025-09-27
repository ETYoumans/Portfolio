

function Project({ title, tech, description, media, github, demo, reverse }) {
  return (
    <section className={`project-container ${reverse ? 'reverse' : ''}`}>
      <div className="project-content">
        <div className="project-media">
          {media}
        </div>
        <div className="project-text">
          <h3>{title}</h3>
          <p>
            {description}
          </p>
          <div className="project-buttons">
            <a href={github} target="_blank" rel="noreferrer">
              <button>View on GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

