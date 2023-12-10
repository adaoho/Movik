import {
  ButtonMT,
  CarouselMT,
  Typography,
} from "@/components/MaterialTailwind";
import Link from "next/link";
import React from "react";

const CaraouselMT = () => {
  return (
    <div className="flex w-[86%] h-full items-center">
      <CarouselMT autoplay={true} className="rounded-xl h-[480px]" loop={true}>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1481207727306-1a9f151fca7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxoZWFkcGhvbmV8ZW58MHx8MHx8fDA%3D"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-gradient-to-r from-[#000000c0] to-[#00000030]">
            <div className="w-3/4 pl-12 md:w-3/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Immerse Yourself in Pure Sound
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 w-[70%]"
              >
                Experience audio like never before with our cutting-edge
                headphones. Immerse yourself in a world of pure sound.
              </Typography>
              <div className="flex gap-x-8 flex-row">
                <Link href={"/products"}>
                  <ButtonMT
                    size="lg"
                    className="bg-[#6b6b6b] hover:bg-orange-900 transition-all"
                  >
                    Shop Now
                  </ButtonMT>
                </Link>
                <div className="flex flex-row gap-x-4">
                  <div className="flex flex-col items-center">
                    <h1 className="text-[20px] font-bold">10k+</h1>
                    <p className="text-[13px]">Product Review</p>
                  </div>
                  <div className="divider">|</div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-[20px] font-bold">30k+</h1>
                    <p className="text-[13px]">Best Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1585772516992-6b81fe6b0da0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg0fHxoZWFkcGhvbmV8ZW58MHx8MHx8fDA%3D"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-gradient-to-r from-[#000000c0] to-[#00000030]">
            <div className="w-3/4 pl-12 md:w-3/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Comfort, All-Day Long
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 w-[70%]"
              >
                Discover a new level of comfort with our headphones. Designed
                for extended wear, our plush ear cushions and lightweight build
                ensure a luxurious experience.
              </Typography>
              <div className="flex gap-x-8 flex-row">
                <Link href={"/products"}>
                  <ButtonMT
                    size="lg"
                    className="bg-[#6b6b6b] hover:bg-orange-900 transition-all"
                  >
                    Shop Now
                  </ButtonMT>
                </Link>
                <div className="flex flex-row gap-x-4">
                  <div className="flex flex-col items-center">
                    <h1 className="text-[20px] font-bold">10k+</h1>
                    <p className="text-[13px]">Product Review</p>
                  </div>
                  <div className="divider">|</div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-[20px] font-bold">30k+</h1>
                    <p className="text-[13px]">Best Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1483119871437-a04216682227?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDM0fHxoZWFkcGhvbmV8ZW58MHx8MHx8fDA%3D"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-gradient-to-r from-[#000000c0] to-[#00000030]">
            <div className="w-3/4 pl-12 md:w-3/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Wireless, Effortless Style
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 w-[70%]"
              >
                Cut the cords and embrace freedom with our wireless headphones.
                Effortlessly stylish and technologically advanced.
              </Typography>
              <div className="flex gap-x-8 flex-row">
                <Link href={"/products"}>
                  <ButtonMT
                    size="lg"
                    className="bg-[#6b6b6b] hover:bg-orange-900 transition-all"
                  >
                    Shop Now
                  </ButtonMT>
                </Link>
                <div className="flex flex-row gap-x-4">
                  <div className="flex flex-col items-center">
                    <h1 className="text-[20px] font-bold">5k+</h1>
                    <p className="text-[13px]">Product Review</p>
                  </div>
                  <div className="divider">|</div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-[20px] font-bold">6k+</h1>
                    <p className="text-[13px]">Best Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CarouselMT>
    </div>
  );
};

export default CaraouselMT;
