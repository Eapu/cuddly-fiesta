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
    <mesh
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
				const clickedFace = e
        const { x, y, z } = ref.current.position
        console.log(clickedFace,'clickedFace')
        if (e.altKey && clickedFace) {
          console.log('pressedkey')
          removeSphere(x,y,z)
          return
        }
        addSphere()
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