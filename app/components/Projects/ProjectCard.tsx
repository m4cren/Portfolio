import { ProjectTypes } from "@/app/lib/types";
import { Eye } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
   item: ProjectTypes;

   handleSelectedProject: (item: ProjectTypes) => void;
}

const ProjectCard = ({ item, handleSelectedProject }: ProjectCardProps) => {
   return (
      <li className="[background-image:linear-gradient(to_top,var(--color-leather),var(--color-goldenbeige))] w-[18rem] flex flex-col items-center min-w-[18rem] h-[24rem] md:h-[26rem] bg-gradient-to-t from-leather to-goldenbeige rounded-xl [box-shadow:0_0_4px_rgba(0,0,0,0.4)_inset]">
         <Image
            src={`/images/${item.image_url}.png`}
            alt="metafeast"
            width={500}
            height={500}
            className="w-[90%] -mb-4"
         />
         <div className="flex flex-col items-center gap-2">
            <h4>{item.label}</h4>
            <p className="text-center text-xs! md:text-sm! w-[80%] md:w-[95%]">
               {item.short_description}
            </p>
         </div>
         <button
            onClick={() => handleSelectedProject(item)}
            className="mt-5 flex px-4  py-1 cursor-pointer flex-row items-center gap-2 bg-softbutter rounded-md [box-shadow:0_0_4px_rgba(0,0,0,0.4)]"
         >
            <p className="text-leather! ">View</p>
            <i className="text-leather">
               <Eye />
            </i>
         </button>
      </li>
   );
};

export default ProjectCard;
