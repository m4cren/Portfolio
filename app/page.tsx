"use client";

import { useState } from "react";
import Main from "./Main";
import ContactsSection from "./components/Contacts/ContactsSection";
import HomeSection from "./components/Home/HomeSection";
import NavBar from "./components/Navbar/NavBar";
import ToggleMenu from "./components/Navbar/ToggleMenu";
import ProjectsSection from "./components/Projects/ProjectsSection";
import ServicesSection from "./components/Services/ServicesSection";
import SkillsSection from "./components/Skills/SkillsSection";
import useToggleMenu from "./lib/hooks/useToggleMenu";
import Footer from "./components/Footer/Footer";
import ActiveSectionContextProvider from "./lib/contexts/ActiveSectionProvider";

export default function Home() {
   const { handleClosing, handleToggle, isClosing, isToggleMenu } =
      useToggleMenu();

   const [isLoading, setIsLoading] = useState<boolean>(true);

   return (
      <ActiveSectionContextProvider isLoading={isLoading}>
         <div className="relative ">
            <Main setIsLoading={setIsLoading} />
            {isLoading ? (
               <div className="[background-image:linear-gradient(to_top,var(--color-leather),var(--color-goldenbeige))] fixed z-20 top-0 left-0 right-0 flex items-center justify-center bottom-0 bg-gradient-to-t from-leather to-goldenbeige">
                  <span className="loading loading-infinity loading-3xl scale-400 text-softbutter"></span>
               </div>
            ) : (
               <main className="bg-[#00000060] backdrop-blur-[6px] [-webkit-backdrop-filter:blur(6px)] ">
                  <NavBar
                     handleToggle={handleToggle}
                     isMenuToggle={isToggleMenu}
                     handleClosing={handleClosing}
                  />

                  <HomeSection />
                  <ServicesSection />
                  <SkillsSection />
                  <ProjectsSection />
                  <ContactsSection />
               </main>
            )}

            {isToggleMenu && (
               <ToggleMenu
                  handleToggle={handleToggle}
                  handleClosing={handleClosing}
                  isClosing={isClosing}
               />
            )}
         </div>
      </ActiveSectionContextProvider>
   );
}
