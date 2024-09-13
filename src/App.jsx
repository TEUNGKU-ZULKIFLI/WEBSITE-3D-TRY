import './App.css'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Setup } from './components/Setup'

function App() {
  return (
      <Canvas>
        <Setup position={[0, -3, 0]} scale={0.3} />
      </Canvas>
  );
}

export default App
