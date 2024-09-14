import './App.css'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Setup } from './components/Setup'
import { Scroll, ScrollControls } from '@react-three/drei';
import Bio from './components/Bio';

function App() {
  return (
    <Canvas>
      <ScrollControls pages={1.3} damping={0.5}>
        <Scroll html>
          <Bio />
        </Scroll>
        <Setup position={[0, -3, 0]} scale={0.3} />
    </ScrollControls>
      </Canvas>
  );
}

export default App
