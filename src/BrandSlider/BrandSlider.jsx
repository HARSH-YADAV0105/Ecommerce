import React from "react";
import Brand1 from "../Assert/Calvin.png";
import Brand2 from "../Assert/Prada.png";
import Brand3 from "../Assert/Versace.png";
import Brand4 from "../Assert/Zara.png";
import Brand5 from "../Assert/gucci-logo-1 1.png";

const BrandSlider = () => {
  return (
    <div className="BrandOuter flex justify-center bg-black">
      <div className="BrandInnner w-[1440px] h-[146px]  flex justify-center">
        <div className="BrandLine flex justify-center items-center w-full flex-wrap pt-[30px] pb-[30px]">
          <ul className="Line flex justify-around w-full flex-wrap ">
            <li className="ImgBox">
              <img src={Brand1} alt="" />
            </li>
            <li className="ImgBox">
              <img src={Brand2} alt="" />
            </li>
            <li className="ImgBox">
              <img src={Brand3} alt="" />
            </li>
            <li className="ImgBox">
              <img src={Brand4} alt="" />
            </li>
            <li className="ImgBox">
              <img src={Brand5} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
