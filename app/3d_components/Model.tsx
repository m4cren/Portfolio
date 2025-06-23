"use client";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

interface ModelProps {
   onLoadComplete: () => void;
}
const Model = ({ onLoadComplete }: ModelProps) => {
   const { scene } = useGLTF("/models/compressed_workspace.glb", true);

   useEffect(() => {
      if (scene) onLoadComplete();
   }, [scene, onLoadComplete]);

   return <primitive object={scene} />;
};

export default Model;
