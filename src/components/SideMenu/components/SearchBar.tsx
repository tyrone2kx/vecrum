import React from "react";
import { SearchIcon } from "../../../assets/icons/icons";

const SearchBar = () => {
  return (
    <div className="my-6 w-full">
      <div className="container w-full mx-auto">
        <div className="border w-full rounded-md p-2 flex items-center">
          <SearchIcon />
          <input className="ml-1 w-full focus:outline-none outline-none" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
