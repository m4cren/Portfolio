import React from "react";
import { FaFacebook, FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";
const SocialButtons = () => {
   return (
      <>
         <button className="text-softbutter scale-150 md:scale-175 icon-shadow">
            <a href="https://www.facebook.com/diakosi.renren/" target="_blank">
               <FaFacebook />
            </a>
         </button>
         <button className="text-softbutter scale-150 md:scale-175 icon-shadow">
            <a href="https://www.instagram.com/_m4cren/" target="_blank">
               {" "}
               <FaInstagram />
            </a>
         </button>
         <button className="text-softbutter scale-150 md:scale-175 icon-shadow">
            <a href="https://www.tiktok.com/@notmacrenn" target="_blank">
               {" "}
               <FaTiktok />
            </a>
         </button>
         <button className="text-softbutter scale-150 md:scale-175 icon-shadow">
            <a
               href="https://www.linkedin.com/in/rainier-reyes-a71867336/"
               target="_blank"
            >
               {" "}
               <FaLinkedin />
            </a>
         </button>
      </>
   );
};

export default SocialButtons;
