"use client";
import { useInView, motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import { useRef } from "react";

const Footer = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, {
      once: false,
      margin: "-100px",
   });
   return (
      <motion.footer
         ref={ref}
         initial={{ opacity: 0, y: "-15vh" }}
         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
         transition={{ duration: 0.9, ease: "easeOut" }}
         className="fixed pointer-events-none opacity-60! bottom-0 left-0 right-0 h-[7rem] md:h-[9rem] flex flex-col md:flex-row justify-end md:justify-between px-2 md:px-12 items-center md:items-end p-2 md:pb-4 "
      >
         <div className="hidden lg:block ">
            <p className="text-sm!">
               Marc Rainier S. Reyes | Website Developer
            </p>
            <p className="text-sm!">
               Bringing ideas to life with modern web tech
            </p>
         </div>
         <ul className="flex flex-row items-end justify-between w-full pb-3 px-1 min-[350px]:px-9 md:hidden">
            <div className="flex flex-col gap-1">
               <li className=" text-softbutter flex flex-row gap-1  items-center">
                  <Phone size={12} />{" "}
                  <p className="text-[0.65rem]! md:text-sm! lg:text-md!">
                     +639618137972
                  </p>
               </li>
               <li className=" text-softbutter flex flex-row gap-1  items-center">
                  <Mail size={12} />{" "}
                  <p className="text-[0.65rem]! md:text-sm! lg:text-md!">
                     renrenofficial@gmail.com
                  </p>
               </li>
            </div>
            <div>
               {" "}
               <li className=" text-softbutter flex flex-row  gap-1 items-center">
                  <Linkedin size={15} />{" "}
                  <p className="text-[0.65rem]! md:text-sm! lg:text-md!">
                     <a href="https://www.linkedin.com/in/rainier-reyes-a71867336/">
                        in/rainier-reyes-a71867336
                     </a>
                  </p>
               </li>
            </div>
         </ul>
         <div>
            <p className="text-[0.65rem]! md:text-sm! lg:text-md!">
               © 2025 Rainier Reyes. Built with Next.js, React Three Fiber &
               Tailwind.
            </p>
         </div>
         <ul className="hidden md:flex flex-col gap-2">
            <li className=" text-softbutter flex flex-row gap-2 items-center">
               <Phone /> <p className="text-sm! lg:text-md!">+639618137972</p>
            </li>
            <li className=" text-softbutter flex flex-row gap-2 items-center">
               <Mail />{" "}
               <p className="text-sm! lg:text-md!">renrenofficial@gmail.com</p>
            </li>
            <li className=" text-softbutter flex flex-row gap-2 items-center">
               <Linkedin />{" "}
               <p className="text-sm! lg:text-md!">
                  in/rainier-reyes-a71867336
               </p>
            </li>
         </ul>
      </motion.footer>
   );
};

export default Footer;
