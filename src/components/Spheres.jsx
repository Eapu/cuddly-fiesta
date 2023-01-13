import { useStore } from '../hooks/useStore'
import { Sphere } from './Sphere'

export const Spheres = () => {
  const [spheres] = useStore(state => [state.spheres])

  return spheres.map(({ id, pos, texture }) => {
    return (
      <Sphere 
        key={id}
        id={id}
        position={pos}
        texture={texture}
      />
    )
  })
}