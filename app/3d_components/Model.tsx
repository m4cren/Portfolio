import { useGLTF } from "@react-three/drei";

const Model = () => {
   const { scene } = useGLTF("/models/workspace_compressed.glb");
   return <primitive object={scene} />;
};

export default Model;
