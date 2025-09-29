
import './skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title"></h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Languages</h3>
          <p>C, C++, Python, Java, JavaScript, Swift, Lua</p>
        </div>
        <div className="skill-card">
          <h3>Technologies</h3>
          <p>React, Electron, Node.js, HTML/CSS, Git, Wireshark, PyTorch, Scikit-Learn</p>
        </div>
        <div className="skill-card">
          <h3>Concepts</h3>
          <p>System Architecture, Algorithm Design, Cybersecurity, Machine Learning, AI, Data Analysis</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
