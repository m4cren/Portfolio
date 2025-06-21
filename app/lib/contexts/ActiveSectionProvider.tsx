"use client";
import {
   createContext,
   ReactNode,
   useContext,
   useEffect,
   useState,
} from "react";

interface ActiveSectionProps {
   activeSection: string;
   screenWidth: number;
}

const ActiveSectionContexts = createContext<ActiveSectionProps | null>(null);

const ActiveSectionContextProvider = ({
   children,
}: {
   children: ReactNode;
}) => {
   const [activeSection, setActiveSection] = useState<string>("");
   const [screenWidth, setScreenWidth] = useState<number>(0);
   useEffect(() => {
      const handleResize = () => {
         setScreenWidth(window.innerWidth);
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   useEffect(() => {
      const sections = document.querySelectorAll("main section");

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  const id = entry.target.id;
                  setActiveSection(id);
                  history.replaceState(null, "", `#${id}`);
               }
            });
         },
         {
            root: null,
            threshold: 0.1, // smaller threshold for tall sections
            rootMargin: "0px 0px -20% 0px", // triggers earlier
         },
      );

      sections.forEach((section) => observer.observe(section));

      return () => {
         sections.forEach((section) => observer.unobserve(section));
      };
   }, []);

   return (
      <ActiveSectionContexts.Provider value={{ activeSection, screenWidth }}>
         {children}
      </ActiveSectionContexts.Provider>
   );
};

export default ActiveSectionContextProvider;
export const useActiveSection = () => {
   const ctx = useContext(ActiveSectionContexts);
   if (!ctx) {
      throw new Error("error hehe");
   }
   return ctx;
};
