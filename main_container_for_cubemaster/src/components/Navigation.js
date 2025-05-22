import React from 'react';

// PUBLIC_INTERFACE
/**
 * Navigation component for CubeMaster application
 */
const Navigation = ({ onSelectSection }) => {
  return (
    <div className="navbar">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div className="logo">
            <span className="logo-symbol">□</span> CubeMaster
          </div>
          <div className="nav-links">
            <button 
              className="btn" 
              onClick={() => onSelectSection('solver')}
            >
              Solver
            </button>
            <button 
              className="btn" 
              onClick={() => onSelectSection('tutorials')}
              style={{ marginLeft: '10px' }}
            >
              Tutorials
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
