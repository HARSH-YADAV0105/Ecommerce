import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/index";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="">
      <main className="w-[100%]   ">
        <Header />
        <Outlet />
      </main>{" "}
      <Footer/>
    </div>
  );
};

export default Layout;
