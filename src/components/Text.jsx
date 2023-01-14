import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useFrame, extend } from '@react-three/fiber';
import { MeshBasicMaterial } from "three";
import { useState } from 'react'
import { useStore } from '../hooks/useStore.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import almendra from './almendra.json'


const Text = () => {
  extend({TextGeometry})
  const font = new FontLoader().parse(almendra);
  const textOptions = {
    font,
    size: 1,
    height: 0.1,
  }

  return (<>
    <mesh castShadow position={[0, -0.5, 0]} >
      <textGeometry attach='geometry' args={["grw", textOptions]}/>
      <meshPhysicalMaterial attach='material' color={'#cf6a63'} />
    </mesh>
    <mesh castShadow position={[4.3, -0.5, 0]} >
      <textGeometry attach='geometry' args={["^ ^", textOptions]}/>
      <meshPhysicalMaterial attach='material' color={'#1aa7ff'} />
    </mesh>
  </>
  );
}
export default Text