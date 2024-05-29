import React from "react";
import { useFrame } from "@react-three/fiber";
import Venus from './Venus'


  const Rotatingvenus = () => {
    const group = React.useRef();

    useFrame(({clock}) => {
        group.current.rotation.y = clock.getElapsedTime()/2*1.63;
    });

    return (
        <group ref={group}>
            <Venus position={[5,0,0]} />
        </group>
    )
}
export default Rotatingvenus