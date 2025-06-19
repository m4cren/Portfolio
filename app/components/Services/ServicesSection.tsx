import {
   Figma,
   Box,
   ChevronsLeftRight,
   Server,
   LucideIcon,
} from "lucide-react";
import React from "react";

const itemMap: { [key: string]: LucideIcon } = {
   figma: Figma,
   blender: Box,
   frontend: ChevronsLeftRight,
   backend: Server,
};

const skillCards: { icon: string; title: string; description: string }[] = [
   {
      icon: "figma",
      title: "UI / UX Design",
      description:
         "I create clean modern interfaces with strong focus on userflow and engagement.Each design balances aaesthetics with functionality.",
   },
   {
      icon: "blender",
      title: "3D Modeling",
      description:
         "Using Blender, I craft detailed 3D models that bring depth and interactivity to web and design projects.",
   },
   {
      icon: "frontend",
      title: "Frontend Development",
      description:
         "I build responsive, user-friendly interfaces with a focus on clarity and usability",
   },
   {
      icon: "backend",
      title: "Backend Development",
      description:
         "I build scalable server-side logic and APIs that keep everything running smoothly behind the scenes",
   },
];

const ServicesSection = () => {
   return (
      <section
         id="service"
         className="h-[100vh] w-full flex flex-col items-center justify-center gap-4 min-[350px]:gap-8 md:gap-12 lg:gap-18  snap-center"
      >
         <div className="flex flex-col items-center md:gap-2">
            <h1 className=" text-3xl! min-[350px]:text-4xl! md:text-5xl!">
               What I Provide
            </h1>
            <p className="text-center w-[20rem] min-[350px]:w-[24rem] md:w-[35rem]">
               Craft modern web applications with seamless UI/UX, Immersive 3d
               environments, and solid full-stack performance.
            </p>
         </div>
         <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCards.map(({ description, icon, title }, index) => {
               const IconComponent = itemMap[icon];
               return (
                  <li
                     key={index}
                     style={{ boxShadow: "-2px 2px 4px rgba(0,0,0,0.4)" }}
                     className="flex flex-col justify-center items-center gap-5 md:gap-6 lg:gap-8 px-4  bg-gradient-to-t from-leather to-goldenbeige rounded-lg [box-shadow:0_0_7px_rgba(0,0,0,0.3)_inset] w-[9rem] h-[10rem] min-[350px]:w-[10rem] min-[350px]:h-[12rem] md:w-[16rem] md:h-[20rem] lg:w-[18rem] lg:h-[24rem]"
                  >
                     <i className="text-softbutter scale-150 min-[350px]:scale-200">
                        <IconComponent />
                     </i>
                     <h2 className="text-center text-lg! leading-5 min-[350px]:leading-6 min-[350px]:text-xl! md:text-2xl! lg:text-3xl!">
                        {title}
                     </h2>
                     <p className="hidden md:block md:text-[0.8rem]! lg:text-[0.92rem]! text-center">
                        {description}
                     </p>
                  </li>
               );
            })}
         </ul>
      </section>
   );
};

export default ServicesSection;
