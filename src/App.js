import './App.css';
import Cat from './cat.js';
import Foot from './foot.js';
import Banner from './banner.js';
import AboutMe from './aboutme.js';
import ProjectsCarousel from './projectlist.js';
import Skills from './skills.js';
import FeaturedProject from './feature.js';
import Rain from './rain.js';


function App() {
  return(
    <div className="body">

      <Rain />
      <Rain />

      <Banner />

      <AboutMe />
      <Skills />
     

      <ProjectsCarousel />

       <FeaturedProject />

      

      <div className="spacer" />
 
      <Foot />
      <a href="https://github.com/ETYoumans/CornerCat/tree/main"><Cat /></a>

      
      
      

    </div>

    
    

  );
}

export default App;
