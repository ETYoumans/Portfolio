import './App.css';
import Project from './card.js'
import sudokuImage from './sudoku.png';

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
      <div className="project-list">
        <Project
          title = "Sudoku Coloring"
          image = {sudokuImage}
          description = "Solving Sudoku puzzles with custom algorithms that leveraging graph theory and coloring in Python"
          link = "https://github.com/ETYoumans/SudokuColoring"
        />
        <Project
          title = "Sudoku Coloring"
          image = {sudokuImage}
          description = "Solving Sudoku puzzles with custom algorithms that leveraging graph theory and coloring in Python"
          link = "https://github.com/ETYoumans/SudokuColoring"
        />
      </div>

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


    </div>


  );
}

export default App;
