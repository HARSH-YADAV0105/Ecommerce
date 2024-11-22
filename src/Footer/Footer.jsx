import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { TextField } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Payment1 from "../Assert/Badge.png";
import Payment2 from "../Assert/Badge (1).png";
import Payment3 from "../Assert/Badge (2).png";
import Payment4 from "../Assert/Badge (3).png";
import Payment5 from "../Assert/Badge (4).png";
import "../App.css";
const Footer = () => {
  return (
    <div className=" relative flex justify-center items-center bg-[#0000001A] pt-[120px] pb-[120px] mt-[120px]">
      <div className="flex justify-center items-center ">
        <div className="flex flex-col gap-16 justify-center items-center">
          <div className=" absolute pt-[20px] pb-[20px] flex-col  lg:flex-row md:flex-row lg:top-[-120px] top-[-150px] flex justify-around items-center text-[white] lg:pt-[38px] sm:pt-[20px] sm:pb-[20px] lg:pb-[38px] lg:pr-[64px] lg:pl-[64px] rounded-[20px]  bg-black">
            <div className="w-[80%] lg:w[38%] md:w-[38%] sm:w-[40%]">
              <h2 className="font-bold lg:text-[40px] sm:text-[32px] text-[32px] text-left leading-[45px]">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h2>
            </div>
            <div className="flex flex-col  gap-2">
              <TextField
                type="email"
                label={<EmailIcon />}
                placeholder=" Enter Your Email Address"
                className=" flex gap-2 p-4 rounded-[20px] bg-white text-[#00000066]"
              >
                {" "}
              </TextField>
              <TextField
                placeholder="Suscribe to NewsLetter"
                type="text"
                className="text-[#00000066] p-4 bg-white rounded-[20px]"
              ></TextField>
            </div>
          </div>
          <div className=" flex justify-center p-[35px]">
            <div className="flex justify-center items-center ">
              <div className=" max-h[180px] flex flex-wrap justify-between items-center max-w-[1440px] w-[100%] gap-16 ">
                <div className="flex flex-col justify-between items-center">
                  <ul className="flex flex-col gap-[28px] w-[285px] items-start">
                    <li>
                      <h3 className="font-bold text-[34px] font-integral leading-[40px] text-black">
                        SHOPE.CO
                      </h3>
                    </li>
                    <li>
                      <p className="font-normal font-sans text-[#00000099] text-left text-[14px] leading-[22px]">
                        We have clothes that suits your style and which you’re
                        proud to wear. From women to men.
                      </p>
                    </li>
                    <li>
                      <ul className="flex justify-center  items-center gap-3">
                        <li className=" list-item rounded-[50%] p-[7px] border-[1px] border-[#00000033] ">
                          <XIcon className="IconsOf-Social" />{" "}
                        </li>
                        <li className="list-item rounded-[50%] p-[7px] border-[1px] border-[#00000033] ">
                          <FacebookIcon className="IconsOf-Social" />
                        </li>
                        <li className="list-item rounded-[50%] p-[7px] border-[1px] border-[#00000033] ">
                          <InstagramIcon className="IconsOf-Social" />
                        </li>
                        <li className="list-item rounded-[50%] p-[7px] border-[1px] border-[#00000033] ">
                          <GitHubIcon className="IconsOf-Social" />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col  gap-8">
                    <li className="text-[20px] tracking-[3px] font-[500] font-sans leading-[18px]">
                      Company
                    </li>
                    <ul className="flex flex-col justify-center items-start gap-4">
                      <li className=" leading-[19px] cursor-pointer font-sans text-[16px] text-[#00000099]">
                        About
                      </li>
                      <li className="leading-[19px] cursor-pointer font-sans text-[16px] text-[#00000099]">
                        Feature
                      </li>
                      <li className="leading-[19px] cursor-pointer font-sans text-[16px] text-[#00000099]">
                        Works
                      </li>
                      <li className="leading-[19px] cursor-pointer font-sans text-[16px] text-[#00000099]">
                        Carrer
                      </li>
                    </ul>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col items-start gap-8">
                    <li className="text-[20px] tracking-[3px] font-[500] font-sans leading-[18px]">
                      Help
                    </li>
                    <ul className="flex flex-col justify-center items-start gap-4">
                      <li className=" leading-[19px] cursor-pointer font-sans text-[16px] text-[#00000099]">
                        Customer support
                      </li>
                      <li className="leading-[19px] cursor-pointer font-sans text-[16px] text-[#00000099]">
                        Delivery Details
                      </li>
                      <li className="leading-[19px] cursor-pointer font-sans text-[16px] text-[#00000099]">
                        Terms and Conditions
                      </li>
                      <li className="leading-[19px] cursor-pointer font-sans text-[16px] text-[#00000099]">
                        Privacy Policy
                      </li>
                    </ul>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col items-start gap-8">
                    <li className="text-[20px] tracking-[3px] font-[500] font-sans leading-[18px]">
                      FAQ
                    </li>
                    <ul className="flex flex-col justify-center items-start gap-4">
                      <li className=" leading-[19px] cursor-pointer font-sans text-[16px] text-[#00000099]">
                        Accounts
                      </li>
                      <li className="leading-[19px] cursor-pointer font-sans text-[16px] text-[#00000099]">
                        Manage Delivers
                      </li>
                      <li className="leading-[19px] cursor-pointer font-sans text-[16px] text-[#00000099]">
                        Orders
                      </li>
                      <li className="leading-[19px] cursor-pointer font-sans text-[16px] text-[#00000099]">
                        Payments
                      </li>
                    </ul>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col items-start gap-8">
                    <li className="text-[20px] tracking-[3px] font-[500] font-sans leading-[18px]">
                      Resources
                    </li>
                    <ul className="flex flex-col justify-center items-start gap-4">
                      <li className=" leading-[19px] cursor-pointer font-sans text-[16px] text-[#00000099]">
                        Free E-books
                      </li>
                      <li className="leading-[19px] cursor-pointer font-sans text-[16px] text-[#00000099]">
                        Development Tutorial
                      </li>
                      <li className="leading-[19px] cursor-pointer font-sans text-[16px] text-[#00000099]">
                        How To Blog
                      </li>
                      <li className="leading-[19px] cursor-pointer font-sans text-[16px] text-[#00000099]">
                        YouTube Playlist
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0000001A] h-[1px] max-w-[1240px] w-full"></div>
          <div className="flex flex-wrap justify-between w-full max-w-[1240px] items-center ">
            <div className="  justify-center flex items-start">
              <span className="text-[#00000099] text-[14px] font-sans font-normal">
                Shop.co © 2000-2023, All Rights Reserved
              </span>
            </div>
            <div className="justify-center flex items-end">
              <ul className=" flex ">
                <li>
                  <img src={Payment1} alt="" />
                </li>
                <li>
                  {" "}
                  <img src={Payment2} alt="" />
                </li>
                <li>
                  {" "}
                  <img src={Payment3} alt="" />
                </li>
                <li>
                  {" "}
                  <img src={Payment4} alt="" />
                </li>
                <li>
                  {" "}
                  <img src={Payment5} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
