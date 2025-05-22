import React, { useState } from 'react';
import CubeVisualization from './CubeVisualization';

// PUBLIC_INTERFACE
/**
 * Tutorial section component with interactive cube tutorials
 */
const TutorialSection = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(0);
  const [currentTutorialStep, setCurrentTutorialStep] = useState(0);
  
  // Placeholder tutorial data
  const tutorials = [
    {
      title: "Beginner's Method",
      description: "A simple method for beginners to solve the Rubik's cube",
      steps: [
        { title: "Step 1: White Cross", description: "Form a cross on the white face" },
        { title: "Step 2: White Corners", description: "Place all white corners correctly" },
        { title: "Step 3: Middle Layer Edges", description: "Solve the middle layer" },
        { title: "Step 4: Yellow Cross", description: "Form a cross on the yellow face" },
        { title: "Step 5: Complete the Yellow Face", description: "Position all yellow pieces correctly" },
        { title: "Step 6: Position Corners", description: "Place corners in the correct positions" },
        { title: "Step 7: Orient Corners", description: "Orient corners correctly to solve the cube" }
      ]
    },
    {
      title: "CFOP Method",
      description: "An advanced method used by speedcubers (Cross, F2L, OLL, PLL)",
      steps: [
        { title: "Step 1: Cross", description: "Form a cross on one face (usually white)" },
        { title: "Step 2: F2L", description: "First two layers - pair corners with edges" },
        { title: "Step 3: OLL", description: "Orientation of Last Layer - make the last face all one color" },
        { title: "Step 4: PLL", description: "Permutation of Last Layer - rearrange pieces of the last layer" }
      ]
    },
    {
      title: "Finger Tricks",
      description: "Techniques for faster cube manipulation",
      steps: [
        { title: "Basic Finger Movements", description: "Learn basic finger positions and movements" },
        { title: "U and U' Moves", description: "Efficient ways to perform U-face turns" },
        { title: "R and R' Moves", description: "Efficient ways to perform R-face turns" },
        { title: "F and F' Moves", description: "Efficient ways to perform F-face turns" },
        { title: "M and S Slices", description: "How to efficiently perform slice moves" }
      ]
    }
  ];
  
  const nextTutorialStep = () => {
    if (currentTutorialStep < tutorials[selectedTutorial].steps.length - 1) {
      setCurrentTutorialStep(currentTutorialStep + 1);
    }
  };
  
  const prevTutorialStep = () => {
    if (currentTutorialStep > 0) {
      setCurrentTutorialStep(currentTutorialStep - 1);
    }
  };
  
  return (
    <div className="tutorial-section">
      <h2>Interactive Tutorials</h2>
      
      <div className="tutorial-selection">
        <h3>Available Tutorials</h3>
        <div className="tutorial-list">
          {tutorials.map((tutorial, index) => (
            <div 
              key={index} 
              className={`tutorial-item ${selectedTutorial === index ? 'selected' : ''}`}
              onClick={() => {
                setSelectedTutorial(index);
                setCurrentTutorialStep(0);
              }}
            >
              <h4>{tutorial.title}</h4>
              <p>{tutorial.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="tutorial-content">
        <div className="cube-visualization-container">
          <CubeVisualization cubeState={{}} size={300} />
        </div>
        
        <div className="tutorial-steps">
          <h3>{tutorials[selectedTutorial].title}</h3>
          <div className="step-indicator">
            Step {currentTutorialStep + 1} of {tutorials[selectedTutorial].steps.length}
          </div>
          
          <div className="current-tutorial-step">
            <h4>{tutorials[selectedTutorial].steps[currentTutorialStep].title}</h4>
            <p>{tutorials[selectedTutorial].steps[currentTutorialStep].description}</p>
            <p>
              This is a placeholder for detailed instructions and visuals for this tutorial step.
              In a full implementation, this would include step-by-step instructions, algorithms,
              and interactive elements to help users learn.
            </p>
          </div>
          
          <div className="step-navigation">
            <button 
              className="btn" 
              onClick={prevTutorialStep} 
              disabled={currentTutorialStep === 0}
            >
              Previous Step
            </button>
            <button 
              className="btn" 
              onClick={nextTutorialStep} 
              disabled={currentTutorialStep === tutorials[selectedTutorial].steps.length - 1}
              style={{ marginLeft: '10px' }}
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialSection;
