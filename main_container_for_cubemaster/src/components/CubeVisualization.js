import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// PUBLIC_INTERFACE
/**
 * Cube face component representing one face of a Rubik's cube piece
 */
const CubeFace = ({ position, rotation, color }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[0.9, 0.9]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// PUBLIC_INTERFACE
/**
 * Individual cube piece component
 */
const CubePiece = ({ position, colors }) => {
  const meshRef = useRef();
  
  // Default colors for each face if not specified
  const defaultColors = {
    front: 'red',
    back: 'orange',
    left: 'green',
    right: 'blue',
    top: 'white',
    bottom: 'yellow'
  };
  
  const pieceColors = { ...defaultColors, ...colors };
  
  return (
    <group position={position}>
      {/* Front face */}
      <CubeFace 
        position={[0, 0, 0.5]} 
        rotation={[0, 0, 0]} 
        color={pieceColors.front} 
      />
      
      {/* Back face */}
      <CubeFace 
        position={[0, 0, -0.5]} 
        rotation={[0, Math.PI, 0]} 
        color={pieceColors.back} 
      />
      
      {/* Left face */}
      <CubeFace 
        position={[-0.5, 0, 0]} 
        rotation={[0, -Math.PI / 2, 0]} 
        color={pieceColors.left} 
      />
      
      {/* Right face */}
      <CubeFace 
        position={[0.5, 0, 0]} 
        rotation={[0, Math.PI / 2, 0]} 
        color={pieceColors.right} 
      />
      
      {/* Top face */}
      <CubeFace 
        position={[0, 0.5, 0]} 
        rotation={[-Math.PI / 2, 0, 0]} 
        color={pieceColors.top} 
      />
      
      {/* Bottom face */}
      <CubeFace 
        position={[0, -0.5, 0]} 
        rotation={[Math.PI / 2, 0, 0]} 
        color={pieceColors.bottom} 
      />
    </group>
  );
};

// PUBLIC_INTERFACE
/**
 * Complete Rubik's Cube component
 */
const RubiksCube = ({ cubeState }) => {
  const groupRef = useRef();
  
  useFrame(() => {
    if (groupRef.current) {
      // Gentle auto-rotation for visualization
      groupRef.current.rotation.y += 0.005;
    }
  });
  
  // Define positions for all 27 cubes (including the hidden center cube)
  const positions = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        positions.push([x, y, z]);
      }
    }
  }
  
  // For now, use placeholder colors (will be updated with actual cube state)
  // In a full implementation, cubeState would determine the colors of each face
  
  return (
    <group ref={groupRef}>
      {positions.map((pos, index) => {
        // Skip the center piece (it's not visible)
        if (pos[0] === 0 && pos[1] === 0 && pos[2] === 0) return null;
        
        return (
          <CubePiece 
            key={index} 
            position={pos} 
            colors={{}} // This would be populated from cubeState in a full implementation
          />
        );
      })}
    </group>
  );
};

// PUBLIC_INTERFACE
/**
 * Main Cube Visualization component with scene setup
 */
const CubeVisualization = ({ cubeState, size = 300 }) => {
  return (
    <div style={{ width: size, height: size }}>
      <Canvas camera={{ position: [3, 3, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RubiksCube cubeState={cubeState} />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
};

export default CubeVisualization;
