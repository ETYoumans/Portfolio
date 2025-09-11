import './App.css';
import ProjectList from './projectList.js';
import Cat from './cat.js';
import Foot from './foot.js';
import Skyline from './imgs/skyline.png'


function App() {
  return(
    <div className="body">
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
      
      <ProjectList />
      
      
      <div className="about-me">
        
      </div>
      
      <Foot />
      <a href="https://github.com/ETYoumans/CornerCat/tree/main"><Cat /></a>

      <div className="spacer"></div>
    
    </div>

    

  );
}

export default App;
