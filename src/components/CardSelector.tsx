import React from "react";

interface IProps {
  cardType: string;
  expiry: string;
  lastDigits: number;
  Icon: any;
  selected?: boolean;
  onClick: () => void;
}

const CardSelector = ({
  Icon,
  cardType,
  lastDigits,
  expiry,
  selected,
  onClick,
}: IProps) => {
  return (
    <div
      onClick={() => onClick()}
      className={`w-full cursor-pointer p-4 flex justify-between rounded-md border  ${
        selected ? "bg-checkboxBg border-lightPurple" : "bg-white"
      }`}
    >
      <div className="flex">
        <div>{<Icon />}</div>
        <div className="ml-4">
          <p
            className={`text-sm ${
              selected ? "text-purpleText" : "text-blackText"
            }`}
          >
            {cardType} ending in {lastDigits}{" "}
          </p>
          <p
            className={`text-sm  ${
              selected ? "text-lightPurpleText" : "text-greyText"
            }`}
          >
            Expiry {expiry}
          </p>

          <div className="flex mt-3">
            <p
              className={`text-sm  ${
                selected ? "text-lightPurpleText" : "text-greyText"
              }`}
            >
              Set as default
            </p>
            <p className="text-sm ml-4 text-lightPurpleText">Edit</p>
          </div>
        </div>
      </div>

      <div>
        <input
          type="checkbox"
          className="rounded-full checked:bg-purpleText"
          disabled
          checked={selected}
        />
      </div>
    </div>
  );
};

export default CardSelector;
