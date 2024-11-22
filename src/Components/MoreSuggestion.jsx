import React from "react";
import { productData1 } from "../data";
import ClothesGrid from "./ClothesGrid";
const MoreSuggestion = () => {
  return (
    <div>
      <ClothesGrid heading={"YOU MIGHT ALSO LIKE"} products={productData1} />
    </div>
  );
};

export default MoreSuggestion;
