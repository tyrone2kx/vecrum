import React from "react";

interface IProps {
  id: string;
  name: string;
}

const Radio = ({ id, name }: IProps) => {
  return (
    <div className="mt-1">
      <input
        id={id}
        name={name}
        className="checked:bg-purpleText focus:ring-purpleText text-purpleText hidden"
        type="radio"
      />
      <label htmlFor={id} className="flex items-center cursor-pointer">
        <div className="w-3.5 h-3.5 flex items-center justify-center border rounded-full">
          <div className="w-1/2 h-1/2 cursor-pointer rounded-full"></div>
        </div>
      </label>
    </div>
  );
};

export default Radio;
