"use client";
import { projects } from "@/app/lib/constants";
import { ProjectTypes } from "@/app/lib/types";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";
import SelectedProject from "./SelectedProject";

const ProjectsSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, {
      once: false,
      margin: "-100px",
   });
   const [selectedProject, setSelectedProject] = useState<ProjectTypes | null>(
      null,
   );
   const handleSelectedProject = (item: ProjectTypes) => {
      setSelectedProject(item);
   };
   const handleBack = () => {
      setSelectedProject(null);
   };
   return (
      <motion.section
         id="projects"
         ref={ref}
         initial={{ opacity: 0, y: "-15vh" }}
         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
         transition={{ duration: 0.9, ease: "easeOut" }}
         className={classNames(
            "w-full flex items-center  justify-center snap-start lg:snap-center ",
            {
               "items-start pt-25 md:pt-40 h-[fit] lg:h-[100vh]":
                  selectedProject,
               "h-[100vh]": !selectedProject,
            },
         )}
      >
         {!selectedProject ? (
            <div
               className={classNames(
                  "w-full lg:w-[90vw] flex flex-col gap-8 mt-2  md:mt-36 lg:mt-16",
                  {
                     "mt-24": !selectedProject,
                  },
               )}
            >
               <div className="flex flex-col items-center lg:items-start">
                  <h1 className="text-4xl! sm:text-5xl!">
                     What I&apos;ve Built
                  </h1>
                  <p>A look into my digital playground</p>
               </div>
               <div className="">
                  <Swiper
                     modules={[Navigation, Pagination]}
                     slidesPerView={3}
                     centeredSlides={true}
                     navigation
                     pagination={{ clickable: true }}
                     className="swiper-wrapper-custom"
                     breakpoints={{
                        300: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                     }}
                  >
                     {projects.map((item, index) => (
                        <SwiperSlide
                           key={index}
                           className="!flex !justify-center !p-0 !pb-8"
                        >
                           <ProjectCard
                              item={item}
                              handleSelectedProject={handleSelectedProject}
                           />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         ) : (
            <SelectedProject
               handleBack={handleBack}
               selectedProject={selectedProject}
            />
         )}
      </motion.section>
   );
};

export default ProjectsSection;
