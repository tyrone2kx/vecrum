import React from "react";

interface IProps {
  className?: string;
}

const Spacer = (props: IProps) => {
  const { className } = props;
  return <div className={`h-px bg-spacerBg w-full ${className || ""}`}></div>;
};

export default Spacer;
