import "./projectlist.css"
import sudokuVideo from "./imgs/4by4.gif"
import skillTreeImg from "./imgs/skilltree.jpeg"
import autoCatanImg from "./imgs/autocatan.jpg"
import Project from "./project.js"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GitHub } from "@mui/icons-material"


function ProjectsCarousel() {
  const projects = [
    {
      title: "Gaming Skill Tree",
      github: "https://github.com/ETYoumans/GameSkillTree",
      tech: ["JavaScript","React","Electron"],
      description: "Desktop application that helps manage video game backlogs by creating skill trees. Pulls game metadata from Steam and RAWG APIs. Fully released on GitHub.",
      media: <img src={skillTreeImg} alt="Gaming Skill Tree" />,
    },
    {
      title: "Sudoku Coloring",
      github: "https://github.com/ETYoumans/SudokuColoring",
      tech: ["Python","Applied Algorithms","Graph Theory"],
      description: "Turns sudoku puzzles into graphs, where the edges represent the restrictions placed onto the cell. Applys different algorithms to solve it, specifically a greedy algorithm and one inspired by Wave Function Collapse generative algorithms.",
      media: <img src={sudokuVideo} alt="Sudoku Coloring" />,
      reverse: true
    },
    {
      title: "Auto-Catan",
      github: "https://github.com/ETYoumans/AutoCatan",
      tech: ["C++", "Embedded Systems", "Hardware"],
      description: "Automated version of the popular board game Catan, featuring automatic board generation and dice rolling. It is built using an arduino and addressable LED lights.",
      media: <img src={autoCatanImg} alt="Auto-Catan" />,
      reverse: true
    }
    
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
    ]
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
            github={proj.github}
            reverse={proj.reverse || false}
          />
        ))}
      </Slider>

    </div>
  );
}

export default ProjectsCarousel;
