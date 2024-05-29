import React from "react";
import { useFrame } from "@react-three/fiber";
import Saturn from './Saturn'


  const Rotatingsaturn = () => {
    const group = React.useRef();

    useFrame(({clock}) => {
        group.current.rotation.y = clock.getElapsedTime()/60;
    });

    return (
        <group ref={group}>
            <Saturn position={[5,0,0]} />
        </group>
    )
}
export default Rotatingsaturn