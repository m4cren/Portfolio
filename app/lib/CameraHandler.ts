import { useCameraTransition } from "./hooks/useCameraTransitio";

const CameraHandler = ({
   position,
   rotation,
}: {
   position: [number, number, number];
   rotation: [number, number, number];
}) => {
   useCameraTransition(position, rotation);
   return null;
};

export default CameraHandler;
