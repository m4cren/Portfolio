"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const CanvaParent = () => {
   return (
      <Canvas>
         <ambientLight intensity={1} />
         <mesh>
            <sphereGeometry args={[5, 32, 32]} />
            <meshBasicMaterial color="red" />
         </mesh>
         <OrbitControls />
      </Canvas>
   );
};

export default CanvaParent;
