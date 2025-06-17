import { useState } from "react";
import useFrameProvider from "../useFrameProvider";

const useCameraTools = () => {
   const { to_service, to_skilss, init_Frame, to_contact } = useFrameProvider();
   const [posX, setPosX] = useState<number>(to_contact.frame.pos[0]);
   const [posY, setPosY] = useState<number>(to_contact.frame.pos[1]);
   const [posZ, setPosZ] = useState<number>(to_contact.frame.pos[2]);

   const [rotX, setRotX] = useState<number>(to_contact.frame.rot[0]);
   const [rotY, setRotY] = useState<number>(to_contact.frame.rot[1]);
   const [rotZ, setRotZ] = useState<number>(to_contact.frame.rot[2]);

   const camPos: [number, number, number] = [posX, posY, posZ];
   const camRot: [number, number, number] = [rotX, rotY, rotZ];

   const addPosX = () => setPosX((prevPosX) => prevPosX + 0.01);
   const addPosY = () => setPosY((prevPosY) => prevPosY + 0.01);
   const addPosZ = () => setPosZ((prevPosZ) => prevPosZ + 0.01);

   const addRotX = () => setRotX((prevRotX) => prevRotX + 0.001);
   const addRotY = () => setRotY((prevRotY) => prevRotY + 0.01);
   const addRotZ = () => setRotZ((prevRotZ) => prevRotZ + 0.01);

   const minusPosX = () => setPosX((prevPosX) => prevPosX - 0.01);
   const minusPosY = () => setPosY((prevPosY) => prevPosY - 0.01);
   const minusPosZ = () => setPosZ((prevPosZ) => prevPosZ - 0.01);

   const minusRotX = () => setRotX((prevRotX) => prevRotX - 0.001);
   const minusRotY = () => setRotY((prevRotY) => prevRotY - 0.01);
   const minusRotZ = () => setRotZ((prevRotZ) => prevRotZ - 0.01);

   return {
      camPos,
      camRot,
      cameraFunctions: {
         addPosX,
         addPosY,
         addPosZ,
         minusPosX,
         minusPosY,
         minusPosZ,
         addRotX,
         addRotY,
         addRotZ,
         minusRotX,
         minusRotY,
         minusRotZ,
      },
   };
};

export default useCameraTools;
