import { useStore } from '../hooks/useStore.js'
import { useBox } from '@react-three/cannon'
import { useState } from 'react'
import * as textures from '../images/textures.js'

export const Sphere = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [addSphere, removeSphere] = useStore((state) => [state.addSphere, state.removeSphere])

  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))

  const activeTexture = textures[texture + 'Texture']

  return (
    <mesh scale={0.3} castShadow
      onPointerMove={(e) => {
        e.stopPropagation()
        setIsHovered(true)
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setIsHovered(false)
      }}
      onClick={(e) => {
        e.stopPropagation()
        const clickedFace = Math.floor(e.faceIndex / 2)
        const { x, y, z } = ref.current.position
        console.log(e.faceIndex,'e.faceIndex')

        console.log(clickedFace,'clickedFace')
        if (e.altKey) {
          console.log('pressedkey')
          removeSphere(x,y,z)
          return
        } else if (clickedFace >0 && clickedFace < 300){
          addSphere(x , y+1, z)
          return
        } else if (clickedFace > 300 && clickedFace < 550){
          addSphere(x-1, y, z)
          return
        } else if (clickedFace > 550 && clickedFace < 1000){
          addSphere(x +1, y, z)
          return
        }

      }}
      ref={ref}
    >
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        color={isHovered ? 'grey' : 'white'}
        transparent
        map={activeTexture}
        attach='material'
      />
    </mesh>
  )
}