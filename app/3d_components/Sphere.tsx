"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { useActiveSection } from "../lib/contexts/ActiveSectionProvider";

const Sphere = () => {
   const meshRef = useRef<Mesh>(null);
   const { screenWidth } = useActiveSection();

   // Animate rotation
   useFrame(() => {
      if (meshRef.current) {
         meshRef.current.rotation.y += 0.01;
         meshRef.current.rotation.x += 0.005;
      }
   });

   return (
      <mesh ref={meshRef}>
         <sphereGeometry
            args={screenWidth > 890 ? [2.5, 25, 25] : [3, 25, 25]}
         />
         <meshStandardMaterial color={"#f6f7dd"} wireframe />
      </mesh>
   );
};

const AnimatedSphere = () => {
   return (
      <Canvas camera={{ position: [0, 0, 5] }}>
         <ambientLight intensity={0.8} />
         <directionalLight position={[2, 2, 5]} />
         <Sphere />
      </Canvas>
   );
};

export default AnimatedSphere;
