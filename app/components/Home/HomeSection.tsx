import React from "react";
import SocialButtons from "./SocialButtons";
import Greet from "./Greet";
import { motion } from "framer-motion";

const HomeSection = () => {
   return (
      <section
         id="home"
         className="h-[100vh] w-full flex items-center justify-end snap-center"
      >
         <div className="w-full px-8 md:px-18 lg:px-0 lg:w-[55%] h-full flex flex-col justify-center  gap-8 md:gap-10">
            <div className="flex flex-col gap-0 md:gap-2">
               <motion.h1 className="text-[2.8rem]! min-[350px]:text-5xl! md:text-7xl!">
                  Hi it's Rainier
               </motion.h1>
               <Greet />
               <p className=" w-[95%] md:w-[60%] mt-4 md:mt-6">
                  A 2nd-year Computer Engineering student at Laguna State
                  Polytechnic University - San Pablo Laguna, passionate about
                  software development and building fast, user friendly web
                  applications
               </p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-start  lg:items-center gap-6 md:gap-10">
               <div className="flex flex-row items-center gap-4">
                  <button className="cursor-pointer text-softbutter [text-shadow:-2px_2px_4px_rgba(0,0,0,0.4)] [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)] font-medium text-sm md:text-lg bg-gradient-to-t from-leather to-goldenbeige rounded-lg px-10 py-2">
                     Download CV
                  </button>
                  <button className="cursor-pointer text-goldenbeige [text-shadow:-2px_2px_4px_rgba(0,0,0,0.4)] [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)] outline-2 outline-goldenbeige -outline-offset-2 font-medium text-sm md:text-lg rounded-lg px-6 py-2">
                     <a href="#contact"> Hire Me</a>
                  </button>
               </div>
               <div className="flex flex-row gap-8 items-center pl-1 md:pl-2 lg:pl-0">
                  <SocialButtons />
               </div>
            </div>
         </div>
      </section>
   );
};

export default HomeSection;
