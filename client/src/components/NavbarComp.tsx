import Image from "next/image";
import React from "react";
import Link from "next/link";

const NavbarComp = () => {
  return (
    <>
      <div className="flex w-[100dvw] items-center justify-center bg-gray-100">
        <div className="w-[92%] h-[105px] flex px-12 justify-between items-center text-gray-500 flex-row">
          {/* Logo */}
          <div className="flex justify-start items-center w-[150px]">
            <Image
              src="/logo_movik.svg"
              width={"120"}
              height={"80"}
              alt="background-login"
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          {/* Navbar */}
          <div className="flex flex-col justify-start items-start w-[1000px] pl-[2%] gap-y-2 text-[14px]">
            <div className="flex-row flex gap-x-6 group ">
              <p className="relative w-fit block hover:text-orange-900 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                Home
              </p>
              <p className="relative w-fit block hover:text-orange-900 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                Product
              </p>
              <p className="relative w-fit block hover:text-orange-900 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                Wishlist
              </p>
              <p className="relative w-fit block hover:text-orange-900 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                About
              </p>
            </div>
          </div>

          {/* Row Button */}
          <div className="flex flex-row w-[300px] justify-end items-center gap-x-4">
            {/* Button */}
            <div className="flex items-center justify-center text-[14px] w-[35px] hover:text-orange-900 hover:scale-105 transition-all">
              <span className="material-symbols-outlined w-6 h-6">
                feature_search
              </span>
            </div>
            {/* Button */}
            <div className="flex items-center justify-center text-[14px] w-[35px]">
              <span className="material-symbols-outlined w-6 h-6 hover:text-orange-900 transition-all hover:scale-105">
                shopping_cart
              </span>
            </div>
            {/* Button */}
            <div className="border-r-2 border-gray-400 text-gray-100">p</div>
            {/* Button */}
            <div className="flex items-center justify-center text-[14px] w-[80px]">
              <Link
                href={"/login"}
                className="relative w-fit block hover:text-orange-900 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                Sign Up
              </Link>
            </div>
            {/* Button */}
            <Link
              href={"/login"}
              className="flex bg-[#373737] hover:bg-orange-900 transition-all px-6 py-2 rounded-lg text-gray-300 text-sm flex-row items-center gap-x-2 justify-center"
            >
              <span className="material-symbols-outlined w-6 h-6">
                exit_to_app
              </span>
              <p>Login</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComp;
