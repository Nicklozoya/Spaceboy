import React from "react";
import { useFrame } from "@react-three/fiber";
import Jupiter from './Jupiter'


  const Rotatingjupiter = () => {
    const group = React.useRef();

    useFrame(({clock}) => {
        group.current.rotation.y = clock.getElapsedTime()/24;
    });

    return (
        <group ref={group}>
            <Jupiter position={[5,0,0]} />
        </group>
    )
}
export default Rotatingjupiter