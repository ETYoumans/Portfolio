import './css/App.css';
import Cat from './cat/cat.js';
import Foot from './foot.js';
import Banner from './banner.js';
import Rain from './rain.js';
import About from './about.js'
import Skyline from './skyline.js';
import Projects from './projects.js';
import Skills from './skills.js';
import Bio from './bio.js';

function App() {
  return(
    <div className="body">

      <Rain />
      <Rain />
      <Skyline />
      <Banner />
      <About />
      
      <Projects />
      <Skills />
      <div className="section-divider" />
      <Bio />


      
      <div className="spacer" />
      <Foot />
      <a href="https://github.com/ETYoumans/CornerCat/tree/main"><Cat /></a>

      
      
      

    </div>

    
    

  );
}

export default App;
