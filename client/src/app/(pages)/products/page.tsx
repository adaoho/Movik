"use client";

import BannerComponent from "@/components/BannerComponent";
import CardProduct from "@/components/CardProduct";
import FooterComp from "@/components/FooterComp";
import NavbarComp from "@/components/NavbarComp";
import { ProductContext } from "@/lib/productContext";
import Link from "next/link";
import { useContext } from "react";

// Fitur List Product
// Fitur Search
// Fitur Pagination - infinite Scroll - install package
// Fitur Add to Wishlist
// Fitur pindah ke Product Detail

export default function ProductPage() {
  const productData = useContext(ProductContext);

  return (
    <>
      <NavbarComp />

      <div className="w-screen h-[80px] bg-gray-100"></div>

      <div className="flex flex-row w-screen h-full bg-gray-100 relative px-[7%] gap-x-3">
        {/* Side Bar */}
        <div className="sticky top-[9%] w-[20%] h-[340px] mb-[7%] bg-white rounded-xl shadow-lg text-black">
          <form className="flex flex-col w-full justify-between h-full items-center p-4 pb-7 pt-6">
            <div className="flex flex-col w-[90%] h-[80%] text-gray-900 text-[24px] font-bold rounded-md justify-start items-start text-left">
              <p className="mb-4 leading-7">Find your Best Product</p>
              <div className="flex flex-col w-full gap-y-1">
                <p className="text-sm font-light mb-2 underline">
                  Search by Name
                </p>
                <input
                  type="text"
                  name="searchName"
                  placeholder="Search by Name ..."
                  className="w-full text-gray-700 px-[4%] h-9 bg-gray-100 rounded-lg text-[12px] font-light border-2 border-gray-300 mb-4"
                />
                <p className="text-sm font-light mb-2 underline">
                  Search by Tag
                </p>
                <input
                  type="text"
                  name="searchTag"
                  placeholder="Search by Tag ..."
                  className="w-full text-gray-700 px-[4%] h-9 bg-gray-100 rounded-lg text-[12px] font-light border-2 border-gray-300"
                />
              </div>
            </div>
            <Link
              href={{ pathname: `/products`, query: { name: "name" } }}
              type="submit"
              className="flex flex-row w-[90%] h-8 text-orange-800 border-[1px] border-orange-900 rounded-md justify-center items-center hover:text-white hover:bg-orange-900 transition-all"
            >
              <p>Search</p>
            </Link>
          </form>

          <div className="flex flex-row w-full h-[10%] items-center justify-between gap-x-2 relative mt-4">
            <Link href={`/products`}>
              <div className="flex w-[100%] h-full hover:bg-gray-900 bg-gray-400 px-5 py-2 rounded-lg text-white transition-all">
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ fontSize: 18, fontWeight: 20 }}
                >
                  arrow_back_ios
                </span>
                <p className="text-[13px]">Prev Page</p>
              </div>
            </Link>
            <Link href={`/wishlist`}>
              <div className="flex w-[100%] bg-gray-400 hover:bg-gray-900 px-5 py-2 rounded-lg text-white gap-x- transition-all">
                <p className="text-[13px]">Next Page</p>
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ fontSize: 18, fontWeight: 20 }}
                >
                  arrow_forward_ios
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Card Product */}
        <div className="flex flex-col w-[80%] h-full relative items-center justify-center">
          <div className="grid grid-cols-4 w-full h-full gap-x-3 gap-y-4 justify-center pb-10">
            {productData.map((product, index) => (
              <Link href={`/products/${product.slug}`}>
                <CardProduct key={product._id} product={product} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-screen bg-gray-100 h-[300px] items-center justify-start ">
        <BannerComponent />
      </div>

      <FooterComp />
    </>
  );
}
