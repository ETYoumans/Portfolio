import './App.css';
import Project from './card.js'
import Header from './header.js'

function App() {
  return(
    <div className="home">
      <Header />
      <Project
        title = "First Project"
        image = "1"
        description = "First Project Description"
        link = "1"
      />
    </div>
  );
}

export default App;
