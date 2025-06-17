import Image from "next/image";
import { Menu } from "lucide-react";

const NavBar = () => {
   const links = [
      { label: "Home", value: "home" },
      { label: "Service", value: "service" },
      { label: "Skills", value: "skills" },
      { label: "Projects", value: "projects" },
      ,
   ];
   return (
      <nav className="fixed top-0 z-1 w-full flex flex-row justify-between px-12 py-6 items-center">
         <div>
            <Image
               src={"/images/Profile.jpg"}
               alt="Rainier"
               width={50}
               height={50}
               className="rounded-full"
            />
         </div>
         <ul className="hidden md:flex flex-row items-center md:w-[70%] xl:w-[40%] justify-around">
            {links.map((link, index) => (
               <li key={index} className="text-white cursor-pointer">
                  {link?.label}
               </li>
            ))}
            <button className="px-4 py-2 rounded-md text-[#2c2c2c] font-bold bg-white">
               Github
            </button>
         </ul>
         <button className="md:hidden text-white">
            <Menu />
         </button>
      </nav>
   );
};

export default NavBar;
