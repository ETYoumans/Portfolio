import React from 'react';
import { useParams } from 'react-router-dom';

const SudokuColoring = () => {
  const { title } = useParams();  // Get the project title from the URL
  // You can also fetch or pass additional info for the project here

  return (
    <div className="project-page">
      <h1>{title}</h1>
      <p>Details about the project {title} will go here.</p>
      {/* You can add more information, such as images, more detailed descriptions, etc. */}
    </div>
  );
};

export default SudokuColoring;