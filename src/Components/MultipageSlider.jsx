import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const MultipageSlider = () => {
  return (
    <div className="flex justify-between items-center pt-[20px] w-[100%]">
      <div className="PreviousButton  ">
        <button className="flex max-w-[100%] hover:bg-white rounded-[8px] bg-slate-50 border-[#0000001A] border-[1px]  gap-2 pr-6  pl-6 pt-4 pb-4 justify-center items-center">
          <ArrowBackIcon />
          Previous
        </button>
      </div>
      <div className="pageslide max-w-[292px] w-[100%] ">
        <ul className="flex items-center justify-center gap-[2px]">
          <li className="w-[40px] h-[40px] rounded-[8px] flex items-center  justify-center bg-[#0000000F] hover:bg-white">
            1
          </li>
          <li className="w-[40px] h-[40px] rounded-[8px] flex items-center  justify-center bg-[#0000000F] hover:bg-white">
            2
          </li>
          <li className="w-[40px] h-[40px] rounded-[8px] flex items-center  justify-center bg-[#0000000F] hover:bg-white">
            3
          </li>
          <li className="w-[40px] h-[40px] rounded-[8px] flex items-center  justify-center bg-[#0000000F] hover:bg-white">
            4
          </li>
          <li className="w-[40px] h-[40px] rounded-[8px] flex items-center  justify-center bg-[#0000000F] hover:bg-white">
            5
          </li>
          <li className="w-[40px] h-[40px] rounded-[8px] flex items-center  justify-center bg-[#0000000F] hover:bg-white">
            6
          </li>
          <li className="w-[40px] h-[40px] rounded-[8px] flex items-center  justify-center bg-[#0000000F] hover:bg-white">
            7
          </li>
          <li className="w-[40px] h-[40px] rounded-[8px] flex items-center  justify-center bg-[#0000000F] hover:bg-white">
            8
          </li>
          <li className="w-[40px] h-[40px] rounded-[8px] flex items-center  justify-center bg-[#0000000F] hover:bg-white">
            9
          </li>
          <li className="w-[40px] h-[40px] rounded-[8px] flex items-center  justify-center bg-[#0000000F] hover:bg-white">
            10
          </li>
        </ul>
      </div>
      <div className="NextButton">
        <button className="flex max-w-[100%] hover:bg-white rounded-[8px] bg-slate-50 border-[#0000001A] border-[1px]  gap-2 pr-6  pl-6 pt-4 pb-4 justify-center items-center">
          Next
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default MultipageSlider;
