import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { InputBase, styled } from "@mui/material";
import { Link } from "react-router-dom";
import "./index.css";
import { categories } from "../data";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#F0F0F0",
  borderRadius: "62px",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const index = () => {
  return (
    <div>
      <div className="sign-in relative">
        <div className="text-center flex justify-center items-center bg-black text-white h-10 ">
          <div>
            <h4 className="text-n">
              Sign up and get 20% off to your first order. Sign Up Now
            </h4>
          </div>
          <div className="absolute right-8">
            <CloseIcon
              sx={{ display: { lg: "block", sm: "none", xs: "none" } }}
            />
          </div>
        </div>
      </div>
      <div className="Navbar flex justify-center items-center h-24 ">
        <div className="mr-auto ml-auto  w-full max-w-[1240px] flex justify-around items-center gap-[40px] ">
          <div className="MenuBar flex lg:hidden md:block ">
            <MenuIcon />
          </div>
          <div className="logo ">
            <Link to="/">
              <h3 className="text-center font-serif text-[32px] font-bold leading-[38.4px] ">
                SHOPE.CO
              </h3>
            </Link>
          </div>
          <div className=" h-[22px] hidden sm:hidden md:hidden  lg:!flex   ">
            <ul className="flex gap-2 justify-center relative text-center">
              {/* <li className="category ">
                Shope
                <KeyboardArrowDownIcon />
                <div className="dropDown bg-slate-50 absolute left-[-70px] mt-2">
                  <div className="flex">
                    <ul className=" flex w-full flex-col justify-center items-start  pt-4 pb-4 pr-7 pl-7">
                      <li className="p-2 hover:bg-gray-200 ">Men Top Wear</li>
                      <li className="p-2 hover:bg-gray-200">Men Bottom Wear</li>
                      <li className="p-2 hover:bg-gray-200">Women Etenic </li>
                      <li className="p-2 hover:bg-gray-200">Men FotWear</li>
                      <li className="p-2 hover:bg-gray-200">Women Foootwear</li>
                      <li className="p-2 hover:bg-gray-200">Kids</li>
                      <li className="p-2 hover:bg-gray-200">
                        Watches & Accessories
                      </li>
                    </ul>
                  </div>
                </div>
              </li> */}
              {/* <li className="category relative group">
                Shope
                <KeyboardArrowDownIcon />
                <div className="dropDown hidden group-hover:flex bg-slate-50 absolute left-[-70px] mt-2 shadow-lg">
                  <div className="flex">
                    <ul className="flex w-full flex-col justify-center items-start pt-4 pb-4 pr-7 pl-7">
                      <li className="p-2 hover:bg-gray-200">Men Top Wear</li>
                      <li className="p-2 hover:bg-gray-200">Men Bottom Wear</li>
                      <li className="p-2 hover:bg-gray-200">Women Ethnic</li>
                      <li className="p-2 hover:bg-gray-200">Men Footwear</li>
                      <li className="p-2 hover:bg-gray-200">Women Footwear</li>
                      <li className="p-2 hover:bg-gray-200">Kids</li>
                      <li className="p-2 hover:bg-gray-200">
                        Watches & Accessories
                      </li>
                    </ul>
                  </div>
                </div>
              </li> */}
              <li className="category">
                Shope
                <KeyboardArrowDownIcon />
                {/* <div className="dropDown ">
                  <div className="flex">
                    <ul className="w-full">
                      <Link className="w-full" to="/Categories">
                        <li>
                          Men Top Wear <ChevronRightIcon className="arrow" />{" "}
                        </li>
                      </Link>
                      <li>
                        Men Bottom Wear <ChevronRightIcon />
                      </li>
                      <li>
                        Women Ethnic <ChevronRightIcon />
                      </li>
                      <li>
                        Men Footwear <ChevronRightIcon />
                      </li>
                      <li>
                        Women Footwear <ChevronRightIcon />
                      </li>
                      <li>
                        Kids <ChevronRightIcon />
                      </li>
                      <li>
                        Watches & Accessories <ChevronRightIcon />
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="dropDown">
                  <div className="flex w-full">
                    <ul className="w-full">
                      {categories.map((category, index) => (
                        <li key={index} className="w-full">
                          {category.link ? (
                            <Link
                              className="w-full text-left flex  justify-between"
                              to={category.link}
                            >
                              {category.name}{" "}
                              <ChevronRightIcon className="arrow" />
                            </Link>
                          ) : (
                            <>
                              {category.name}{" "}
                              <ChevronRightIcon className="arrow" />
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li className="">On Sale</li>
              <li className="">New Arival</li>
              <li className="">Brands</li>
            </ul>
          </div>
          <div className="w-[444px] p-[12px] px-[16px] gap-[12px] rounded-[62px_0_0_0] ">
            <Search
              sx={{
                display: { md: "block", sm: "none", xs: "none", lg: "block" },
              }}
            >
              <SearchIconWrapper sx={{ display: "" }}>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for Products"
                inputProps={{ "aria-label": "search" }}
                style={{
                  width: "100%",
                  "&::placeholder": {
                    fontSize: "1.25rem",
                    color: "rgba(0, 0, 0, 0.5)",
                    letterSpacing: "0.1rem",
                    width: "20ch",
                  },
                }}
              />
            </Search>
          </div>
          <div className="flex justify-between  gap-3">
            <SearchIcon
              sx={{
                display: { lg: "none", md: "none", sm: "block", xs: "block" },
              }}
            />
            <Link to="/Cart">
              {" "}
              <ShoppingCartIcon />
            </Link>
            <AccountCircleOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
