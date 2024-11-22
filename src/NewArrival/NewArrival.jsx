import React from "react";
import ClothesGrid from "../Components/ClothesGrid";
import DressStyle from "../ClothCatlog/DressStyle";
import { productData2, productData3 } from "../data";

const NewArrival = () => {
  return (
    <>
      <ClothesGrid heading="NEW ARRIVALS" products={productData2} />
      <div className="OuterMost flex justify-center items-center">
        <div className="OuterOne flex justify-center items-center w-[1331px] h-[1px] bg-[#0000001A] "></div>
      </div>
      <ClothesGrid heading="TOP SELLING" products={productData3} />
      <DressStyle />
    </>
  );
};

export default NewArrival;
