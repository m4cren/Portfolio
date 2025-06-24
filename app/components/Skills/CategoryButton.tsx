import classNames from "classnames";
import React from "react";
import SelectedItemLine from "../SelectedItemLine";
import { SkillCategoryTypes } from "@/app/lib/types";

interface CategoryButtonProps {
   handleChangeCategory: (item: string, cat: "upper" | "lower") => void;
   selectedCategory: SkillCategoryTypes;
   item: string;
   choose: "upper" | "lower";
}

const CategoryButton = ({
   handleChangeCategory,
   item,
   selectedCategory,
   choose,
}: CategoryButtonProps) => {
   return (
      <button
         onClick={() => {
            handleChangeCategory(item, choose);
         }}
         className={classNames(
            "relative text-md md:text-2xl text-softbutter font-medium hover:text-goldenbeige transition-all duration-150 cursor-pointer",
            {
               "text-goldenbeige!": selectedCategory[choose] === item,
            },
         )}
      >
         {item}
         {selectedCategory[choose] === item && <SelectedItemLine />}
      </button>
   );
};

export default CategoryButton;
