import { ServiceTypes } from "@/app/lib/types";
import React from "react";
import { IconType } from "react-icons";

interface ServiceCardProps {
   item: ServiceTypes;
   IconComponent: IconType;
}

const ServiceCard = ({ item, IconComponent }: ServiceCardProps) => {
   return (
      <li
         style={{ boxShadow: "-2px 2px 4px rgba(0,0,0,0.4)" }}
         className="[background-image:linear-gradient(to_top,var(--color-leather),var(--color-goldenbeige))] flex flex-col justify-center items-center gap-5 md:gap-6 lg:gap-8 px-4  bg-gradient-to-t from-leather to-goldenbeige rounded-lg [box-shadow:0_0_7px_rgba(0,0,0,0.3)_inset] w-[9rem] h-[10rem] min-[350px]:w-[10rem] min-[350px]:h-[12rem] md:w-[16rem] md:h-[20rem] lg:w-[18rem] lg:h-[24rem]"
      >
         <i className="text-softbutter scale-150 min-[350px]:scale-200">
            <IconComponent />
         </i>
         <h2 className="text-center text-[1rem]! font-medium! min-[250px]:font-bold leading-5 min-[350px]:leading-6 min-[350px]:text-xl! md:text-2xl! lg:text-3xl!">
            {item.title}
         </h2>
         <p className="hidden md:block md:text-[0.8rem]! lg:text-[0.92rem]! text-center">
            {item.description}
         </p>
      </li>
   );
};

export default ServiceCard;
