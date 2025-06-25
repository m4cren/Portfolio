"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Greet = () => {
   const ref = useRef<HTMLHeadingElement | null>(null);

   useEffect(() => {
      const typed = new Typed(ref.current, {
         strings: [
            "I'm a <strong>Frontend Developer</strong>",
            "An Aspiring <strong >Software Engineer</strong>",
            "Building with <strong>Next.js, Tailwind & TypeScript</strong>",
            "Focused on <strong>Frontend Excellence</strong>",
         ],
         typeSpeed: 100,
         backSpeed: 100,
         loop: true,
      });

      return () => {
         typed.destroy();
      };
   }, []);
   return (
      <h4 className="text-[1.2rem]! min-[350px]:text-lg! md:text-3xl! text-goldenbeige leading-tight">
         <span ref={ref} className="inline-block align-middle" />
      </h4>
   );
};

export default Greet;
