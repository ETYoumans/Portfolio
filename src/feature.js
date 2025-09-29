import './feature.css';
import featureImg from './imgs/tree.png';

function FeaturedProject() {
  return (
    <div className="features-container">
    <section className="featured-container">
      <h2 className="featured-title"></h2>
      <div className="featured-content">
        <div className="featured-media">
          
        </div>
        <div className="featured-text">
          <h3>IOS Location Sharing Detection Application</h3>
          <p>
            I am a project manager and lead app developer who is building an IOS application with a group of other students for our senior project.
            This application will intercept network traffic, process it into a machine learning model, and detect when location sharing related traffic occurs.
            Currently, this project is unavaible on GitHub, as the senior project is still on-going.
          </p>
          
        </div>
      </div>
    </section>
    <section className="featured-container">
      <h2 className="featured-title"></h2>
      <div className="featured-content">
        <div className="featured-media">
          
        </div>
        <div className="featured-text">
          <h3>Lua Server Balatro Mod</h3>
          <p>
            For a personal project, I built a server that will listen to commands to send into the popular indie game Balatro. 
            The server is built entirely in Lua, and will listen to commands such as "Select Card 1 4 6" or "Discard", and run the in-game actions for those commands.
            The server is hosted locally, which can connected to another service from there. I am still fine tuning the details, so the project is not available on GitHub.
          </p>
          
        </div>
      </div>
    </section>
    </div>
  );
}

export default FeaturedProject;