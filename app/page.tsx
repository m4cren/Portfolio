"use client";

import Main from "./Main";
import ContactsSection from "./components/Contacts/ContactsSection";
import HomeSection from "./components/Home/HomeSection";
import NavBar from "./components/Navbar/NavBar";
import ToggleMenu from "./components/Navbar/ToggleMenu";
import ProjectsSection from "./components/Projects/ProjectsSection";
import ServicesSection from "./components/Services/ServicesSection";
import SkillsSection from "./components/Skills/SkillsSection";
import useToggleMenu from "./lib/hooks/useToggleMenu";

export default function Home() {
   const { handleClosing, handleToggle, isClosing, isToggleMenu } =
      useToggleMenu();
   return (
      <div className="relative ">
         <Main />

         <main className="bg-[#00000070] backdrop-blur-[6px] ">
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
         {isToggleMenu && (
            <ToggleMenu
               handleToggle={handleToggle}
               handleClosing={handleClosing}
               isClosing={isClosing}
            />
         )}
      </div>
   );
}
