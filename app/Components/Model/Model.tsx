"use client";

import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Office } from "./Office";
import Overlay from "./Overlay";

const Model = () => {
  return (
    <>
      <Canvas camera={{
        fov:64,
        position:[2.3,1.5,2.3]
      }}>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} />
        <ScrollControls pages={3} damping={0.25} >
          <Overlay />
        <Office />
        </ScrollControls>
      </Canvas>
    </>
  );
};
export default Model;
