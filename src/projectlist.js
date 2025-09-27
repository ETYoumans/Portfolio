import "./projectlist.css"
import Slider from "react-slick"
import sudokuVideo from "./imgs/4by4.gif"
import skillTreeImg from "./imgs/tree.png"
import autoCatanImg from "./imgs/autocatan.jpg"
import Project from "./project.js"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function ProjectsCarousel() {
  const projects = [
    {
      title: "Gaming Skill Tree",
      tech: "JavaScript, React, Electron, Node",
      description: "Desktop application to generate and manage visual skill trees for video game backlogs. Pulls game metadata from Steam and RAWG APIs. Fully released on GitHub.",
      media: <img src={skillTreeImg} alt="Gaming Skill Tree" />,
    },
    {
      title: "Sudoku Coloring",
      tech: "Python",
      description: "Sudoku solver transforming grids into graphs and applying coloring algorithms. Includes a greedy algorithm and a backtracking algorithm inspired by Wave Function Collapse.",
      media: <img src={sudokuVideo} alt="Sudoku Coloring" />,
      reverse: true
    },
    {
      title: "Auto-Catan",
      tech: "C++, Embedded Systems",
      description: "Automated version of the popular board game Catan, featuring automatic board generation and dice rolling.",
      media: <img src={autoCatanImg} alt="Auto-Catan" />,
      reverse: true
    }
    
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="carousel-wrapper-container">
      <Slider {...settings}>
        {projects.map((proj, idx) => (
          <Project
            key={idx}
            title={proj.title}
            tech={proj.tech}
            description={proj.description}
            media={proj.media}
            reverse={proj.reverse || false}
          />
        ))}
      </Slider>

    </div>
  );
}

export default ProjectsCarousel;
