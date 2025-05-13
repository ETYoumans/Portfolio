import Page from '../page.js';
import SudokuImg from '../imgs/sudoku.png'
import SudokuVid from '../imgs/wfcAlgorithm.mp4'

const SudokuColoring = () => {
  console.log(SudokuVid);
  return (
    <Page
      title = "Sudoku Coloring"
      subtitle = "Applied Graph Theory"
      image = {SudokuImg}
      section1 = "Graph Creation"
      details1 = {<p> details... </p>}
      section2 = "Algorithm"
      details2 = 
      {
      <div>
        <div className = "img-container">
          <video className="responsive-video" controls>
            <source src="/Portfolio/static/media/wfcAlgorithm.3ea11627f8f94ba6b5c6.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div> 
      }
      github = "https://github.com/ETYoumans/SudokuColoring"
    />
  );
};

export default SudokuColoring;