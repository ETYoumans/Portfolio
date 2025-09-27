import './feature.css';
import featureImg from './imgs/tree.png';

function FeaturedProject() {
  return (
    <section className="featured-container">
      <h2 className="featured-title"></h2>
      <div className="featured-content">
        <div className="featured-media">
          <img src={featureImg} alt="Featured project" />
        </div>
        <div className="featured-text">
          <h3>Gaming Skill Tree</h3>
          <p>
            A desktop application that generates and manages visual skill trees for video game backlogs.  
            Integrates Steam and RAWG APIs for metadata, built with Electron and React.  
            Fully open-source and available on GitHub.
          </p>
          <div className="featured-buttons">
            <a href="https://github.com/ETYoumans/SkillTree" target="_blank" rel="noreferrer">
              <button>View on GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;