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

export type ProjectTypes = {
   label: string;
   short_description: string;
   long_details: string;
   image_url: string;
   video_url: string;
   date_range: string;
   project_details: string;
   github_repo: string;
   link?: string;
   tech_stack: {
      frontend?: string[];
      backend?: string[];
      integrated_api?: string[];
      others?: string[];
   };
};
