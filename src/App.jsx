import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FirstPointView } from './components/FirstPointView'
import { Player } from './components/Player'
import { Cubes } from './components/Cubes'
import { TextureSelect } from './components/TextureSelect'
import { Menu } from './components/Menu'
import Model from './components/Model'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useBox } from '@react-three/cannon'
import * as textures from './images/textures.js'
import { Spheres } from './components/Spheres'

function App() {
  function Box() {
    const position = [0 , 1, 1]
    const [ref] = useBox(() => ({
      type: 'Static',
      position
    }))

    return (
      <mesh ref={ref}>
        <boxBufferGeometry attach="geometry" args={[2, 2, 1]} />
        <meshStandardMaterial attach="material" transparent opacity={0.5} />
      </mesh>
    )
  }
  return (
    <>
      <Menu />
      <Canvas>
        <Sky sunPosition={[100, 100, 20]}/>
        <ambientLight intensity={0.5} />
        <FirstPointView />
        <Physics>
          <Model />
          <Box />
          <Spheres />
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <TextureSelect />


      <div className="pointer">+</div>
    </>
  )
}

export default App
