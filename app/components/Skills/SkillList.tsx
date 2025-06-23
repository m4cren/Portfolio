import { TechStackTypes } from "@/app/lib/types";
import Image from "next/image";
import React from "react";

interface SkillListProps {
   screenWidth: number;
   item: TechStackTypes;
   setSelectedTech: React.Dispatch<React.SetStateAction<TechStackTypes | null>>;
}
const SkillList = ({ item, screenWidth, setSelectedTech }: SkillListProps) => {
   return (
      <li
         onPointerLeave={() => {
            if (screenWidth > 890) {
               setSelectedTech(null);
            }
         }}
         onPointerEnter={() => setSelectedTech(item)}
         className="flex flex-col items-center cursor-pointer"
      >
         <Image
            src={`/icons/${item.icon}.png`}
            alt={item.icon}
            width={35}
            height={35}
            className="drop-shadow-md w-8 h-8 md:w-10 md:h-10 object-contain"
         />
         <p className="text-xs! md:text-lg!">{item.label}</p>
      </li>
   );
};

export default SkillList;
