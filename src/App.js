import './css/App.css';
import Cat from './cat/cat.js';
import Foot from './foot.js';
import Banner from './banner.js';
import Rain from './rain.js';
import About from './about.js'
import Skyline from './skyline.js';

function App() {
  return(
    <div className="body">

      <Rain />
      <Rain />
      <Skyline />
      <Banner />
      <About />
      
      <Foot />
      <a href="https://github.com/ETYoumans/CornerCat/tree/main"><Cat /></a>

      
      
      

    </div>

    
    

  );
}

export default App;
