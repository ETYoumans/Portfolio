import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectList from './projectList.js';
import Cat from './cat.js';
import SudokuColoring from './pages/SudokuColoring.js'
import AutoCatan from './pages/AutoCatan.js'

const pageFiles = require.context('./pages', false, /\.js$/);

const pages = pageFiles.keys().reduce((acc, filePath) => {
  const pageName = filePath.replace('./', '').replace('.js', '');
  const PageComponent = pageFiles(filePath).default;
  acc[pageName] = PageComponent;
  return acc;
}, {});

function App() {
  return(
    <Router>
    <Cat />
    <Routes>
      
      <Route path="/" element={
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
          <ProjectList />
      
          <div className="hr-bar"></div>
      
          <div className="about-me">
            <h3>
              ABOUT ME
            </h3>
            <p>
              Hi, I am Ethan Youmans, a passionate computer science student,
              with a focus on complex problem-solving and creative algorithms. 
              I am currently working towards my Bachelor's of Science in 
              Computer Science at the University of Florida. My interests lies in 
              tackling complex problems and creating useful (I guess sometimes useless)
              tools. 
            </p>
            <p>
              I thrive in challenging environments that push me to think outside the box. 
              My skills primarily consists of algorithms, machine learning, software development,
              and a bit of web development.
            </p>
            <p>
              I am excited to explore new opportunities and use my skills to help develop 
              new technologies.
            </p>
          </div>
    
          <div className="hr-bar"></div>
    
          <div className="contact-section">
            <h3>CONTACT</h3>
            <div className="contact-buttons">
              <a href="mailto:ethanyoumans@outlook.com" className="pixel-button">📧 Email</a>
              <a href="https://github.com/ETYoumans" target="_blank" rel="noopener noreferrer" className="pixel-button">🐱 GitHub</a>
              <a href="" target="_blank" rel="noopener noreferrer" className="pixel-button">💼 LinkedIn</a>
            </div>
        </div>
      
          
        </div>
      }/>
      
      {Object.keys(pages).map((pageName) => (
          <Route
            key={pageName}
            path={`/pages/${pageName}`}
            element={React.createElement(pages[pageName])}
          />
        ))}
    </Routes>
    </Router>

  );
}

export default App;
