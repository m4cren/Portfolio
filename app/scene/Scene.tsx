"use client";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Model from "../3d_components/Model";
import CameraHandler from "../lib/CameraHandler";

interface SceneProps {
   camPos: [number, number, number];
   camRot: [number, number, number];
   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Scene = ({ camPos, camRot, setIsLoading }: SceneProps) => {
   return (
      <div className="fixed h-screen w-full bg-softbutter">
         <Canvas performance={{ min: 0.5, max: 0.95 }} dpr={[1, 1.5]}>
            <CameraHandler
               position={[camPos[0], camPos[1], camPos[2]]}
               rotation={[Math.PI / camRot[0], camRot[1], camRot[2]]}
            />

            <PerspectiveCamera makeDefault fov={85} />
            <ambientLight intensity={0.15} />

            <Model onLoadComplete={() => setIsLoading(false)} />

            <Environment preset="lobby" />
         </Canvas>
      </div>
   );
};

export default Scene;
