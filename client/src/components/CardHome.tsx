"use client";
import React, { useContext } from "react";
import { ProductType } from "@/defs/TypeDefs";
import { ProductContext } from "@/lib/productContext";

const CardHome = ({
  name,
  price,
  image,
}: {
  name: string;
  price: number;
  image: string[];
}) => {
  return (
    <>
      <div className="flex flex-col bg-white w-[230px] h-full rounded-lg shadow-lg relative overflow-hidden hover:scale-105 transition-all">
        <div className="flex h-[60%] w-full overflow-hidden items-center justify-center p-[5%] -mb-[5%]">
          {/* Picture of The Card */}
          <img
            src={image[0]}
            className="object-cover w-[100%] h-[100%] rounded-lg"
          />
        </div>
        {/* Title Card */}
        <div className="flex flex-col w-full px-[7%] pt-4 gap-y-1">
          <p className="text-gray-800 font-bold">{name}</p>
          <p className="text-[11px] text-gray-500">
            Temui Minor III dan rasakan suara khas Marshall tanpa kekacauan
          </p>
        </div>
        {/* Price Tag */}
        <div className="flex flex-row w-full h-[10%] justify-between items-center px-[7%] pt-[2%] pb-[3%]">
          <p className="font-bold text-gray-700">{price}</p>
          {/* Upload Time */}
          <div className="flex flex-row text-gray-600 gap-x-1 h-full items-center">
            <span
              className="material-symbols-outlined text-2xl"
              style={{ fontSize: 15 }}
            >
              schedule
            </span>
            <p className="text-[12px]">3h ago</p>
          </div>
        </div>

        <div className="flex w-full justify-center items-center h-[11%] pb-2 mt-2">
          <div className="flex w-[92%] h-full bg-gray-900 items-center justify-center rounded-md flex-row gap-x-1 hover:bg-orange-900 transition-all">
            <span
              className="material-symbols-outlined text-2xl"
              style={{ fontSize: 18, fontWeight: 20 }}
            >
              shopping_bag
            </span>
            <p className="text-[13px]">Buy Now</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHome;
