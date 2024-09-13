import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Setup } from './components/Setup'
import './App.css'

function App() {
  return (
    <div>
      <div id="home">
        <Canvas >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Setup position={[0, -1.5, 0]} scale={0.20} />
        </Canvas>
      </div>
      <div id="about" style={{ height: '100vh' }}>About Section</div>
      <div id="project" style={{ height: '100vh' }}>Project Section</div>
      <div id="contact" style={{ height: '100vh' }}>Contact Section</div>
    </div>
  );
}

export default App
