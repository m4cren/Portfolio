import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectsSection = () => {
   return (
      <section
         id="projects"
         className="h-[100vh] w-full flex items-center justify-center snap-center "
      >
         <div className="w-[90vw] flex flex-col gap-8 mt-16">
            <div className="flex flex-col">
               <h1 className="text-4xl!">What I've Built</h1>
               <p>A look into my digital playground</p>
            </div>
            <div className="flex flex-row justify-between">
               <button className="text-softbutter w-[8%] ">
                  <ChevronLeft size={65} opacity={0.7} />
               </button>
               <ul className="flex flex-row px-6 w-[84%] gap-4 overflow-x-scroll pb-6 snap-mandatory">
                  <li className="w-[18rem] flex flex-col items-center min-w-[18rem] h-[26rem] bg-gradient-to-t from-leather to-goldenbeige rounded-xl [box-shadow:0_0_4px_rgba(0,0,0,0.4)_inset]">
                     <img
                        src={"/images/metafeast.png"}
                        alt="metafeast"
                        className="w-[90%] -mb-6"
                     />
                     <div className="flex flex-col items-center gap-2">
                        <h4>Metafeast</h4>
                        <p className="text-center text-sm! w-[95%]">
                           An interactive three dimensional customer interface
                           for dining restaurant
                        </p>
                     </div>
                     <button className="mt-5 flex px-4 py-1 cursor-pointer flex-row items-center gap-2 bg-softbutter rounded-md [box-shadow:0_0_4px_rgba(0,0,0,0.4)]">
                        <p className="text-leather! ">View</p>
                        <i className="text-leather">
                           <Eye />
                        </i>
                     </button>
                  </li>
               </ul>
               <button className="text-softbutter w-[8%]  flex justify-end items-center">
                  <ChevronRight size={65} opacity={0.7} />
               </button>
            </div>
         </div>
      </section>
   );
};

export default ProjectsSection;
