"use client";

import Scene from "./scene/Scene";
import useCameraTools from "./lib/hooks/useCameraTools";
import CameraControlls from "./lib/CameraControls";
import { useState } from "react";
import useFrameProvider from "./lib/useFrameProvider";

const Main = () => {
   const { camPos, camRot, cameraFunctions } = useCameraTools();
   console.log(
      `Cam Pos: PX - ${camPos[0]}    PY - ${camPos[1]}    PZ - ${camPos[2]}`,
   );
   console.log(
      `Cam Rot: RX - ${camRot[0]}    RY - ${camRot[1]}    RZ - ${camRot[2]}`,
   );
   //    const { init_Frame } = useFrameProvider();
   //    const [camPos, setCamPos] = useState<[number, number, number]>([
   //       init_Frame.pos[0],
   //       init_Frame.pos[1],
   //       init_Frame.pos[2],
   //    ]);
   //    const [camRot, setCamRot] = useState<[number, number, number]>([
   //       init_Frame.rot[0],
   //       init_Frame.rot[1],
   //       init_Frame.rot[2],
   //    ]);

   return (
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full ">
         <Scene camPos={camPos} camRot={camRot} />
         {/* <div className="fixed bottom-0 left-0 right-0">
            <CameraControlls cameraFunctions={cameraFunctions} />
         </div> */}
      </div>
   );
};

export default Main;
