import React from "react";
import DividerLine from "../Components/DividerLine";
import Filter from "../Components/Filter";
import ItemGrid from "../Components/ItemGrid";
const CategoriesPags = () => {
  return (
    <div>
      <DividerLine />
      <div className="flex justify-center items-center w-full pt-20 pb-20 pr-12 pl-12">
        <div className="flex justify-center items-center ">
          <div className=" flex justify-center  gap-4 w-[100%]  items-baseline  max-w-[1440px]">
            <Filter />
            <ItemGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPags;
