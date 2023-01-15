import { Suspense, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF, useAnimations } from "@react-three/drei"

export default function Model4(props) {
  const { scene, animations } = useGLTF("src/models/stacy.glb")
  const { actions } = useAnimations(animations, scene)
  useEffect(() => {
    // You can play, stop, fade actions in here
    console.log(actions)
  }, [actions])
  return <primitive object={scene} {...props} />
}