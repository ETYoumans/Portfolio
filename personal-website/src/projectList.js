import Project from './card.js'
import sudokuImage from './sudoku.png';

function ProjectList() {
    return (
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
    )
}

export default ProjectList;