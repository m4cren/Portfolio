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

export type TechStackTypes = {
   label: string;
   icon: string;
   category: "Languages" | "Libraries" | "Frameworks" | "Databases" | "Tools";
   description: string;
   experience: string;
   use: string;
};
