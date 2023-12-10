import React from "react";

const BannerComponent = () => {
  return (
    <>
      {/* Banner Start */}
      <div className="flex flex-row w-[86%] h-[80%] rounded-2xl relative shadow-lg">
        <img
          src="https://source.unsplash.com/random/900×900/?headphones-black"
          className="object-cover w-[100%] h-[100%] rounded-2xl"
        />
        <div className="absolute flex-col flex justify-center w-[100%] items-start px-12 h-full bg-gradient-to-r from-[#000000c0] to-[#00000030] rounded-2xl">
          <p className="font-bold text-[30px]">Never Settle Any Information</p>
          {/* Text Input */}
          <form className="flex flex-row h-[50px] my-4 gap-x-2">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-[400px] text-gray-600 bg-gray-100 rounded-md px-5"
            />
            <div className="flex flex-row w-[90px] items-center justify-center bg-orange-900 rounded-md gap-x-1 hover:bg-red-800 transition-all hover:scale-105">
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontSize: 22, fontWeight: 20 }}
              >
                mail
              </span>
              Send
            </div>
          </form>
          <p className="w-[30%] text-sm text-gray-300 leading-5 ">
            By typing your email, you'll be able to receive any information
            regarding movik website{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default BannerComponent;
