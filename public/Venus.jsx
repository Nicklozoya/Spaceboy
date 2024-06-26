/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 venus.gltf 
Author: kongle (https://sketchfab.com/minecraftnorge)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/venus-b306aaadbf2b4fcea1afa2db5ed75b4f
Title: Venus
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/venus.gltf')
  return (
    <group {...props} dispose={null} position={[1.4,2,2]} scale={0.13} >
      <mesh geometry={nodes.Object_2.geometry} material={materials.moon} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/venus.gltf')
