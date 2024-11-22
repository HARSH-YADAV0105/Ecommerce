import React from "react";
import Slider from "react-slick";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Rating } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "../data";

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center pt-[60px] sm:pt-[80px] md:pt-[120px] pb-[60px] sm:pb-[80px] md:pb-[120px]">
      <div className="flex justify-center items-center">
        <div className="justify-center  flex flex-col gap-8 sm:gap-10 md:gap-16 items-center w-full px-4 sm:px-8 ">
          <div className=" justify-center md:justify-start text-left md:text-left w-full items-center">
            <h2 className="font-bold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-left leading-tight md:leading-[1.2]">
              OUR HAPPY CUSTOMERS
            </h2>
          </div>
          <div className="w-full">
            <Slider
              {...settings}
              className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px]"
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="w-full  p-4 sm:p-6 md:p-8 rounded-[22px] bg-white shadow-lg "
                >
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 justify-between">
                    <Rating name="read-only" value={review.rating} readOnly />
                    <div className="grid gap-2 sm:gap-3">
                      <p className="flex gap-2 text-[18px] sm:text-[20px] md:text-[22px] font-bold leading-tight items-center">
                        {review.name}
                        {review.verified && (
                          <VerifiedIcon sx={{ color: "#80bd69" }} />
                        )}
                      </p>
                      <p className="text-[14px] sm:text-[16px] font-normal text-[#00000099] leading-snug text-left">
                        "{review.reviewText}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
