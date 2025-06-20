"use client";
import { links } from "@/app/lib/constants";
import { useActiveSection } from "@/app/lib/contexts/ActiveSectionProvider";

import classNames from "classnames";
import React, { useState } from "react";

interface ToggleMenuProps {
   handleToggle: () => void;
   handleClosing: () => void;
   isClosing: boolean;
}

const ToggleMenu = ({
   handleToggle,
   handleClosing,
   isClosing,
}: ToggleMenuProps) => {
   const { activeSection } = useActiveSection();

   return (
      <div
         style={{ boxShadow: "0px 3px 8px rgba(0,0,0,0.5)" }}
         className={classNames(
            "open-menu-animation lg:hidden fixed bottom-0 right-0 left-0 z-[8] h-[50vh] md:h-[38vh] rounded-t-4xl bg-gradient-to-t from-leather to-goldenbeige [box-shadow:0_0_4px_rgba(0,0,0,0.3)_inset]",
            {
               "close-menu-animation": isClosing,
            },
         )}
      >
         <ul className="flex flex-col items-center  min-[310px]:mt-8 min-[400px]:mt-12 min-[310px]:gap-5 min-[400px]:gap-8 md:gap-10">
            {links.map((link, index) => (
               <li key={index}>
                  <p
                     onClick={handleClosing}
                     className={classNames(
                        "relative cursor-pointer text-2xl! md:text-3xl!  font-medium! hover:text-goldenbeige! transition-all! duration-250!",
                        {
                           underline: activeSection === link?.value,
                        },
                     )}
                  >
                     <a href={`#${link?.value}`}>{link?.label}</a>
                  </p>
               </li>
            ))}
         </ul>
         <p className="absolute bottom-2 min-[390px]:bottom-10 md:bottom-6 left-0 right-0 text-softbutter/65! font-light! text-xs! md:text-sm! text-center">
            © 2025 Rainier Reyes. Built with Next.js, React Three Fiber &
            Tailwind.
         </p>
      </div>
   );
};

export default ToggleMenu;
