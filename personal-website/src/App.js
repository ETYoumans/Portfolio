import './App.css';

import ProjectList from './projectList.js';
import Cat from './cat.js';

function App() {
  return(
    <div className="home">
      <div className="top">
        <h1>
          ETHAN YOUMANS
        </h1>
        <h2>
          OVERLY CONFIDENT PROGRAMMER
        </h2>
        <h4>
          SOME BUZZ WORDS
        </h4>
      </div>

      <div className="hr-bar"></div>

      <h3>
          Projects
      </h3>
      <ProjectList />

      <div className="hr-bar"></div>

      <div className="about-me">
        <h3>
          ABOUT ME
        </h3>
        <p>
          I am a current undergraduate student at the University of Florida,
          graduating in the fall of 2025 with a bachelor's of science in Computer
          Science.

          Add more information...
        </p>
      </div>

      <div className="hr-bar"></div>

      <div className="contact">
        <h3>
          CONTACT
        </h3>
      </div>

      <Cat />
    </div>


  );
}

export default App;
