import React from "react";
import {
  ArrowDownIcon,
  CheckMarkIcon,
  CloudIcon,
} from "../../../assets/icons/icons";
import AvatarGroup from "../../../components/AvatarGroup";

const data = [
  {
    invoice: "Basic Plan - Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: true,
    images: [
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
    ],
  },
  {
    invoice: "Basic Plan - Nov 2022",
    amount: "USD $10.00",
    date: "Nov 1, 2022",
    status: true,
    images: [
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
    ],
  },
  {
    invoice: "Basic Plan - Oct 2022",
    amount: "USD $10.00",
    date: "Oct 1, 2022",
    status: true,
    images: [
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
    ],
  },
  {
    invoice: "Basic Plan - Sep 2022",
    amount: "USD $10.00",
    date: "Sep 1, 2022",
    status: true,
    images: [
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
    ],
  },
  {
    invoice: "Basic Plan - Aug 2022",
    amount: "USD $10.00",
    date: "Aug 1, 2022",
    status: true,
    images: [
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
    ],
  },
  {
    invoice: "Basic Plan - Jul 2022",
    amount: "USD $10.00",
    date: "Jul 1, 2022",
    status: true,
    images: [
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
    ],
  },
  {
    invoice: "Basic Plan - Jun 2022",
    amount: "USD $10.00",
    date: "Jun 1, 2022",
    status: true,
    images: [
      "http://picsum.photos/40",
      "http://picsum.photos/40",
      "http://picsum.photos/40",
    ],
  },
];

const Table = () => {
  return (
    <div>
      <table className="bg-white w-full border rounded-lg drop-shadow-md">
        <thead className="rounded-t-lg">
          <tr className="border-b rounded-t-lg bg-pageBg">
            <th className="p-3 text-start w-auto md:w-5/12">
              <div className="flex items-center space-x-2">
                <input
                  className="rounded border-gray-300 checked:bg-purpleText"
                  type={"checkbox"}
                />
                <p className=" text-xs text-greyText font-normal">Invoice</p>
                <div>
                  <ArrowDownIcon />
                </div>
              </div>
            </th>
            <th className="p-3 text-start text-xs text-greyText font-normal">
              Amount
            </th>
            <th className="p-3 text-start text-xs text-greyText font-normal hidden md:table-cell">
              Date
            </th>
            <th className="p-3 text-start text-xs text-greyText font-normal hidden md:table-cell">
              Status
            </th>
            <th className="p-3 text-start text-xs text-greyText font-normal hidden md:table-cell">
              Users on plan
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-b-gray-200">
              <td className="p-3 py-4 text-start text-sm text-blackText font-normal w-auto md:w-5/12">
                <div className="flex space-x-2 items-center">
                  <input
                    className="rounded border-gray-300 checked:bg-purpleText"
                    type={"checkbox"}
                  />
                  <p>{item.invoice}</p>
                </div>
              </td>
              <td className="p-3 py-4 text-start text-sm text-greyText font-normal">
                {item.amount}
              </td>
              <td className="p-3 py-4 text-start text-sm text-greyText font-normal hidden md:table-cell">
                {item.date}
              </td>
              <td className="p-3 py-4 text-start text-sm text-greyText font-normal hidden md:table-cell">
                {item.status && (
                  <div className="w-fit bg-lightGreen rounded-full px-4 py-1 text-xs text-green flex items-center space-x-1">
                    <CheckMarkIcon />
                    <p>Paid</p>
                  </div>
                )}
              </td>
              <td className="p-3 py-4 text-start text-sm text-greyText font-normal hidden md:table-cell">
                <AvatarGroup images={item.images} />
              </td>
              <td className="hidden md:table-cell">
                <div>
                  <CloudIcon />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
