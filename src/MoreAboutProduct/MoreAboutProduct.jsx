import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Rating } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { reviewe1, faqData, tabs } from "../data";
import AddIcon from "@mui/icons-material/Add";
const MoreAboutProduct = () => {
  const [selectedTab, setSelectedTab] = useState("Rating and Reviews");
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [visibleReviews, setVisibleReviews] = useState(6);
  const loadMoreReviews = () => {
    setVisibleReviews((prevCount) => prevCount + 6);
  };
  return (
    <>
      <div className="flex justify-center items-center pt-[60px] pb-[60px] w-full">
        <div className=" flex justify-center items-center w-full">
          <div className="flex gap-10 flex-col justify-center items-center max-w-[1440px] w-full">
            <div className="ThreeSectionsOfProduct w-full flex flex-col gap-1 max-w-[1240px]">
              <ul className="flex justify-around items-center w-full">
                {tabs.map((tab) => (
                  <li
                    key={tab.name}
                    onClick={() => setSelectedTab(tab.name)}
                    className={`text-[20px] font-sans font-[400] cursor-pointer ${
                      selectedTab === tab.name
                        ? "text-[#000000] font-[500]"
                        : "text-[#00000099]"
                    }`}
                  >
                    {tab.name}
                  </li>
                ))}
              </ul>
              <div className="SeprateLine flex justify-center w-[100%] items-center pt-1">
                <div className="relative bg-[#0000001A] h-[1px] max-w-[1240px] w-full">
                  <div
                    className="absolute  h-full bg-black transition-all duration-300"
                    style={{
                      width: "33.33%",
                      left: `${
                        tabs.findIndex((tab) => tab.name === selectedTab) *
                        35.33
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>
            {/* Product Details Tab */}
            {selectedTab === "Product Details" && (
              <div className="ProductDetails max-w-[1240px] w-full pr-[40px] pl-[40px] ">
                <div className="flex flex-col gap-2 pb-[30px]">
                  <h2 className="text-2xl font-bold">Product Details</h2>
                  <h3>Detailed information about the product...</h3>
                </div>
                <div className="ProductDescription gap-4 flex flex-col justify-center items-start">
                  <p>
                    <span className="font-bold text-[16px]">
                      Product Dimensions
                    </span>{" "}
                    : 30 x 25 x 3 cm; 250 g
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold text-[16px]">
                      Date First Available
                    </span>{" "}
                    : 15 December 2020
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold text-[16px]">
                      Manufacturer
                    </span>{" "}
                    : Bewakoof Brands
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold text-[16px]">
                      Item model number
                    </span>{" "}
                    : 272010
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold text-[16px]">
                      Country of Origin
                    </span>{" "}
                    : India
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold text-[16px]">Department</span> :
                    Men
                  </p>
                  <p>
                    <span className="font-bold text-[16px]">Packer</span> :
                    Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc
                    Pipeline Road, Opposite All Saints High School, Amane,
                    Bhiwandi, Thane, Maharashtra - 421302
                  </p>
                  <p className="text-left">
                    <span className="font-bold text-[16px]">Manufacturer</span>:
                    Bewakoof Brands, Bewakoof Brands Pvt Ltd, Sairaj Logistic
                    Hub #A5, Bmc Pipeline Road, Opposite All Saints High School,
                    Amane, Bhiwandi, Thane, Maharashtra - 421302
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold text-[16px]">
                      Generic Name
                    </span>{" "}
                    : T-Shirt
                  </p>
                </div>
              </div>
            )}
            {/* Rating And Review  */}
            {selectedTab === "Rating and Reviews" && (
              // <div className="Review&Rating w-full max-w-[1240px] flex flex-col gap-5">
              //   <div className="ReviewFilters w-full flex justify-center items-center pb-[40px]">
              //     <div className="max-w-[50%] w-full">
              //       <div className="flex justify-start items-baseline gap-2">
              //         <span className="text-[24px] text-[#000000] font-bold">
              //           All Reviews
              //         </span>
              //         <span className="text-[#00000099] text-[16px] font-normal">
              //           (451)
              //         </span>
              //       </div>
              //     </div>
              //     <div className="max-w-[50%] w-full flex justify-end items-center gap-3">
              //       <div className="rounded-[62px] p-4 bg-[#F0F0F0] flex justify-center items-center">
              //         <TuneIcon />
              //       </div>
              //       <div className="rounded-[62px] p-4 bg-[#F0F0F0] flex justify-between items-center">
              //         <span>Latest</span>
              //         <KeyboardArrowDownIcon />
              //       </div>
              //       <div className="text-white rounded-[62px] p-4 bg-black w-full max-w-[166px]">
              //         Write A Review
              //       </div>
              //     </div>
              //   </div>
              //   <div className="ReviewOuter justify-center w-full flex flex-wrap gap-5 max-w-[1240px] mx-auto">
              //     {reviews.map((review, index) => (
              //       <div
              //         key={index}
              //         className="flex flex-col gap-4 max-w-[610px] w-full rounded-[20px] p-7 border border-[#0000001A]"
              //       >
              //         <div className="max-w-[546px] flex gap-4 w-full h-full">
              //           <div className="max-w-[522px] max-h-[241px] flex justify-start text-left flex-col gap-3 w-full h-full">
              //             <div className="w-full text-left">
              //               <Rating
              //                 value={review.rating}
              //                 precision={0.5}
              //                 readOnly
              //               />
              //             </div>
              //             <div className="w-full flex justify-start gap-2 flex-col items-center ">
              //               <div className="flex gap-2 justify-start items-center w-full">
              //                 <span className="text-[20px] font-bold text-black">
              //                   {review.name}
              //                 </span>
              //                 <VerifiedIcon sx={{ color: "green" }} />
              //               </div>
              //               <p className="font-normal text-[16px] text-[#00000099] text-justify">
              //                 "{review.content}"
              //               </p>
              //             </div>
              //           </div>
              //           <div>
              //             <MoreHorizIcon />
              //           </div>
              //         </div>
              //         <div className="w-full flex items-start">
              //           <span className="text-[16px] font-normal font-sans text-[#00000099]">
              //             Posted on {review.date}
              //           </span>
              //         </div>
              //       </div>
              //     ))}
              //   </div>
              //   <MoreButton content={"Load More Reivews"} />
              // </div>
              <div className="Review&Rating w-full max-w-[1240px] flex flex-col gap-5">
                <div className="ReviewFilters w-full flex justify-center items-center pb-[40px]">
                  <div className="max-w-[50%] w-full">
                    <div className="flex justify-start items-baseline gap-2">
                      <span className="text-[24px] text-[#000000] font-bold">
                        All Reviews
                      </span>
                      <span className="text-[#00000099] text-[16px] font-normal">
                        (451)
                      </span>
                    </div>
                  </div>
                  <div className="max-w-[50%] w-full flex justify-end items-center gap-3">
                    <div className="rounded-[62px] p-4 bg-[#F0F0F0] flex justify-center items-center">
                      <TuneIcon />
                    </div>
                    <div className="rounded-[62px] p-4 bg-[#F0F0F0] flex justify-between items-center">
                      <span>Latest</span>
                      <KeyboardArrowDownIcon />
                    </div>
                    <div className="text-white rounded-[62px] p-4 bg-black w-full max-w-[166px]">
                      Write A Review
                    </div>
                  </div>
                </div>

                {/* Reviews Section */}
                <div className="ReviewOuter justify-center w-full flex flex-wrap gap-5 max-w-[1240px] mx-auto">
                  {reviewe1.slice(0, visibleReviews).map((review, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-4 max-w-[610px] w-full rounded-[20px] p-7 border border-[#0000001A]"
                    >
                      <div className="max-w-[546px] flex gap-4 w-full h-full">
                        <div className="max-w-[522px] max-h-[241px] flex justify-start text-left flex-col gap-3 w-full h-full">
                          <div className="w-full text-left">
                            <Rating
                              value={review.rating}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                          <div className="w-full flex justify-start gap-2 flex-col items-center ">
                            <div className="flex gap-2 justify-start items-center w-full">
                              <span className="text-[20px] font-bold text-black">
                                {review.name}
                              </span>
                              <VerifiedIcon sx={{ color: "green" }} />
                            </div>
                            <p className="font-normal text-[16px] text-[#00000099] text-justify">
                              "{review.content}"
                            </p>
                          </div>
                        </div>
                        <div>
                          <MoreHorizIcon />
                        </div>
                      </div>
                      <div className="w-full flex items-start">
                        <span className="text-[16px] font-normal font-sans text-[#00000099]">
                          Posted on {review.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More Button */}
                {/* {visibleReviews < reviews.length && ( */}
                <button
                  onClick={loadMoreReviews}
                  className="text-center w-full max-w-[200px] mx-auto mt-4 py-2 bg-black text-white rounded-lg"
                >
                  Load More Reviews
                </button>
                {/* )} */}
              </div>
            )}
            {/* FAQ */}
            {selectedTab === "FAQ" && (
              <div className="flex justify-center  mb-32 mt-10 w-[100%]">
                <div className="flex flex-col items-center w-11/12 md:w-10/12 lg:w-8/12">
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: "center",
                      color: "rgb(31 41 55 )",
                      mb: 5,
                      fontWeight: 600,
                    }}
                  >
                    Frequently Asked Questions
                  </Typography>

                  {/* Using map to iterate through faqData */}
                  {faqData.map((faq, index) => (
                    <Accordion
                      key={index}
                      expanded={expanded === `panel${index}`}
                      onChange={handleChange(`panel${index}`)}
                      // className="mb-4 border-0 shadow-none w-full"
                      sx={{ mb: 4, width: "100%", border: "0px" }}
                    >
                      <AccordionSummary
                        expandIcon={<AddIcon />}
                        sx={{ padding: "6px" }}
                      >
                        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{ padding: 4, backgroundColor: "whitesmoke" }}
                      >
                        <Typography
                          sx={{ color: "rgb(55 65 81)", fontSize: "18px" }}
                        >
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreAboutProduct;
