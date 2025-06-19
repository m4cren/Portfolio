"use client";

import Scene from "./scene/Scene";
import useCameraTools from "./lib/hooks/useCameraTools";
import CameraControlls from "./lib/CameraControls";
import { useEffect, useState } from "react";
import useFrameProvider from "./lib/useFrameProvider";
import Home from "./page";
import { useActiveSection } from "./lib/contexts/ActiveSectionProvider";

const Main = () => {
   const { activeSection } = useActiveSection();
   // const { camPos, camRot, cameraFunctions } = useCameraTools();
   // console.log(
   //    `Cam Pos: PX - ${camPos[0]}    PY - ${camPos[1]}    PZ - ${camPos[2]}`,
   // );
   // console.log(
   //    `Cam Rot: RX - ${camRot[0]}    RY - ${camRot[1]}    RZ - ${camRot[2]}`,
   // );
   const { init_Frame, to_contact, to_projects, to_service, to_skilss } =
      useFrameProvider();
   const [camPos, setCamPos] = useState<[number, number, number]>([
      init_Frame.pos[0],
      init_Frame.pos[1],
      init_Frame.pos[2],
   ]);
   const [camRot, setCamRot] = useState<[number, number, number]>([
      init_Frame.rot[0],
      init_Frame.rot[1],
      init_Frame.rot[2],
   ]);

   useEffect(() => {
      switch (activeSection) {
         case "home":
            setCamPos(init_Frame.pos);
            setCamRot(init_Frame.rot);
            break;
         case "service":
            setCamPos(to_service.frame.pos);
            setCamRot(to_service.frame.rot);
            break;
         case "skills":
            setCamPos(to_skilss.frame.pos);
            setCamRot(to_skilss.frame.rot);
            break;
         case "projects":
            setCamPos(to_projects.frame.pos);
            setCamRot(to_projects.frame.rot);
            break;
         case "contact":
            setCamPos(to_contact.frame.pos);
            setCamRot(to_contact.frame.rot);
            break;
      }
   }, [activeSection]);

   return (
      <div className="fixed top-0 left-0 right-0 inset-0 -z-10 ">
         <Scene camPos={camPos} camRot={camRot} />
         {/* <div className="fixed bottom-0 left-0 right-0">
            <CameraControlls cameraFunctions={cameraFunctions} />
         </div> */}
      </div>
   );
};

export default Main;
