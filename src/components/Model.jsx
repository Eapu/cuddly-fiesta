import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useFrame } from '@react-three/fiber';
import { MeshBasicMaterial } from "three";
import { useState } from 'react'
import { useStore } from '../hooks/useStore.js'

export default function Model(props) {
  const { nodes, materials } = useGLTF("https://elenacube.s3.eu-west-1.amazonaws.com/models/virus5.body.gltf");
  const material = new MeshBasicMaterial({ color: "red" });
  //const [override, setOverride] = useState(false);
  const [override, setOverride] = useStore(state => [state.override, state.setOverride])

console.log(override,'overiride')
  return (
    <group {...props} dispose={null}>
      <group position={[-10.04, 1, 0.5]} scale={0.61}>
        <mesh onClick={() => setOverride((o) => !o)}
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={override === true ? material : materials.body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials["teeths.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={materials["mouth.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_3.geometry}
          material={materials.tongue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_4.geometry}
          material={materials.eyes}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/virus5.body.gltf");


/*
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useFrame } from '@react-three/fiber';
import { MeshBasicMaterial } from "three";

export default function Model(props) {
  const gltf = useLoader(GLTFLoader, "src/models/virus5.body.gltf");
  const myMesh = React.useRef();
  const material = new MeshBasicMaterial({ color: "red" });

  return (
    <>
      <primitive object={gltf.scene} scale={0.4} position={[0, -1, 0.5]} />
      
    </>
  );
}
*/