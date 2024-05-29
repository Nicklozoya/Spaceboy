/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 mars.gltf 
Author: AirStudios (https://sketchfab.com/sebbe613)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mars-5fc8b7168b044527a05ed3903c998b65
Title: Mars
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/mars.gltf')
  return (
    <group {...props} dispose={null} position={[3.5,2,3]}>
      <mesh geometry={nodes.pSphere1_lambert3_0.geometry} material={materials.lambert3} scale={.10} />
    </group>
  )
}

useGLTF.preload('/mars.gltf')
