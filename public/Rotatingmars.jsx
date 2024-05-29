import React from "react";
import { useFrame } from "@react-three/fiber";
import Mars from './Mars'


  const Rotatingmars = () => {
    const group = React.useRef();

    useFrame(({clock}) => {
        group.current.rotation.y = clock.getElapsedTime()/2* 0.5314
    });

    return (
        <group ref={group}>
            <Mars position={[5,0,0]} />
        </group>
    )
}
export default Rotatingmars