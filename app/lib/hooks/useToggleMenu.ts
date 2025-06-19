import { useState } from "react";

const useToggleMenu = () => {
   const [isToggleMenu, setIsToggleMenu] = useState<boolean>(false);
   const handleToggle = () => {
      setIsToggleMenu(!isToggleMenu);
   };
   const [isClosing, setIsClosing] = useState<boolean>(false);
   const handleClosing = () => {
      setIsClosing(true);
      setTimeout(() => {
         setIsClosing(false);
         handleToggle();
      }, 340);
   };
   return { isToggleMenu, isClosing, handleClosing, handleToggle };
};

export default useToggleMenu;
