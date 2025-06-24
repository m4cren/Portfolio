import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
   src: "../public/fonts/SpaceGrotesk-VariableFont_wght.ttf",
});
export const metadata: Metadata = {
   title: `Rainier's Portfolio`,
   description:
      ': "Explore the portfolio of Rainier Reyes, a passionate web developer specializing in modern, interactive, and responsive websites using React, Next.js, and cutting-edge web technologies.',
   icons: {
      icon: "/favicon.png",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html
         lang="en"
         className="scroll-smooth snap-y snap-mandatory overflow-x-hidden"
      >
         <body className={`${spaceGrotesk.className} antialiased`}>
            {children}
         </body>
      </html>
   );
}
