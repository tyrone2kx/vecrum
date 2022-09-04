import React from "react";
import { Logo, MenuIcon } from "../../../assets/icons/icons";

interface IProps {
  toggleMenu: () => void;
  pad?: boolean;
  isFixed?: boolean;
  bottomBorder?: boolean;
}

const Header = ({ toggleMenu, pad, isFixed, bottomBorder }: IProps) => {
  return (
    <div
      className={`bg-white ${
        isFixed && "fixed"
      } flex flex-row w-full justify-between items-center ${pad && "p-3"} ${
        bottomBorder && "border-b"
      }`}
    >
      <div className="flex items-center">
        <div>
          <Logo />
        </div>
        <p className="ml-2 text-lg font-semibold">Untitled UI</p>
      </div>
      <div onClick={toggleMenu} className="md:hidden cursor-pointer">
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
