import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky, Plane } from '@react-three/drei'
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
import Text from './components/Text'

function App() {
  function Box() {
    const position = [20 , 1, 1]
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
      <Canvas shadows>
        <Sky castShadow={true} distance={100000} sunPosition={[100, 100, 20]}/>
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[5, 7, 0]}
          intensity={1}
          castShadow={true}
          shadowBias={-0.00001}
          shadow-camera-near={0.1}
          shadow-mapSize-width={100096}
          shadow-mapSize-height={100096}
          shadow-camera-far={20}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <FirstPointView />
        <Physics>
          <Text />
          <Ground />
          <Plane
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.5, 0]}
            args={[1000, 1000]}
          >
            <shadowMaterial attach="material" opacity={0.3} />
          </Plane>
          <Model />
          <Box />
          <Spheres />
          <Cubes />
          <Player />
        </Physics>
      </Canvas>
      <TextureSelect />


      <div className="pointer">+</div>
    </>
  )
}

export default App
