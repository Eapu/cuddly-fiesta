import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Bee(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("https://elenacube.s3.eu-west-1.amazonaws.com/bee.glb");
  const { actions } = useAnimations(animations, group)
  const [isClicked, setIsClicked] = useState(false)
console.log(actions,'actions')

  useEffect(() => {
  if(isClicked === true){
    actions.idle.play().paused = false
    actions.ala1.play().paused = false
    actions.ala2.play().paused = false
  }
  if(isClicked === false){
    actions.idle.play().paused = true
    actions.ala1.play().paused = true

    actions.ala2.play().paused = true

  }
  },[isClicked])

  return (
    <group ref={group} {...props} dispose={null} position={[0, 2, 0]}
    
    onClick={() => setIsClicked((o) => !o)}>
    <group name="Scene" >
      <group name="AbejaArmature">
        <group name="Bone" position={[0, -0.3, 0]}>
          <group
            name="Armature"
            position={[0, 0.14, -0.09]}
            rotation={[-0.88, 0.27, 0.53]}
            
            >
            <group name="Bone_1" rotation={[-0.08, 0, -0.1]}>
              <mesh
                name="Cube002"
                castShadow
                receiveShadow
                geometry={nodes.Cube002.geometry}
                material={materials["GLASS.003"]}
                position={[-0.08, 0.28, 0.02]}
                rotation={[0.32, 0.89, -0.22]}
                scale={[0.38, 0.38, 0.08]}
              />
            </group>
          </group>
          <group
            name="Armature001"
            position={[0, 0.14, 0.04]}
            rotation={[0.88, -0.27, -2.61]}
            scale={-1}
          >
            <group name="Bone_2" rotation={[-0.29, 0, 0]}>
              <mesh
                name="Cube001"
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials["GLASS.003"]}
                position={[-0.08, 0.28, 0.02]}
                rotation={[0.32, 0.89, -0.22]}
                scale={[0.38, 0.38, 0.08]}
              />
            </group>
          </group>
          <group
            name="abejaMesh007"
            position={[0.01, 0.03, -0.02]}
            rotation={[0, Math.PI / 2, 0]}
            scale={0.1}
          >
            <mesh
              name="Esfera008"
              castShadow
              receiveShadow
              geometry={nodes.Esfera008.geometry}
              material={materials["negro.002"]}
            />
            <mesh
              name="Esfera008_1"
              castShadow
              receiveShadow
              geometry={nodes.Esfera008_1.geometry}
              material={materials["amarillo.002"]}
            />
            <mesh
              name="Esfera008_2"
              castShadow
              receiveShadow
              geometry={nodes.Esfera008_2.geometry}
              material={materials.blanco}
            />
            <mesh
              name="Esfera008_3"
              castShadow
              receiveShadow
              geometry={nodes.Esfera008_3.geometry}
              material={materials["Material.001"]}
            />
          </group>
        </group>
      </group>
    </group>
  </group>
  );
}

useGLTF.preload("src/models/palmeras.gltf");