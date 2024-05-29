import React from "react";
import { useFrame } from "@react-three/fiber";
import Neptune from './Neptune'


  const Rotatingneptune = () => {
    const group = React.useRef();

    useFrame(({clock}) => {
        group.current.rotation.y = clock.getElapsedTime()/330;
    });

    return (
        <group ref={group}>
            <Neptune position={[5,0,0]} />
        </group>
    )
}
export default Rotatingneptune