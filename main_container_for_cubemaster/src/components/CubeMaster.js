import React, { useState } from 'react';
import Navigation from './Navigation';
import SolverSection from './SolverSection';
import TutorialSection from './TutorialSection';

// PUBLIC_INTERFACE
/**
 * Main container component for CubeMaster application
 */
const CubeMaster = () => {
  const [activeSection, setActiveSection] = useState('solver');

  const handleSelectSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="cube-master-container">
      <Navigation onSelectSection={handleSelectSection} />
      
      <div className="main-content">
        <div className="container">
          <div className="hero">
            <div className="subtitle">Interactive 3x3 Rubik's Cube</div>
            
            <h1 className="title">CubeMaster</h1>
            
            <div className="description">
              Learn to solve a Rubik's cube with step-by-step instructions and interactive tutorials
            </div>
          </div>
          
          <div className="content-section">
            {activeSection === 'solver' ? (
              <SolverSection />
            ) : (
              <TutorialSection />
            )}
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="container">
          <p>CubeMaster: Interactive 3x3 Solver & Tutorials</p>
          <p className="copyright">© {new Date().getFullYear()} CubeMaster</p>
        </div>
      </footer>
    </div>
  );
};

export default CubeMaster;
