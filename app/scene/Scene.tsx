"use client";
import {
   Environment,
   OrbitControls,
   PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Model from "../3d_components/Model";
import CameraHandler from "../lib/CameraHandler";
import { useEffect, useState } from "react";
import { useActiveSection } from "../lib/contexts/ActiveSectionProvider";

interface SceneProps {
   camPos: [number, number, number];
   camRot: [number, number, number];
}

const Scene = ({ camPos, camRot }: SceneProps) => {
   return (
      <div className="fixed h-screen w-full">
         <Canvas>
            <CameraHandler
               position={[camPos[0], camPos[1], camPos[2]]}
               rotation={[Math.PI / camRot[0], camRot[1], camRot[2]]}
            />

            <PerspectiveCamera makeDefault fov={85} />
            <ambientLight intensity={0.15} />

            <Model />

            <Environment preset="lobby" />
         </Canvas>
      </div>
   );
};

export default Scene;
