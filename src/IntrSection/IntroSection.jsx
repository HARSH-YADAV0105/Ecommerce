import React from "react";
import Img1 from "../Assert/Vector.png";

const IntroSection = () => {
  return (
    <div className="outerMost-section w-full">
      <div className="flex justify-center items-center bg-[#F2F0F1] h-fit">
        <div className="outer flex flex-col lg:flex-row justify-between items-center w-full lg:w-[1440px] p-4 lg:p-0">
          <div className="textBox flex-shrink-0 flex-grow-0 basis-full lg:basis-1/2 p-4 lg:pr-[50px] lg:pl-[50px] lg:p-[50px]">
            <div className="innerTextBox grid items-start gap-12">
              <div className="FirstTextOuter flex gap-[32px] flex-col">
                <div>
                  <h3 className="introHeading text-[32px] lg:text-[64px] font-bold leading-[1.2] text-left">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                  </h3>
                </div>
                <div className="text-left">
                  <p
                    style={{ color: "" }}
                    className="text-left text-sm lg:text-base text-[16px] text-[#00000099]"
                  >
                    Browse through our diverse range of meticulously crafted
                    garments, designed to bring out your individuality and cater
                    to your sense of style.
                  </p>
                </div>
                <div className="text-left">
                  <button className="bg-black text-white pr-[32px] lg:pr-[54px] pl-[32px] lg:pl-[54px] pt-[12px] lg:pt-[16px] pb-[12px] lg:pb-[16px] border-[1px solid] rounded-[62px]">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="SecondTextOuter flex flex-wrap justify-between items-center">
                {" "}
                <div className="Fisrt-txt text-center">
                  <div>
                    <p className="font-bold text-[40px] leading-[54px]">200+</p>
                    <p className="text-[16px] leading-[22px] font-normal text-[#00000099]">
                      International Brands
                    </p>
                  </div>
                </div>
                <div className="lineBox h-[74px] border-[1px] bg-[#0000001A] "></div>
                <div>
                  <div>
                    <p className="font-bold text-[40px] leading-[54px]">
                      2,000+
                    </p>
                    <p className="text-[16px] leading-[22px] font-normal text-[#00000099]">
                      High-Quality Products
                    </p>
                  </div>
                </div>
                <div className="lineBox h-[74px] border-[1px] bg-[#0000001A] "></div>
                <div>
                  <div>
                    <p className="font-bold text-[40px] leading-[54px]">
                      30,000+
                    </p>
                    <p className="text-[16px] leading-[22px] font-normal text-[#00000099]">
                      Happy Customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ImgBox flex-shrink-0 flex-grow-0 basis-full lg:basis-1/2 w-full max-h-[636px] relative mt-6 lg:mt-0">
            <div className="flex justify-center items-center relative">
              <div className="FirstStar absolute top-[80px] lg:top-[220px] z-10 left-20 lg:left-40">
                <img style={{ width: "40px", lg: "56px" }} src={Img1} alt="" />
              </div>
              <div className="relative">
                <img
                  style={{ height: "636px", lg: "636px" }}
                  src="https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghb55SPX~JMZtP0p-GS15WealkBomjEmIGqHVzWcPQW29qM-wthUcyB8Bs9~RhX-WLBqTMj530kkugSoiH-h51Dqn5ezbiFSQzpHXEDERyvJG2vpxFlklO6ccqE3la4BOpy3m3679BQGUzmEPrP~Ca3r-DRSXlPFsXlKTqnAJ~JVpYm6XahyUE9WGL4wHStiBAV8MV1w7CXmkD29wH3OLZUngDaqqE3Feh-Itls9H~xkRYss65itIATa~DnBacfj2S7JAtR770efDj5HLtNlYWRXXe2e14Dtyb2hLv9Z7Bbq1bzeYCJ3A6TxfPON5tJcZolyJlKrayqbjMz1eoR~SQ__"
                  alt=""
                />
              </div>
              <div className="LastStar absolute z-10 right-10 lg:right-28 top-5 lg:top-14">
                <img style={{ width: "60px", lg: "104px" }} src={Img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
