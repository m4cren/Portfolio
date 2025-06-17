export type CameraControlTypes = {
   cameraFunctions: {
      addPosX: () => void;
      addPosY: () => void;
      addPosZ: () => void;
      addRotX: () => void;
      addRotY: () => void;
      addRotZ: () => void;

      minusPosX: () => void;
      minusPosY: () => void;
      minusPosZ: () => void;
      minusRotX: () => void;
      minusRotY: () => void;
      minusRotZ: () => void;
   };
};

export type CameraType = {
   pos: [number, number, number];
   rot: [number, number, number];
};
