import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Greet from "./Greet";
import SocialButtons from "./SocialButtons";

const HomeSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, {
      once: false,
      margin: "-100px",
   });
   return (
      <section
         id="home"
         className="h-[100vh] w-full flex items-center justify-end snap-center "
      >
         <motion.div
            ref={ref}
            initial={{ opacity: 0, y: "-10vh" }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full px-8 md:px-18 lg:px-0 lg:w-[55%] h-full flex flex-col justify-center  gap-8 md:gap-10"
         >
            <div className="flex flex-col gap-0 md:gap-2">
               <motion.h1 className="text-[2.5rem]! min-[350px]:text-5xl! md:text-7xl!">
                  Hi it's Rainier
               </motion.h1>
               <Greet />
               <p className=" w-[95%] md:w-[60%] mt-4 md:mt-6">
                  A 2nd-year Computer Engineering student at Laguna State
                  Polytechnic University – San Pablo Campus, and a self-taught
                  software developer passionate about building modern web
                  applications. Based in the <strong>Philippines</strong>.
               </p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-start  lg:items-center gap-6 md:gap-10">
               <div className="flex flex-row items-center gap-4">
                  <button className="[background-image:linear-gradient(to_top,var(--color-leather),var(--color-goldenbeige))] py-2 bg-gradient-to-t from-leather to-goldenbeige  cursor-pointer text-softbutter [text-shadow:-2px_2px_4px_rgba(0,0,0,0.4)] [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)] font-medium text-sm md:text-lg rounded-lg">
                     <a
                        href="/Rainier_Reyes_resume.pdf"
                        className="w-full px-6 md:px-10"
                        download
                     >
                        Download Resume
                     </a>
                  </button>

                  <a
                     href="#contact"
                     className="inline-block  rounded-lg px-6 py-2 text-goldenbeige text-sm md:text-lg font-medium border-2 border-goldenbeige shadow-[0_4px_6px_rgba(0,0,0,0.4)]"
                     style={{
                        WebkitMaskImage:
                           "-webkit-radial-gradient(white, black)",
                        WebkitTapHighlightColor: "transparent",
                        WebkitBackfaceVisibility: "hidden",
                        backfaceVisibility: "hidden",
                        transform: "translateZ(0)", // Forces GPU rendering
                     }}
                  >
                     Hire Me
                  </a>
               </div>
               <div className="flex flex-row gap-8 items-center pl-1 md:pl-2 lg:pl-0">
                  <SocialButtons />
               </div>
            </div>
         </motion.div>
      </section>
   );
};

export default HomeSection;
