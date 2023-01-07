import { useFrame, useThree } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon'
import { useEffect, useRef } from 'react'
import { Vector3 } from 'three'
import { useKeyboard } from '../hooks/useKeyboard'

const CHARACTER_SPEED = 4
const CHARACTER_JUMP_FORCE = 4

export const Player = () => {
  const {
    moveBackward,
    moveForward,
    moveLeft,
    moveRight,
    jump
  } = useKeyboard()

  const { camera } = useThree()
  //player como una esfera
  const [ref, api] = useSphere(() => ({
    mass:1,
    type:'Dynamic',
    position:[0, 0.5, 0]
  }))

  const pos = useRef([0, 0, 0])
  useEffect(() => {
    api.position.subscribe(p => {
      pos.current = p
    })
  },[api.position]) 
  //subscrito a los cambios de la esfera,
  //cuando cambie p, la posicion actual se guarda.

  const vel = useRef([0, 0, 0])
  useEffect(() => {
    api.velocity.subscribe(p => {
      vel.current = p
    })
  },[api.velocity]) 

  useFrame(() => {
    camera.position.copy(
      new Vector3(
        pos.current[0],//x
        pos.current[1],//y
        pos.current[2],//z
      )
    )
    const direction = new Vector3()
    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 :0) - (moveForward ? 1 : 0)
    )

    const sideVector = new Vector3(
      (moveRight ? 1 : 0) - (moveLeft? 1 : 0),
      0,
      0,
    )

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(CHARACTER_SPEED)
      .applyEuler(camera.rotation)
      //applyEuler metodo utliza la rotacion de la camara para moverse hacia donde esta mirando la camara
    api.velocity.set(
      direction.x,
      vel.current[1], // jump
      direction.z
    )
    //Math.abs(vel.current[1]) < 0.05 
    //mira la velocidad actual en eje y para que no pueda saltar cuando esta subiendo o bajando
    if (jump && Math.abs(vel.current[1]) < 0.05) {
      api.velocity.set( 
        vel.current[0],
        CHARACTER_JUMP_FORCE,
        vel.current[2]
      )
    }
  })
  return (
    <mesh ref={ref} />
  )
}

//
//en la api de la esfera useSphere te suscribes a los 
//cambios con un useEfecct,
//la camara copia la position que tiene la esfera
// useRef (usa referencias en vez de estados)
//en vez de useEffect