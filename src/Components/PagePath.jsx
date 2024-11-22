import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const PagePath = ({ pathLast }) => {
  return (
    <div className=" flex  w-full justify-center items-center pt-5 ">
      <div className="flex justify-between items-center w-full max-w-[1240px]">
        <ul className="flex justify-between w-full max-w-[260px] items-center">
          <Link to="/">
            <li className="text-[#00000099] text-[16px] font-sans">Home</li>
          </Link>
          <KeyboardArrowRightIcon sx={{ color: "#00000099" }} />
          <li className="text-[#00000099] text-[16px] font-sans">Shop</li>
          <KeyboardArrowRightIcon sx={{ color: "#00000099" }} />
          <li className="text-[#00000099] text-[16px] font-sans">Men</li>
          <KeyboardArrowRightIcon sx={{ color: "#00000099" }} />
          <li>{pathLast}</li>
        </ul>
      </div>
    </div>
  );
};

export default PagePath;
