import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useState } from 'react'

export default function Model3(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("src/models/stegosaurs.gltf");
  const { actions } = useAnimations(animations, scene)
  useEffect(() => {
    // You can play, stop, fade actions in here
    console.log(actions)
    actions.idle.play()
  }, [actions])
  return <primitive object={scene} {...props} />

}

useGLTF.preload("src/models/stegosaurs.gltf");