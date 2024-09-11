import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Setup } from './components/Setup'
import { ScrollControls, Scroll, Environment } from '@react-three/drei'
import './App.css'

function App() {
  return (
    <>
      <Canvas>
        <ScrollControls pages={3} damping={0.2} >
        <Setup position={[0, -1.5, 0]} scale={0.20} />
        <Environment preset="night" />
          <Scroll html>
            <h1>WELCOME MY WEBSITE<img className='teungku' src="/src/assets/img/profil.png" /></h1>
            <h1 style={{ top: '100vh' }}>ABOUT</h1>
            <h1 style={{ top: '200vh' }}>PROJECT</h1>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  )
}

export default App
