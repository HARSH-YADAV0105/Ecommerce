import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ClothGridCatelog = ({ heading, products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="OuterMost flex justify-center items-center px-4 h-[100%]">
      <div className="OuterOne flex justify-center items-center w-full max-w-[1440px]">
        <div className="ContentBox grid justify-center items-center gap-14 w-full">
          <div className="HeadingBox text-center">
            <h2 className="HeadText font-integral text-[32px] md:text-[48px] font-bold leading-[1.2]">
              {heading}
            </h2>
          </div>
          <div className="Product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-8 items-center">
            {currentProducts.map((product) => (
              <div key={product.id} className="ProductItem justify-center flex">
                <Link
                  to="/Product"
                  state={{
                    image: product.image,
                    name: product.name,
                    rating: product.rating,
                    price: product.price,
                    offer: product.offer,
                  }}
                  className="flex flex-col gap-5"
                >
                  <div className="ImgBox w-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-full text-left grid gap-2">
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
          <div className="flex justify-between items-center pt-[20px] w-[100%]">
            <div className="PreviousButton">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="flex max-w-[100%] hover:bg-white rounded-[8px] bg-slate-50 border-[#0000001A] border-[1px] gap-2 pr-6 pl-6 pt-4 pb-4 justify-center items-center"
              >
                <ArrowBackIcon />
                Previous
              </button>
            </div>
            <div className="pageslide max-w-[292px] w-[100%]">
              <ul className="flex items-center justify-center gap-[2px]">
                {[...Array(totalPages)].map((_, index) => (
                  <li
                    key={index}
                    onClick={() => handlePageClick(index + 1)}
                    className={`w-[40px] h-[40px] rounded-[8px] flex items-center justify-center cursor-pointer ${
                      currentPage === index + 1 ? "bg-[#0000000F]" : ""
                    } hover:bg-white`}
                  >
                    {index + 1}
                  </li>
                ))}
              </ul>
            </div>
            <div className="NextButton">
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="flex max-w-[100%] hover:bg-white rounded-[8px] bg-slate-50 border-[#0000001A] border-[1px] gap-2 pr-6 pl-6 pt-4 pb-4 justify-center items-center"
              >
                Next
                <ArrowForwardIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothGridCatelog;
