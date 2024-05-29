import React from "react";
import { useFrame } from "@react-three/fiber";
import Earth from './Earth'


  const Rotatingearth = () => {
    const group = React.useRef();

    useFrame(({clock}) => {
        group.current.rotation.y = clock.getElapsedTime()/2;
    });

    return (
        <group ref={group}>
            <Earth position={[5,0,0]} />
        </group>
    )
}
export default Rotatingearth