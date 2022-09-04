import React from "react";

interface IProps {
  images: string[];
}

const AvatarGroup = ({ images }: IProps) => {
  const length = images.length;
  const diff = length - 5;
  const list = diff > 0 ? images.slice(0, 5) : [...images];

  return (
    <div className="flex">
      {list.map((img, i) => (
        <img
          key={i}
          className="rounded-full border border-white w-8 -ml-2 first:ml-0"
          src={img}
        />
      ))}
      {diff > 0 && (
        <div className="rounded-full bg-pageBg text-sm border border-white w-8 h-8 flex items-center justify-center -ml-2 first:ml-0">
          +{diff}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
