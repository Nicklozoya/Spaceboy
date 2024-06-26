/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 mercury.gltf 
Author: kongle (https://sketchfab.com/minecraftnorge)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/mercury-sharp-0af93338a4754ab1a34dcdd332cfaa75
Title: Mercury sharp
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/mercury.gltf')
  return (
    <group {...props} dispose={null} position={[0.5,2,2]} scale={0.1}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.moon} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/mercury.gltf')
