"use client";
import { FormTypes } from "@/app/lib/types";
import emailjs from "@emailjs/browser";
import { useInView, motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../Footer/Footer";

const ContactsSection = () => {
   const { register, handleSubmit, reset } = useForm<FormTypes>();

   const [errorMsg, setErrorMsg] = useState<string>("");
   const [isSuccess, setIsSuccess] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const handleSubmitEvent = async (data: FormTypes) => {
      setIsLoading(true);

      try {
         if (!data.from_email || !data.message) {
            setIsSuccess(false);
            setErrorMsg("Please fill out the form");

            return;
         }
         if (data.message.length < 3) {
            setErrorMsg("Message must be meaningful");
            return;
         }

         emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID!,
            process.env.NEXT_PUBLIC_TEMPLATE_ID!,
            data,
            process.env.NEXT_PUBLIC_PUBLIC_KEY!,
         );

         setIsSuccess(true);
         setErrorMsg("");
      } catch (error) {
         setErrorMsg("An unexpected error occured");
      } finally {
         setIsLoading(false);
      }
      reset();
   };
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
                        <p>Need a developer? Let's talk</p>
                     )}
                  </div>
                  <form
                     onSubmit={handleSubmit((data) => handleSubmitEvent(data))}
                     className="w-[90vw] md:w-[80vw] lg:w-[30vw] text-softbutter flex flex-col gap-1 md:gap-2"
                  >
                     <div className="flex flex-col gap-1">
                        <label
                           htmlFor="email"
                           className="text-[0.7rem] md:text-[0.8rem] text-softbutter/60"
                        >
                           Email
                        </label>
                        <input
                           type="email"
                           placeholder="Email"
                           {...register("from_email")}
                           id="email"
                           className="text-sm py-1 md:text-md outline-none border-1 md:border-2 rounded-md [border-color:rgb(246_247_221_/_0.4)] pl-2 md:pl-4 "
                        />
                     </div>
                     <div className="flex flex-col gap-1">
                        <label
                           htmlFor="name"
                           className="text-[0.7rem] md:text-[0.8rem] text-softbutter/60"
                        >
                           Name (optional)
                        </label>
                        <input
                           {...register("from_name")}
                           type="text"
                           id="name"
                           placeholder="Name"
                           className="text-sm py-1 md:text-md outline-none border-1 md:border-2 rounded-md [border-color:rgb(246_247_221_/_0.4)] pl-2 md:pl-4 "
                        />
                     </div>
                     <div className="flex flex-col gap-1">
                        <label
                           htmlFor="content"
                           className="text-[0.7rem] md:text-[0.8rem] text-softbutter/60"
                        >
                           Content
                        </label>
                        <textarea
                           {...register("message")}
                           id="content"
                           placeholder="Write something here..."
                           className="text-sm  md:text-md outline-none border-1 md:border-2 pl-2 md:pl-4 py-1 rounded-md [border-color:rgb(246_247_221_/_0.4)]  resize-none h-[8rem] min-[350px]:h-[10rem] md:h-[15rem]"
                        ></textarea>
                     </div>
                     <button
                        disabled={isLoading}
                        className="[background-image:linear-gradient(to_top,var(--color-leather),var(--color-goldenbeige))] cursor-pointer text-softbutter mt-4 md:mt-8 flex flex-row items-center gap-4 justify-center py-2 md:py-3 bg-gradient-to-t from-leather to-goldenbeige w-[12rem] md:w-[14rem] rounded-md shadow-md"
                     >
                        {isLoading ? (
                           <span className="loading loading-infinity loading-lg"></span>
                        ) : (
                           <>
                              <p>Send Inquiry </p>
                              <Send />
                           </>
                        )}
                     </button>
                  </form>
               </div>
            </div>
         </div>
         <Footer />
      </motion.section>
   );
};

export default ContactsSection;
