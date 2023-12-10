"use client";

import CardWishlist from "@/components/CardWishlist";
import FooterComp from "@/components/FooterComp";
import NavbarComp from "@/components/NavbarComp";
import { ProductContext } from "@/lib/productContext";
import Link from "next/link";
import { useContext } from "react";

// Fitur List Wishlist
// Fitur Remove Wishlist

export default function Home() {
  const productData = useContext(ProductContext);

  return (
    <>
      <NavbarComp />

      <div className="w-screen h-[80px] bg-gray-100"></div>

      <div className="flex flex-col w-screen bg-gray-100 h-[210px] items-center justify-start ">
        <div className="flex flex-row w-[86%] h-[90%] rounded-2xl relative shadow-lg">
          <img
            src="https://source.unsplash.com/random/900×900/?headphones-black"
            className="object-cover w-[100%] h-[100%] rounded-2xl"
          />
          <div className="absolute flex-col flex justify-center w-[100%] items-start px-12 h-full bg-gradient-to-r from-[#000000c0] to-[#00000030] rounded-2xl">
            <p className="font-bold text-[30px]">Your Wishlist Products</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-screen h-full bg-gray-100 relative px-[7%] gap-x-3">
        {/* Side Bar */}

        {/* Card Product */}
        <div className="flex flex-col w-[100%] h-full relative items-center justify-center">
          <div className="grid grid-cols-4 w-full h-full gap-x-3 gap-y-4 justify-center">
            {productData.map((product, index) => (
              <CardWishlist key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-screen h-[50px] bg-gray-100"></div>

      <FooterComp />
    </>
  );
}
