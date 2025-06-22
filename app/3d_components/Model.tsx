"use client";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

interface ModelProps {
   onLoadComplete: () => void;
}
const Model = ({ onLoadComplete }: ModelProps) => {
   useEffect(() => {
      onLoadComplete();
   }, [onLoadComplete]);

   const { scene } = useGLTF("/models/workspace_compressed.glb");
   return <primitive object={scene} />;
};

export default Model;
