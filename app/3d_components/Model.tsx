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

   const { scene } = useGLTF("/models/compressed_workspace.glb");
   return <primitive object={scene} />;
};

export default Model;
