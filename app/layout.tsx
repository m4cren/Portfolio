import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
   src: "../public/fonts/SpaceGrotesk-VariableFont_wght.ttf",
});
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
