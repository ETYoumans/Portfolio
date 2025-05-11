import Project from './card.js'
import sudokuImage from './imgs/sudoku.png';
import catanImage from './imgs/catan.jpg';
import questionImage from './imgs/question.jpg'

function ProjectList() {
    return (
        <div className="project-list">
        <Project
          title = "SudokuColoring"
          image = {sudokuImage}
          description = "Solving Sudoku puzzles with custom algorithms that leveraging graph theory and coloring in Python"
        />
        <Project
          title = "AutoCatan"
          image = {catanImage}
          description = "Using an ardruino and addressable LEDs to create an automated Catan board, which will create a board state, roll dice, and highlight tiles that are rolled."
        />
        <Project
          title = "Unknown"
          image = {questionImage}
          description = "Placeholder"
        />
        <Project
          title = "Unknown"
          image = {questionImage}
          description = "Placeholder"
        />
        <Project
          title = "Unknown"
          image = {questionImage}
          description = "Placeholder"
        />
        <Project
          title = "Unknown"
          image = {questionImage}
          description = "Placeholder"
        />
        <Project
          title = "Unknown"
          image = {questionImage}
          description = "Placeholder"
        />
        <Project
          title = "Unknown"
          image = {questionImage}
          description = "Placeholder"
        />
      </div>
    )
}

export default ProjectList;