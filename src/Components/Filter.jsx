import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Slider } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { colors, sizes, marks } from "../data";
function valuetext(value) {
  return `${value}°C`;
}
const Filter = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState("Medium");

  return (
    <div className="OuterMostFilter hidden sm:hidden md:hidden  lg:!flex h-[100%] flex-col gap-10 w-[295px] justify-center items-center pt-5 pb-5 pr-6 pl-6 rounded-3xl border">
      <div className=" heding max-w-[247px] w-full flex justify-between items-center">
        <div>
          <span className="text-[20px] font-bold ">Filters</span>
        </div>
        <TuneIcon className=" cursor-pointer" />
      </div>
      <div className="flex justify-center items-center w-[247px] pt-1">
        <div className="bg-[#0000001A] h-[1px] max-w-[1240px] w-full"></div>
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
            <div className="text-[#00000099] text-[16px] font-sans">Shirts</div>
            <ChevronRightIcon />
          </li>{" "}
          <li className="w-full flex justify-between items-center">
            <div className="text-[#00000099] text-[16px] font-sans">Jeans</div>
            <ChevronRightIcon />
          </li>{" "}
          <li className="w-full flex justify-between items-center">
            <div className="text-[#00000099] text-[16px] font-sans">Hoodie</div>
            <ChevronRightIcon />
          </li>{" "}
        </ul>
      </div>
      <div className="flex justify-center items-center w-[247px] pt-1">
        <div className="bg-[#0000001A] h-[1px] max-w-[240px] w-full"></div>
      </div>
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
      <div className="flex justify-center items-center w-[247px] pt-1">
        <div className="bg-[#0000001A] h-[1px] max-w-[240px] w-full"></div>
      </div>
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
      <div className="flex justify-center items-center w-[247px] pt-1">
        <div className="bg-[#0000001A] h-[1px] max-w-[240px] w-full"></div>
      </div>
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
      <div className="flex justify-center items-center w-[247px] pt-1">
        <div className="bg-[#0000001A] h-[1px] max-w-[240px] w-full"></div>
      </div>
      <div className="CategoriesPallete gap-4 flex w-[100%] justify-between items-center flex-col">
        <div className="flex  justify-between items-center w-[100%]">
          <div>
            <span className="text-[20px] font-bold ">Dress Style</span>
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
              <div className="text-[#00000099] text-[16px] font-sans">Gym</div>
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
  );
};

export default Filter;
