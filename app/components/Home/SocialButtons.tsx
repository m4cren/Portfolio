import React from "react";
import { IconType } from "react-icons";
import { FaFacebook, FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";

const iconMap: { [key: string]: IconType } = {
   facebook: FaFacebook,
   instagram: FaInstagram,
   tiktok: FaTiktok,
   linkedin: FaLinkedin,
};

const socialButtons: { link: string; value: string }[] = [
   {
      link: "https://www.facebook.com/diakosi.renren/",
      value: "facebook",
   },
   {
      link: "https://www.instagram.com/_m4cren/",
      value: "instagram",
   },
   {
      link: "https://www.tiktok.com/@notmacrenn",
      value: "tiktok",
   },
   {
      link: "https://www.linkedin.com/in/rainier-reyes-a71867336/",
      value: "linkedin",
   },
];
const SocialButtons = () => {
   return (
      <>
         {socialButtons.map(({ link, value }, index) => {
            const IconComponent = iconMap[value];

            return (
               <button
                  key={index}
                  className="text-softbutter scale-150 md:scale-175 icon-shadow hover:text-goldenbeige transition-all duration-200"
               >
                  <a href={link} target="_blank">
                     <IconComponent />
                  </a>
               </button>
            );
         })}
      </>
   );
};

export default SocialButtons;
