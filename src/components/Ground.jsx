import { usePlane } from "@react-three/cannon"
import { useStore } from '../hooks/useStore.js'

import { groundTexture } from '../images/textures.js'

export function Ground (){
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // x,y,z  rotacion del plano 90º
    position: [0, -0.5, 0] // -0.5 para estar un poco por encima del suelo
  }))
  const [addCube] = useStore(state => [state.addCube])
  groundTexture.repeat.set(100, 100)

  const handleClickGround = event => {
    event.stopPropagation()
    console.log(event.point)

    const [x, y, z ] = Object.values(event.point)
      .map(n => Math.ceil(n))

    addCube(x, y, z)
  }
  return(
    <mesh
      onClick={handleClickGround}
      ref={ref}
    >
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={groundTexture} />
    </mesh>
  )
}
//usePlane para crear un plano con un estado inicial,
// objeto que recibe rotacion y position
//mesh => se pasa el ref al mesh (es como la malla),
// donde necesita una geometria y material
//