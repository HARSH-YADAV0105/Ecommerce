import React from "react";
import Headers from "../Header/index";
import PagePath from "../Components/PagePath";
import Footer from "../Footer/Footer";
import CartStucture from "./CartStucture";
const Cart = () => {
  return (
    <>
      <div className=" flex justify-center items-center pt-1">
        <div className="bg-[#0000001A] h-[1px] max-w-[1240px] w-full"></div>
      </div>
      <PagePath pathLast={"Cart"} />
      <CartStucture />
    </>
  );
};

export default Cart;
