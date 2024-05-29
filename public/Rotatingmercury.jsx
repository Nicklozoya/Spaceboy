import React from "react";
import { useFrame } from "@react-three/fiber";
import Mercury from './Mercury'


  const Rotatingmercury = () => {
    const group = React.useRef();

    useFrame(({clock}) => {
        group.current.rotation.y = clock.getElapsedTime()*2;
    });

    return (
        <group ref={group}>
            <Mercury position={[5,0,0]} />
        </group>
    )
}
export default Rotatingmercury