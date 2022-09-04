import React from "react";
import { ExitIcon } from "../../../assets/icons/icons";
import face from "../../../assets/images/face.png";

const Footer = () => {
  return (
    <div className="flex justify-between mb-4">
      <div className="flex">
        <div className="w-10">
          <img src={face} className="w-full" />
        </div>
        <div className="ml-2 w-full">
          <p className="text-blackText text-sm font-semibold md:max-w-[90%] whitespace-nowrap overflow-hidden overflow-ellipsis">
            Olivia Rhye
          </p>
          <p className="text-greyText text-sm md:max-w-[95%] whitespace-nowrap overflow-hidden overflow-ellipsis">
            olivia@untitledui.com
          </p>
        </div>
      </div>
      <div>
        <ExitIcon />
      </div>
    </div>
  );
};

export default Footer;
