import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
const ClothGridCateg = ({ heading, products }) => {
  return (
    <div className="OuterMost flex justify-center items-center px-4">
      <div className="OuterOne flex justify-center items-center w-full max-w-[1440px] ">
        <div className="ContentBox grid justify-center items-center gap-14 w-full">
          <div className="HeadingBox text-center">
            <h2 className="HeadText font-integral text-[32px] md:text-[48px] font-bold leading-[1.2]">
              {heading}
            </h2>
          </div>
          <div className="Product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-8 items-center">
            {products.map((product) => (
              <div key={product.id} className="ProductItem flex">
                <Link
                  to={`/product/${product.slug}`}
                  className="flex flex-col gap-5"
                >
                  <div className="ImgBox w-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full  h-auto"
                    />
                  </div>
                  <div className="w-full text-left  grid gap-2">
                    <h4 className="ItemName text-left text-[18px] sm:text-[20px] leading-[27px] font-bold">
                      {product.name}
                    </h4>
                    <div className="flex gap-3 items-center w-[150px]">
                      <Rating
                        name="size-medium"
                        defaultValue={product.rating}
                        readOnly
                      />
                      <span className="RattingDesc text-[14px] sm:text-[16px] font-normal">
                        {product.rating}/5
                      </span>
                    </div>
                    <div className="PriceGrid flex justify-start items-center gap-4">
                      <p className="Amount text-[20px] sm:text-[24px] font-bold leading-[32.4px]">
                        {product.offer}
                      </p>
                      {product.price && (
                        <>
                          <p className="Amount text-[20px] sm:text-[24px] line-through text-gray-400 font-bold leading-[32.4px]">
                            {product.price}
                          </p>
                          <div className="discount-badge pt-[6px] pb-[6px] px-[14px] rounded-[62px] bg-[#FF33331A] text-[#FF3333] text-[14px]">
                            -20%
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothGridCateg;
