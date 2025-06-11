import { Metadata } from "next";
import CanvaParent from "./3d_components/CanvaParent";

export default function Home() {
   return (
      <div className="w-full h-screen">
         <h1>Marc Rainier</h1>
         <CanvaParent />
      </div>
   );
}

export const metadata: Metadata = {
   title: "Rainier Reyes Portfolio",
   description: "This is my personal portfolio",
};
