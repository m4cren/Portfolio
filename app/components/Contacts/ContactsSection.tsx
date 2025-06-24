"use client";

import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import EmailForm from "./EmailForm";

const ContactsSection = () => {
   const [errorMsg, setErrorMsg] = useState<string>("");
   const [isSuccess, setIsSuccess] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(false);

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
         id="contact"
         className="relative h-[100vh] w-full flex items-center justify-center snap-center"
      >
         <div className="grid grid-cols-1 lg:grid-cols-2">
            <div></div>
            <div>
               <div className="flex flex-col gap-4">
                  <div>
                     {isSuccess ? (
                        <h4 className="text-2xl! md:text-3xl! flex flex-row items-center gap-2">
                           Thank you for reaching out.
                           <CheckCircle />
                        </h4>
                     ) : (
                        <h4 className="text-3xl! md:text-4xl!">
                           Send me an email
                        </h4>
                     )}
                     {errorMsg! ? (
                        <p className="text-red-500!">{errorMsg}</p>
                     ) : isSuccess ? (
                        <p>Your message has been successfully delivered.</p>
                     ) : (
                        <p>Need a developer? Let&apos;s talk</p>
                     )}
                  </div>
                  <EmailForm
                     isLoading={isLoading}
                     setErrorMsg={setErrorMsg}
                     setIsLoading={setIsLoading}
                     setIsSuccess={setIsSuccess}
                  />
               </div>
            </div>
         </div>
         <Footer />
      </motion.section>
   );
};

export default ContactsSection;
