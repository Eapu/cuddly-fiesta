import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useStore } from '../hooks/useStore.js'
import { useBox } from '@react-three/cannon'
import * as textures from '../images/textures.js'

  export default function ModelCube(props) {

  const [isHovered, setIsHovered] = useState(false)
  const [active, setActive] = useState(false)

  const mesh = useRef()
  useFrame (()=>(mesh.current.rotation.x += 0.01))


  return (
    <mesh ref={mesh} position={[-5, 2.9, 0]}
    castShadow
    receiveShadow
    onClick={(event)=>setActive(!active)}
    scale={ active ? 1.5 :1 }
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
    
  )
}
