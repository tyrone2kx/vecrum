import React, { useState } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import Spacer from "../Spacer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuBody from "./components/MenuBody";
import News from "./components/News";
import SearchBar from "./components/SearchBar";

interface IProps {
  toggleMenu: () => void;
  isOpen?: boolean;
}

const Sidemenu = ({ toggleMenu, isOpen }: IProps) => {
  const height = isOpen ? "h-screen " : "h-0";
  const isMobile = useIsMobile();

  return (
    <>
      <div
        style={{ transition: "0.5s" }}
        className={`${height} scrollbar-hide md:h-full overflow-y-auto  w-full  md:w-1/4 lg:w-1/5 xl:w-1/4 bg-white`}
      >
        <div
          id="menu-container"
          className={`mt-8 md:mt-0 w-full scrollbar-hide overflow-y-auto p-3 px-2`}
        >
          {!isMobile && <Header toggleMenu={toggleMenu} />}
          <SearchBar />
          <MenuBody />
          <News />
        </div>
        <div
          id="menu-container"
          className={` w-full  px-2 pb-3`}
        >
        <Spacer className="my-6" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Sidemenu;
