// import React from "react";
// import ProductDesc from "./ProductDesc";
// import PagePath from "../Components/PagePath";
// import MoreAboutProduct from "../MoreAboutProduct/MoreAboutProduct";
// import MoreSuggestion from "../Components/MoreSuggestion";
// import { useParams } from "react-router-dom";
// const Product = () => {
//   // const { slug } = useParams();
//   return (
//     <>
//       <div className=" flex justify-center items-center pt-1">
//         <div className="bg-[#0000001A] h-[1px] max-w-[1240px] w-full"></div>
//       </div>
//       <PagePath path={"T-Shirts"} />
//       <ProductDesc />
//       <MoreAboutProduct />
//       <MoreSuggestion />
//     </>
//   );
// };

// export default Product;
// import React from "react";
// import { useLocation } from "react-router-dom";
// import ProductDesc from "./ProductDesc";
// import PagePath from "../Components/PagePath";
// import MoreAboutProduct from "../MoreAboutProduct/MoreAboutProduct";
// import MoreSuggestion from "../Components/MoreSuggestion";

// const Product = () => {
//   const location = useLocation();
//   const { image, name ,rating,offer,price} = location.state || {}; // Fallback if state is undefined

//   return (
//     <>
//       <div className="flex justify-center items-center pt-1">
//         <div className="bg-[#0000001A] h-[1px] max-w-[1240px] w-full"></div>
//       </div>
//       {/* <PagePath path={name || "Product"} /> */}
//       <ProductDesc image={image} name={name}  rating={rating} price={price} offer={offer} />
//       <MoreAboutProduct />
//       <MoreSuggestion />
//     </>
//   );
// };

// export default Product;
import React from "react";
import { useLocation } from "react-router-dom";
import ProductDesc from "./ProductDesc";
import PagePath from "../Components/PagePath";
import MoreAboutProduct from "../MoreAboutProduct/MoreAboutProduct";
import MoreSuggestion from "../Components/MoreSuggestion";

const Product = () => {
  const { state } = useLocation();

  return (
    <>
      <div className="flex justify-center items-center pt-1">
        <div className="bg-[#0000001A] h-[1px] max-w-[1240px] w-full"></div>
      </div>
      <PagePath path={state?.name || "Product"} />
      <ProductDesc
        name={state?.name}
        rating={state?.rating}
        price={state?.price}
        offer={state?.offer}
        image={state?.image}
        id={state?.id}
      />
      <MoreAboutProduct />
      <MoreSuggestion />
    </>
  );
};

export default Product;
