"use client";
import { useInView } from "framer-motion";
import {
   Figma,
   Box,
   ChevronsLeftRight,
   Server,
   LucideIcon,
} from "lucide-react";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ServiceTypes } from "@/app/lib/types";
import ServiceCard from "./ServiceCard";

const itemMap: { [key: string]: LucideIcon } = {
   figma: Figma,
   blender: Box,
   frontend: ChevronsLeftRight,
   backend: Server,
};

const skillCards: ServiceTypes[] = [
   {
      icon: "figma",
      title: "UI / UX Design",
      description:
         "I use Figma to plan and prototype interfaces before development, helping ensure a smoother workflow and better user experience. My designs prioritize both usability and engagement while maintaining a clean, modern look.",
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
         "I build scalable server-side logic and APIs to ensure smooth and reliable performance behind the scenes. I also integrate payment solutions like the PayMongo API to enable secure and seamless online transactions.",
   },
];

const ServicesSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, {
      once: false,
      margin: "-100px",
   });
   return (
      <motion.section
         ref={ref}
         initial={{ opacity: 0, y: "-15vh" }}
         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
         transition={{ duration: 0.9, ease: "easeOut" }}
         id="service"
         className="h-[100vh] w-full flex flex-col items-center justify-center gap-4 min-[350px]:gap-8 md:gap-12 lg:gap-18  snap-center"
      >
         <div className="mt-20 min-[350px]:mt-0 flex flex-col items-center md:gap-2">
            <h1 className=" text-3xl! min-[350px]:text-4xl! md:text-5xl!">
               What I Provide
            </h1>
            <p className="text-center w-[20rem] min-[350px]:w-[24rem] md:w-[35rem]">
               Craft modern web applications with seamless UI/UX, Immersive 3d
               environments, and solid full-stack performance.
            </p>
         </div>
         <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCards.map((item, index) => {
               const IconComponent = itemMap[item.icon];
               return (
                  <ServiceCard
                     key={index}
                     IconComponent={IconComponent}
                     item={item}
                  />
               );
            })}
         </ul>
      </motion.section>
   );
};

export default ServicesSection;
