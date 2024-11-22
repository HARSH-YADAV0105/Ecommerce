import React, { useState } from "react";
import { Slider } from "@mui/material";
import "../App.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClothGridCatelog from "../Test/test";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { colors, sizes, marks, productData } from "../data";
function valuetext(value) {
  return `${value}°C`;
}

const ItemGrid = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState("Medium");

  return (
    <div className="flex justify-center  items-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className=" relative flex justify-between w-[100%] items-center ">
          <div>
            {" "}
            <span className="text-[32px] text-black font-bold ">Casual</span>
          </div>
          <div className=" relative flex justify-center items-center gap-3">
            <div className="">
              <span className="tex-[16px] font-normal text-[#00000099]">
                Showing 1-10 of 100 Products
              </span>
            </div>
            <div className="lg:flex md:hidden sm:hidden justify-between items-center">
              <div>
                <span className="text-[16px] font-[500] text-[]">Sort by:</span>
              </div>
              <div className="">
                <span>Most Popular</span>
                <KeyboardArrowDownIcon />
              </div>
            </div>
            {/* <div className="lg:hidden">
              <TuneIcon />
              <div className=" SmallerFilter w-[390px] pt-5 pb-5 pr-6 pl-6  rounded-b-xl rounded-t-xl z-10   top-0 sm:left-[-270px] !left-[-270px] h-[1240px] bg-slate-200 absolute">
                <div className="w-[100%] gap-5 flex flex-col justify-center items-center">
                  <div className="heading  flex justify-between items-center  w-[100%]">
                    <span className="text-[20px] font-bold font-sans text-black">
                      Filters
                    </span>
                    <CloseIcon sx={{ color: "#00000066" }} />
                  </div>
                  <div className=" producttype w-[100%] flex gap-5 flex-col justify-center  items-center">
                    <ul className="flex flex-col gap-5 w-[100%]">
                      <li className="w-full flex justify-between items-center">
                        <div className="text-[#00000099] text-[16px] font-sans">
                          T-Shirts
                        </div>
                        <ChevronRightIcon />
                      </li>
                      <li className="w-full flex justify-between  items-center">
                        <div className="text-[#00000099]  text-[16px] font-sans">
                          Shorts
                        </div>
                        <ChevronRightIcon />
                      </li>{" "}
                      <li className="w-full flex justify-between items-center">
                        <div className="text-[#00000099] text-[16px] font-sans">
                          Shirts
                        </div>
                        <ChevronRightIcon />
                      </li>{" "}
                      <li className="w-full flex justify-between items-center">
                        <div className="text-[#00000099] text-[16px] font-sans">
                          Jeans
                        </div>
                        <ChevronRightIcon />
                      </li>{" "}
                      <li className="w-full flex justify-between items-center">
                        <div className="text-[#00000099] text-[16px] font-sans">
                          Hoodie
                        </div>
                        <ChevronRightIcon />
                      </li>{" "}
                    </ul>
                  </div>
                  <DividerLine />
                  <div className="PriceRange w-[100%] flex flex-col justify-between items-center">
                    <div className="flex justify-between items-center w-[100%]">
                      <div>
                        <span className="text-[20px] font-bold">Price</span>
                      </div>
                      <KeyboardArrowDownIcon />
                    </div>
                    <div className="MainSlider w-[100%] ">
                      <Slider
                        getAriaLabel={() => "Temperature"}
                        getAriaValueText={valuetext}
                        defaultValue={[400, 1500]}
                        valueLabelDisplay="auto"
                        marks={marks}
                        step={10}
                        min={10}
                        max={2000}
                      />
                    </div>
                  </div>
                  <DividerLine />
                  <div className="ColurPallet gap-4 flex w-[100%] justify-between flex-col items-center">
                    <div className="flex justify-between items-center w-[100%]">
                      <div>
                        <span className="text-[20px] font-bold">Colour</span>
                      </div>
                      <KeyboardArrowDownIcon />
                    </div>
                    <div>
                      <ul className="flex gap-4 flex-wrap">
                        {colors.map((color, index) => (
                          <li
                            key={index}
                            className={`w-9 h-9 border border-black  bordee-[0.5px] cursor-pointer rounded-3xl flex justify-center items-center ${color}`}
                            onClick={() => setSelectedColor(index)}
                          >
                            {selectedColor === index && (
                              <DoneIcon style={{ color: "white" }} />
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <DividerLine />
                  <div className="SizzePallete gap-4 flex w-[100%] justify-between items-center flex-col">
                    <div className="flex justify-between items-center w-[100%]">
                      <div>
                        <span className="text-[20px] font-bold">Size</span>
                      </div>
                      <KeyboardArrowDownIcon />
                    </div>
                    <div className="SizeSection">
                      <ul className="flex flex-wrap gap-4">
                        {sizes.map((size) => (
                          <li
                            key={size}
                            className={`pt-3 pb-3 pr-5 pl-5 rounded-[62px] text-[14px] cursor-pointer ${
                              selectedSize === size
                                ? "bg-black text-white"
                                : "bg-[#F0F0F0] text-[#00000099]"
                            }`}
                            onClick={() => setSelectedSize(size)}
                          >
                            {size}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <DividerLine />
                  <div className="CategoriesPallete gap-4 flex w-[100%] justify-between items-center flex-col">
                    <div className="flex  justify-between items-center w-[100%]">
                      <div>
                        <span className="text-[20px] font-bold ">
                          Dress Style
                        </span>
                      </div>
                      <KeyboardArrowDownIcon />
                    </div>
                    <div className=" Categoriestype w-[100%] flex gap-5 flex-col justify-center  items-center">
                      <ul className="flex flex-col gap-5 w-[100%]">
                        <li className="w-full flex justify-between items-center">
                          <div className="text-[#00000099] text-[16px] font-sans">
                            T-Shirts
                          </div>
                          <ChevronRightIcon />
                        </li>
                        <li className="w-full flex justify-between items-center">
                          <div className="text-[#00000099] text-[16px] font-sans">
                            Casual
                          </div>
                          <ChevronRightIcon />
                        </li>{" "}
                        <li className="w-full flex justify-between items-center">
                          <div className="text-[#00000099] text-[16px] font-sans">
                            Party
                          </div>
                          <ChevronRightIcon />
                        </li>{" "}
                        <li className="w-full flex justify-between items-center">
                          <div className="text-[#00000099] text-[16px] font-sans">
                            Formal
                          </div>
                          <ChevronRightIcon />
                        </li>{" "}
                        <li className="w-full flex justify-between items-center">
                          <div className="text-[#00000099] text-[16px] font-sans">
                            Gym
                          </div>
                          <ChevronRightIcon />
                        </li>{" "}
                      </ul>
                    </div>
                  </div>
                  <div className="AppiedButton w-[100%]">
                    <button className=" w-[100%] pt-4 pb-4 pr-14 pl-14 rounded-[62px] bg-black text-white text-[14px] font-[500]">
                      Apply Filter
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="lg:hidden">
              <div onClick={() => setIsFilterOpen(true)}>
                <TuneIcon />
              </div>

              <div
                className={`SmallerFilter w-[390px] pt-5 pb-5 pr-6 pl-6 rounded-b-xl rounded-t-xl z-10 bg-slate-200 absolute top-0 h-[1240px] transform transition-transform duration-300 ${
                  isFilterOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="w-[100%] gap-5 flex flex-col justify-center items-center">
                  <div className="heading flex justify-between items-center w-[100%]">
                    <span className="text-[20px] font-bold font-sans text-black">
                      Filters
                    </span>
                    <CloseIcon
                      sx={{ color: "#00000066" }}
                      onClick={() => setIsFilterOpen(false)}
                    />
                  </div>

                  <div className="producttype w-[100%] flex gap-5 flex-col justify-center items-center">
                    <ul className="flex flex-col gap-5 w-[100%]">
                      {["T-Shirts", "Shorts", "Shirts", "Jeans", "Hoodie"].map(
                        (item) => (
                          <li
                            key={item}
                            className="w-full flex justify-between items-center"
                          >
                            <div className="text-[#00000099] text-[16px] font-sans">
                              {item}
                            </div>
                            <ChevronRightIcon />
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <hr className="w-full border-gray-300" />

                  <div className="PriceRange w-[100%] flex flex-col justify-between items-center">
                    <div className="flex justify-between items-center w-[100%]">
                      <div>
                        <span className="text-[20px] font-bold">Price</span>
                      </div>
                      <KeyboardArrowDownIcon />
                    </div>
                    <div className="MainSlider w-[100%]">
                      <Slider
                        getAriaLabel={() => "Price Range"}
                        getAriaValueText={valuetext}
                        defaultValue={[400, 1500]}
                        valueLabelDisplay="auto"
                        marks={marks}
                        step={10}
                        min={10}
                        max={2000}
                      />
                    </div>
                  </div>

                  <hr className="w-full border-gray-300" />

                  <div className="ColourPallet gap-4 flex w-[100%] flex-col items-center">
                    <div className="flex justify-between items-center w-[100%]">
                      <div>
                        <span className="text-[20px] font-bold">Colour</span>
                      </div>
                      <KeyboardArrowDownIcon />
                    </div>
                    <ul className="flex gap-4 flex-wrap">
                      {colors.map((color, index) => (
                        <li
                          key={index}
                          className={`w-9 h-9 border border-black cursor-pointer rounded-3xl flex justify-center items-center ${color.colorCode}`}
                          onClick={() => setSelectedColor(index)}
                        >
                          {selectedColor === index && (
                            <DoneIcon style={{ color: "white" }} />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <hr className="w-full border-gray-300" />

                  <div className="SizePalette gap-4 flex w-[100%] flex-col items-center">
                    <div className="flex justify-between items-center w-[100%]">
                      <div>
                        <span className="text-[20px] font-bold">Size</span>
                      </div>
                      <KeyboardArrowDownIcon />
                    </div>
                    <ul className="flex flex-wrap gap-4">
                      {sizes.map((size) => (
                        <li
                          key={size}
                          className={`pt-3 pb-3 pr-5 pl-5 rounded-[62px] text-[14px] cursor-pointer ${
                            selectedSize === size
                              ? "bg-black text-white"
                              : "bg-[#F0F0F0] text-[#00000099]"
                          }`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="AppliedButton w-[100%]">
                    <button className="w-[100%] pt-4 pb-4 pr-14 pl-14 rounded-[62px] bg-black text-white text-[14px] font-[500]">
                      Apply Filter
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="lg:hidden">
              <div onClick={() => setIsFilterOpen(true)}>
                <TuneIcon />
              </div>

              {isFilterOpen && (
                <div
                  className={`SmallerFilter w-[390px] pt-5 pb-5 pr-6 pl-6 rounded-b-xl rounded-t-xl z-10 bg-slate-200 absolute top-0 h-[1240px] transform transition-transform duration-300 ${
                    isFilterOpen ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <div className="w-[100%] gap-5 flex flex-col justify-center items-center">
                    <div className="heading flex justify-between items-center w-[100%]">
                      <span className="text-[20px] font-bold font-sans text-black">
                        Filters
                      </span>
                      <CloseIcon
                        sx={{ color: "#00000066" }}
                        onClick={() => setIsFilterOpen(false)}
                      />
                    </div>

                    <div className="producttype w-[100%] flex gap-5 flex-col justify-center items-center">
                      <ul className="flex flex-col gap-5 w-[100%]">
                        {[
                          "T-Shirts",
                          "Shorts",
                          "Shirts",
                          "Jeans",
                          "Hoodie",
                        ].map((item) => (
                          <li
                            key={item}
                            className="w-full flex justify-between items-center"
                          >
                            <div className="text-[#00000099] text-[16px] font-sans">
                              {item}
                            </div>
                            <ChevronRightIcon />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <hr className="w-full border-gray-300" />

                    <div className="PriceRange w-[100%] flex flex-col justify-between items-center">
                      <div className="flex justify-between items-center w-[100%]">
                        <div>
                          <span className="text-[20px] font-bold">Price</span>
                        </div>
                        <KeyboardArrowDownIcon />
                      </div>
                      <div className="MainSlider w-[100%]">
                        <Slider
                          getAriaLabel={() => "Price Range"}
                          getAriaValueText={valuetext}
                          defaultValue={[400, 1500]}
                          valueLabelDisplay="auto"
                          marks={marks}
                          step={10}
                          min={10}
                          max={2000}
                        />
                      </div>
                    </div>

                    <hr className="w-full border-gray-300" />

                    <div className="ColourPallet gap-4 flex w-[100%] flex-col items-center">
                      <div className="flex justify-between items-center w-[100%]">
                        <div>
                          <span className="text-[20px] font-bold">Colour</span>
                        </div>
                        <KeyboardArrowDownIcon />
                      </div>
                      <ul className="flex gap-4 flex-wrap">
                        {colors.map((color, index) => (
                          <li
                            key={index}
                            className={`w-9 h-9 border border-black cursor-pointer rounded-3xl flex justify-center items-center ${color.colorCode}`}
                            onClick={() => setSelectedColor(index)}
                          >
                            {selectedColor === index && (
                              <DoneIcon style={{ color: "white" }} />
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <hr className="w-full border-gray-300" />

                    <div className="SizePalette gap-4 flex w-[100%] flex-col items-center">
                      <div className="flex justify-between items-center w-[100%]">
                        <div>
                          <span className="text-[20px] font-bold">Size</span>
                        </div>
                        <KeyboardArrowDownIcon />
                      </div>
                      <ul className="flex flex-wrap gap-4">
                        {sizes.map((size) => (
                          <li
                            key={size}
                            className={`pt-3 pb-3 pr-5 pl-5 rounded-[62px] text-[14px] cursor-pointer ${
                              selectedSize === size
                                ? "bg-black text-white"
                                : "bg-[#F0F0F0] text-[#00000099]"
                            }`}
                            onClick={() => setSelectedSize(size)}
                          >
                            {size}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="CategoriesPallete gap-4 flex w-[100%] justify-between items-center flex-col">
                      <div className="flex  justify-between items-center w-[100%]">
                        <div>
                          <span className="text-[20px] font-bold ">
                            Dress Style
                          </span>
                        </div>
                        <KeyboardArrowDownIcon />
                      </div>
                      <div className=" Categoriestype w-[100%] flex gap-5 flex-col justify-center  items-center">
                        <ul className="flex flex-col gap-5 w-[100%]">
                          <li className="w-full flex justify-between items-center">
                            <div className="text-[#00000099] text-[16px] font-sans">
                              T-Shirts
                            </div>
                            <ChevronRightIcon />
                          </li>
                          <li className="w-full flex justify-between items-center">
                            <div className="text-[#00000099] text-[16px] font-sans">
                              Casual
                            </div>
                            <ChevronRightIcon />
                          </li>{" "}
                          <li className="w-full flex justify-between items-center">
                            <div className="text-[#00000099] text-[16px] font-sans">
                              Party
                            </div>
                            <ChevronRightIcon />
                          </li>{" "}
                          <li className="w-full flex justify-between items-center">
                            <div className="text-[#00000099] text-[16px] font-sans">
                              Formal
                            </div>
                            <ChevronRightIcon />
                          </li>{" "}
                          <li className="w-full flex justify-between items-center">
                            <div className="text-[#00000099] text-[16px] font-sans">
                              Gym
                            </div>
                            <ChevronRightIcon />
                          </li>{" "}
                        </ul>
                      </div>
                    </div>

                    <div className="AppliedButton w-[100%]">
                      <button className="w-[100%] pt-4 pb-4 pr-14 pl-14 rounded-[62px] bg-black text-white text-[14px] font-[500]">
                        Apply Filter
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* <div className="lg:hidden">
              <div onClick={() => setIsFilterOpen(true)}>
                <TuneIcon />
              </div>

              <div
                className={`SmallerFilter w-[390px] pt-5 pb-5 pr-6 pl-6 rounded-b-xl rounded-t-xl z-10 bg-slate-200 fixed top-0 h-[1240px] right-0 transform transition-transform duration-300 ease-in-out ${
                  isFilterOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="w-[100%] gap-5 flex flex-col justify-center items-center">
                  <div className="heading flex justify-between items-center w-[100%]">
                    <span className="text-[20px] font-bold font-sans text-black">
                      Filters
                    </span>
                    <CloseIcon
                      sx={{ color: "#00000066" }}
                      onClick={() => setIsFilterOpen(false)}
                    />
                  </div>

                  <div className="producttype w-[100%] flex gap-5 flex-col justify-center items-center">
                    <ul className="flex flex-col gap-5 w-[100%]">
                      {["T-Shirts", "Shorts", "Shirts", "Jeans", "Hoodie"].map(
                        (item) => (
                          <li
                            key={item}
                            className="w-full flex justify-between items-center"
                          >
                            <div className="text-[#00000099] text-[16px] font-sans">
                              {item}
                            </div>
                            <ChevronRightIcon />
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <hr className="w-full border-gray-300" />

\                  <div className="PriceRange w-[100%] flex flex-col justify-between items-center">
                    <div className="flex justify-between items-center w-[100%]">
                      <div>
                        <span className="text-[20px] font-bold">Price</span>
                      </div>
                      <KeyboardArrowDownIcon />
                    </div>
                    <div className="MainSlider w-[100%]">
                      <Slider
                        getAriaLabel={() => "Price Range"}
                        getAriaValueText={valuetext}
                        defaultValue={[400, 1500]}
                        valueLabelDisplay="auto"
                        marks={marks}
                        step={10}
                        min={10}
                        max={2000}
                      />
                    </div>
                  </div>

                  <hr className="w-full border-gray-300" />

                  <div className="ColourPallet gap-4 flex w-[100%] flex-col items-center">
                    <div className="flex justify-between items-center w-[100%]">
                      <div>
                        <span className="text-[20px] font-bold">Colour</span>
                      </div>
                      <KeyboardArrowDownIcon />
                    </div>
                    <ul className="flex gap-4 flex-wrap">
                      {colors.map((color, index) => (
                        <li
                          key={index}
                          className={`w-9 h-9 border border-black cursor-pointer rounded-3xl flex justify-center items-center ${color.colorCode}`}
                          onClick={() => setSelectedColor(index)}
                        >
                          {selectedColor === index && (
                            <DoneIcon style={{ color: "white" }} />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <hr className="w-full border-gray-300" />

\                  <div className="SizePalette gap-4 flex w-[100%] flex-col items-center">
                    <div className="flex justify-between items-center w-[100%]">
                      <div>
                        <span className="text-[20px] font-bold">Size</span>
                      </div>
                      <KeyboardArrowDownIcon />
                    </div>
                    <ul className="flex flex-wrap gap-4">
                      {sizes.map((size) => (
                        <li
                          key={size}
                          className={`pt-3 pb-3 pr-5 pl-5 rounded-[62px] text-[14px] cursor-pointer ${
                            selectedSize === size
                              ? "bg-black text-white"
                              : "bg-[#F0F0F0] text-[#00000099]"
                          }`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </li>
                      ))}
                    </ul>
                  </div>

\                  <div className="AppliedButton w-[100%]">
                    <button className="w-[100%] pt-4 pb-4 pr-14 pl-14 rounded-[62px] bg-black text-white text-[14px] font-[500]">
                      Apply Filter
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <ClothGridCatelog products={productData} />
      </div>
    </div>
  );
};

export default ItemGrid;
