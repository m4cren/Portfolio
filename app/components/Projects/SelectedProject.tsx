import { ProjectTypes } from "@/app/lib/types";
import { ArrowBigLeft, Clock, Github, Globe, Presentation } from "lucide-react";

interface SelectedProjectProps {
   handleBack: () => void;
   selectedProject: ProjectTypes;
}

const SelectedProject = ({
   selectedProject,
   handleBack,
}: SelectedProjectProps) => {
   return (
      <div className="grid grid-cols-1 gap-4 md:gap-8 lg:gap-0 lg:grid-cols-2 w-[92vw] md:w-[80vw] lg:w-[90vw] ">
         <div className="flex flex-col gap-4 md:gap-8">
            <div>
               <button
                  onClick={handleBack}
                  className="flex flex-row items-center gap-2 cursor-pointer text-softbutter"
               >
                  <ArrowBigLeft size={35} /> <h4>Back</h4>
               </button>
            </div>
            <div>
               <h2 className="text-4xl! md:text-5xl!">
                  {selectedProject.label}
               </h2>
               <p className="text-[0.9rem]! md:text-[1.1rem]!  max-w-[25rem]">
                  {selectedProject.short_description}
               </p>
            </div>
            <ul className="flex flex-col gap-2">
               <li className="text-softbutter flex flex-row items-center gap-2">
                  <Clock size={22} />{" "}
                  <p className="text-xs! md:text-sm! ">
                     {selectedProject.date_range}
                  </p>
               </li>
               <li className="text-softbutter flex flex-row items-center gap-2">
                  <Presentation size={22} />{" "}
                  <p className="text-xs! md:text-sm! ">
                     {selectedProject.project_details}
                  </p>
               </li>
               <li className="text-softbutter flex flex-row items-center gap-2">
                  <Github size={22} />{" "}
                  <p className="text-xs! md:text-sm! ">
                     <a
                        href={selectedProject.github_repo}
                        target="_blank"
                        className="underline"
                     >
                        {selectedProject.github_repo}
                     </a>
                  </p>
               </li>
               {selectedProject.link && (
                  <li className="text-softbutter flex flex-row items-center gap-2">
                     <Globe size={22} />{" "}
                     <p className="text-xs! md:text-sm! ">
                        <a
                           href={selectedProject.link}
                           target="_blank"
                           className="underline"
                        >
                           {selectedProject.link}
                        </a>
                     </p>
                  </li>
               )}
            </ul>
            <div className="[background-image:linear-gradient(to_top,var(--color-leather),var(--color-goldenbeige))] flex flex-col gap-4 bg-gradient-to-t from-leather to-goldenbeige rounded-lg [box-shadow:0_0_4px_rgba(0,0,0,0.4)_inset] px-4 py-6  w-[100%] lg:w-[90%] m-auto lg:m-0">
               <h4>Technology Used</h4>
               <hr className="text-softbutter opacity-40" />
               <ul className="flex flex-col gap-6">
                  {selectedProject.tech_stack.frontend && (
                     <li className="flex flex-row justify-between">
                        <p className="text-[1rem]! md:text-[1.4rem]!">
                           Frontend
                        </p>
                        <p className="text-[0.9rem]! md:text-[1rem]! font-light! w-[50%]">
                           {selectedProject.tech_stack.frontend
                              ?.map((item) => item)
                              .join(", ")}
                        </p>
                     </li>
                  )}
                  {selectedProject.tech_stack.backend && (
                     <li className="flex flex-row justify-between">
                        <p className="text-[1rem]! md:text-[1.4rem]!">
                           Backend
                        </p>
                        <p className="text-[0.9rem]! md:text-[1rem]! font-light! w-[50%]">
                           {selectedProject.tech_stack.backend
                              ?.map((item) => item)
                              .join(", ")}
                        </p>
                     </li>
                  )}
                  {selectedProject.tech_stack.integrated_api && (
                     <li className="flex flex-row justify-between">
                        <p className="text-[1rem]! md:text-[1.4rem]!">
                           Integrated APIs
                        </p>
                        <p className="text-[0.9rem]! md:text-[1rem]! font-light! w-[50%]">
                           {selectedProject.tech_stack.integrated_api
                              ?.map((item) => item)
                              .join(", ")}
                        </p>
                     </li>
                  )}
               </ul>
            </div>
         </div>
         <div className="flex flex-col gap-10 pb-50 items-center lg:items-start">
            <video
               src={`/videos/${selectedProject.video_url}.mp4`}
               controls
               width={16 * 40}
               height={9 * 40}
               className="rounded-lg shadow-lg"
            >
               Browser doesn&apos;t support the video tag
            </video>
            <div className="flex flex-col gap-2 w-[85%] lg:w-full">
               <h4>Why I built this?</h4>
               <p>{selectedProject.long_details}</p>
            </div>
         </div>
      </div>
   );
};

export default SelectedProject;
