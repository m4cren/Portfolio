import { ProjectTypes } from "@/app/lib/types";

interface TechStackProps {
   selectedProject: ProjectTypes;
   label: string;
}

const TechStack = ({ label, selectedProject }: TechStackProps) => {
   return (
      <li className="flex flex-row justify-between">
         <p className="text-[1rem]! md:text-[1.4rem]!">{label}</p>
         <p className="text-[0.9rem]! md:text-[1rem]! font-light! w-[50%]">
            {selectedProject.tech_stack.frontend
               ?.map((item) => item)
               .join(", ")}
         </p>
      </li>
   );
};

export default TechStack;
