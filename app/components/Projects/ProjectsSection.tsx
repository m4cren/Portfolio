import { projects } from "@/app/lib/constants";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

const ProjectsSection = () => {
   return (
      <section
         id="projects"
         className="md:h-fit lg:h-[100vh] w-full flex items-center justify-center snap-start lg:snap-center "
      >
         <div className="w-[90vw] flex flex-col gap-8 mt-24 md:mt-36 lg:mt-16">
            <div className="flex flex-col items-center lg:items-start">
               <h1 className="text-4xl!">What I've Built</h1>
               <p>A look into my digital playground</p>
            </div>
            <div className="flex flex-row justify-between">
               <button className="text-softbutter w-[8%] hidden lg:block">
                  <ChevronLeft size={65} opacity={0.7} />
               </button>
               <ul className="grid grid-cols-1 gap-4 m-auto md:grid-cols-2 lg:flex lg:flex-row px-6 place-items-center w-[84%] md:gap-4 md:overflow-x-scroll lg:overflow-x-scroll pb-6 snap-mandatory">
                  {projects.map((item, index) => (
                     <li
                        key={index}
                        className="w-[18rem] flex flex-col items-center min-w-[18rem] h-[26rem] bg-gradient-to-t from-leather to-goldenbeige rounded-xl [box-shadow:0_0_4px_rgba(0,0,0,0.4)_inset]"
                     >
                        <img
                           src={`/images/${item.image_url}.png`}
                           alt="metafeast"
                           className="w-[90%] -mb-6"
                        />
                        <div className="flex flex-col items-center gap-2">
                           <h4>{item.label}</h4>
                           <p className="text-center text-sm! w-[95%]">
                              {item.short_description}
                           </p>
                        </div>
                        <button className="mt-5 flex px-4  py-1 cursor-pointer flex-row items-center gap-2 bg-softbutter rounded-md [box-shadow:0_0_4px_rgba(0,0,0,0.4)]">
                           <p className="text-leather! ">View</p>
                           <i className="text-leather">
                              <Eye />
                           </i>
                        </button>
                     </li>
                  ))}
                  {projects.map((item, index) => (
                     <li
                        key={index}
                        className="w-[18rem] flex flex-col items-center min-w-[18rem] h-[26rem] bg-gradient-to-t from-leather to-goldenbeige rounded-xl [box-shadow:0_0_4px_rgba(0,0,0,0.4)_inset]"
                     >
                        <img
                           src={`/images/${item.image_url}.png`}
                           alt="metafeast"
                           className="w-[90%] -mb-6"
                        />
                        <div className="flex flex-col items-center gap-2">
                           <h4>{item.label}</h4>
                           <p className="text-center text-sm! w-[95%]">
                              {item.short_description}
                           </p>
                        </div>
                        <button className="mt-5 flex px-4  py-1 cursor-pointer flex-row items-center gap-2 bg-softbutter rounded-md [box-shadow:0_0_4px_rgba(0,0,0,0.4)]">
                           <p className="text-leather! ">View</p>
                           <i className="text-leather">
                              <Eye />
                           </i>
                        </button>
                     </li>
                  ))}
               </ul>
               <button className="text-softbutter w-[8%]  hidden lg:flex justify-end items-center">
                  <ChevronRight size={65} opacity={0.7} />
               </button>
            </div>
         </div>
      </section>
   );
};

export default ProjectsSection;
