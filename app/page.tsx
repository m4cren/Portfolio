import { Metadata } from "next";

import Main from "./Main";

export default function Home() {
   return (
      <div>
         <Main />
      </div>
   );
}

export const metadata: Metadata = {
   title: "Rainier Reyes Portfolio",
   description: "This is my personal portfolio",
};
