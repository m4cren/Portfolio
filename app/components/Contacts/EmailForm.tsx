"use client";
import { FormTypes } from "@/app/lib/types";
import React from "react";
import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

interface EmailFormProps {
   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
   setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
   setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
   isLoading: boolean;
}

const EmailForm = ({
   isLoading,
   setErrorMsg,
   setIsLoading,
   setIsSuccess,
}: EmailFormProps) => {
   const { register, handleSubmit, reset } = useForm<FormTypes>();
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
   return (
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
   );
};

export default EmailForm;
