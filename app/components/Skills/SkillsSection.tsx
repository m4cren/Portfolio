"use client";
import AnimatedSphere from "@/app/3d_components/Sphere";
import { techStack } from "@/app/lib/constants";
import { useActiveSection } from "@/app/lib/contexts/ActiveSectionProvider";
import { SkillCategoryTypes, TechStackTypes } from "@/app/lib/types";
import { motion, useInView } from "framer-motion";
import { Clock, Presentation } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import CategoryButton from "./CategoryButton";
import SkillList from "./SkillList";
const buttons = {
   upper: ["Languages", "Libraries", "Frameworks"],
   lower: ["Databases", "Tools"],
};

const SkillsSection = () => {
   const { screenWidth } = useActiveSection();
   const [selectedCategory, setSelectedCategory] = useState<SkillCategoryTypes>(
      {
         upper: "Languages",
         lower: "Databases",
      },
   );

   const handleChangeCategory = (
      category: string,
      section: "upper" | "lower",
   ) => {
      if (section === "upper") {
         setSelectedCategory({ ...selectedCategory, upper: category });
      } else {
         setSelectedCategory({ ...selectedCategory, lower: category });
      }
   };

   const filteredUpper = techStack.filter(
      ({ category }) => category === selectedCategory.upper,
   );
   const filteredLower = techStack.filter(
      ({ category }) => category === selectedCategory.lower,
   );

   const [selectedTech, setSelectedTech] = useState<TechStackTypes | null>(
      null,
   );
   const ref = useRef(null);
   const isInView = useInView(ref, {
      once: false,
      margin: "-100px",
   });

   return (
      <motion.section
         ref={ref}
         initial={{ opacity: 0, y: "-15vh" }}
         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
         transition={{ duration: 0.9, ease: "easeOut" }}
         id="skills"
         className="h-[100vh] w-full flex pt-30 min-[390px]:pt-0 items-center justify-center snap-center"
      >
         <div className="flex flex-col-reverse gap-8 min-[350px]:gap-14 md:gap-24 lg:grid lg:grid-cols-2 w-[90vw]">
            {selectedTech ? (
               <div className="flex flex-col gap-4 md:gap-8  items-center lg:items-start">
                  <div className="flex flex-col gap-2">
                     <div className="flex flex-row items-center justify-center  lg:justify-start gap-2">
                        <Image
                           src={`/icons/${selectedTech.icon}.png`}
                           alt={selectedTech.icon}
                           width={40}
                           height={40}
                           className="drop-shadow-md w-9 h-9 md:w-12 md:h-12 object-contain"
                        />
                        <h4 className="text-md! md:text-3xl!">
                           {selectedTech.label}
                        </h4>
                     </div>
                     <p className="w-[80vw] md:w-[65vw] lg:w-[25rem] text-xs! md:text-[1rem]! text-center lg:text-start">
                        {selectedTech.description}
                     </p>
                  </div>
                  <div className="flex flex-col gap-2">
                     <span className="text-softbutter  flex flex-row items-center gap-2 ">
                        <Clock size={20} />{" "}
                        <p className="font-light! text-xs! lg:text-[1rem]!">
                           {selectedTech.experience}
                        </p>
                     </span>
                     <span className="text-softbutter  flex flex-row items-center gap-2 ">
                        <Presentation size={20} />{" "}
                        <p className="font-light! text-xs! lg:text-[1rem]!">
                           {" "}
                           {selectedTech.use}
                        </p>
                     </span>
                  </div>
               </div>
            ) : (
               <AnimatedSphere />
            )}

            <div className="flex flex-col gap-4 min-[350px]:gap-10 md:gap-12">
               <div className="flex flex-col gap-1 min-[350px]:gap-2">
                  <h1 className="text-3xl! min-[350px]:text-4xl! md:text-5xl!">
                     Technology Stack
                  </h1>
                  <p className="text-xs! min-[350px]:text-[1rem]!">
                     Designing interactive, user-first experiences for the
                     moderen web.
                  </p>
               </div>
               <div className="flex flex-col gap-4 min-[350px]:gap-6 md:gap-12">
                  <div className="flex flex-col gap-4 md:gap-6">
                     <div className="flex flex-row items-center gap-8 justify-center md:justify-start  md:gap-22">
                        {buttons.upper.map((item, index) => (
                           <CategoryButton
                              choose="upper"
                              handleChangeCategory={handleChangeCategory}
                              item={item}
                              selectedCategory={selectedCategory}
                              key={index}
                           />
                        ))}
                     </div>
                     <ul className="flex flex-row items-center gap-6 min-[350px]:gap-8 justify-center md:justify-start md:gap-14">
                        {filteredUpper.map((item, index) => (
                           <SkillList
                              key={index}
                              item={item}
                              screenWidth={screenWidth}
                              setSelectedTech={setSelectedTech}
                           />
                        ))}
                     </ul>
                  </div>
                  <div className="flex flex-col  gap-4 md:gap-6">
                     <div className="flex flex-row items-center gap-8 justify-center md:justify-start md:gap-22">
                        {buttons.lower.map((item, index) => (
                           <CategoryButton
                              choose="lower"
                              handleChangeCategory={handleChangeCategory}
                              item={item}
                              selectedCategory={selectedCategory}
                              key={index}
                           />
                        ))}
                     </div>
                     <ul className="flex flex-row items-center gap-6 min-[350px]:gap-8 justify-center md:justify-start md:gap-14">
                        {filteredLower.map((item, index) => (
                           <SkillList
                              key={index}
                              item={item}
                              screenWidth={screenWidth}
                              setSelectedTech={setSelectedTech}
                           />
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </motion.section>
   );
};

export default SkillsSection;
