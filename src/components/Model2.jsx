import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("src/models/palmeras2.glb");
  const { actions } = useAnimations(animations, group)
  const [isClicked, setIsClicked] = useState(false)
console.log(actions,'actions')

  useEffect(() => {
  if(isClicked === true){
    actions.palmera2ArmatureAction.play().paused = false
  }
  if(isClicked === false){
    actions.palmera2ArmatureAction.play().paused = true
  }
  },[isClicked])

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, -1.9, 0]}
        rotation={[Math.PI, -1.14, 2.53]}
        scale={1}
        onClick={() => setIsClicked((o) => !o)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.palmera2Mesh.geometry}
          material={materials["1texture.001"]}
        />
      </group>
      <group position={[0.11, -2.2, 0.13]} scale={1}
        onClick={() => setIsClicked((o) => !o)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.palmera1Mesh.geometry}
          material={materials["1texture.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coco5.geometry}
        material={materials.marron2}
        position={[-0.63, -0.3, -0.24]}
        scale={0.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coco4.geometry}
        material={materials.marron2}
        position={[-0.53, -0.3, -0.08]}
        scale={0.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coco3.geometry}
        material={materials.marron2}
        position={[-0.38, -0.3, -0.25]}
        scale={0.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coco2.geometry}
        material={materials.marron2}
        position={[-0.1, -0.5, 1.6]}
        scale={0.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coco1.geometry}
        material={materials.marron2}
        position={[-0.3, -0.5, 1.6]}
        scale={0.13}
      />
    </group>
  );
}

useGLTF.preload("src/models/palmeras.gltf");