import React from "react";
import { useFrame } from "@react-three/fiber";
import Uranus from './Uranus'


  const Rotatinguranus = () => {
    const group = React.useRef();

    useFrame(({clock}) => {
        group.current.rotation.y = clock.getElapsedTime()/168;
    });

    return (
        <group ref={group}>
            <Uranus position={[5,0,0]} />
        </group>
    )
}
export default Rotatinguranus