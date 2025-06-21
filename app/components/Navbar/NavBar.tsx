"use client";
import { links } from "@/app/lib/constants";
import { useActiveSection } from "@/app/lib/contexts/ActiveSectionProvider";
import classNames from "classnames";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface ToggleMenuProps {
   isMenuToggle: boolean;
   handleToggle: () => void;
   handleClosing: () => void;
}
const NavBar = ({
   handleToggle,
   isMenuToggle,
   handleClosing,
}: ToggleMenuProps) => {
   const { activeSection } = useActiveSection();

   return (
      <nav className="sticky top-0 left-0 right-0 flex flex-row justify-between px-4 md:px-12 py-4  md:py-6 items-center">
         <div>
            <Image
               src={"/images/Profile.jpg"}
               alt="Rainier"
               width={60}
               height={60}
               className="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)] rounded-full border-2 border-leather p-1"
            />
         </div>
         <ul className="flex flex-row items-center  lg:w-[80%] xl:w-[50%] justify-around ">
            {links.map((link, index) => (
               <li key={index} className="hidden lg:flex ">
                  <p
                     className={classNames(
                        "relative cursor-pointer  font-medium! hover:text-goldenbeige! transition-all! duration-250!",
                        {
                           "text-goldenbeige!": activeSection === link?.value,
                        },
                     )}
                  >
                     {" "}
                     <a href={`#${link?.value}`}>{link?.label}</a>
                     {activeSection === link?.value && (
                        <span className="hover-animation absolute bottom-[-3px] left-0 right-0 h-[3px] rounded-md bg-gradient-to-t from-leather to-goldenbeige"></span>
                     )}
                  </p>
               </li>
            ))}
            <div className="flex flex-row gap-6">
               <button className="flex  flex-row items-center gap-2 justify-center px-3 md:px-6 text-sm md:text-lg py-0 md:py-[5px] rounded-lg text-softbutter font-medium bg-gradient-to-t from-leather to-goldenbeige [box-shadow:-2px_2px_4px_rgba(0,0,0,0.4)] hover:from-transparent hover:to-transparent hover:border-2 hover:text-goldenbeige hover:border-goldenbeige! transition-all duration-150 cursor-pointer ">
                  <a href="https://github.com/m4cren" target="_blank">
                     Github
                  </a>
                  <Image
                     src={"/icons/github_button.png"}
                     alt="github"
                     width={20}
                     height={20}
                     className="icon-shadow"
                  />
               </button>
               {!isMenuToggle ? (
                  <button
                     onClick={handleToggle}
                     className="lg:hidden text-goldenbeige icon-shadow"
                  >
                     <Menu size={37} />
                  </button>
               ) : (
                  <button
                     onClick={handleClosing}
                     className="lg:hidden text-goldenbeige icon-shadow"
                  >
                     <X size={37} />
                  </button>
               )}
            </div>
         </ul>
      </nav>
   );
};

export default NavBar;
