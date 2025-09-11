import Project from './card.js'
import sudokuImage from './imgs/sudoku.png';
import catanImage from './imgs/catan.png';
import treeImage from './imgs/tree.png'

function ProjectList() {
    return (
        <div className="project-list">
        <Project
          title = "SudokuColoring"
          image = {sudokuImage}
          description = "Solves Sudoku puzzles with custom algorithms that leveraging graph theory and coloring in Python"
          link = "https://github.com/ETYoumans/SudokuColoring"
          buzzWords= "Keywords: Data Structures, Algorithms, Graph Theory, Coloring, Python"
        />
        <Project
          title = "AutoCatan"
          image = {catanImage}
          description = "Designed and built an automated Settlers of Catan board using Arduino, FastLED, and WS2812B LEDs."
          link = "https://github.com/ETYoumans/AutoCatan"
          buzzWords="Keywords: Microcontroller Programming, C++, Physical Game"
        />
        <Project
          title = "GameSkillTree"
          image = {treeImage}
          description ="Creates skill trees to store a backlog of video games. It will store state for each game, keep track of backlog progress, and show game images from Steam or Rawg associated with the listed game title." 
          link = "https://github.com/ETYoumans/GameSkillTree"
          buzzWords="Keywords: Electron, JS, Algorithms, Web Programming, UI, UX"
        />
        </div>
    )
}

export default ProjectList;