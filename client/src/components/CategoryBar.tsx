import { ComponentProps } from "react";

const CategoryBar = () => {
  return (
    <>
      <div className="h-[100px] w-full flex items-center justify-center space-x-2 bg-gray-100">
        <div className="flex items-center space-x-10 justify-between mr-16 w-[65%] h-full">
          <div className="relative w-fit block text-gray-800 text-center hover:text-orange-900 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 30 }}
            >
              headphones
            </span>
            <p className="text-xs font-normal">TWS</p>
          </div>
          <div className="relative w-fit block text-gray-800 text-center hover:text-orange-900 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 30 }}
            >
              earbuds
            </span>
            <p className="text-xs font-normal">Headset</p>
          </div>
          <div className="relative w-fit block text-gray-800 text-center hover:text-orange-900 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 30 }}
            >
              home_speaker
            </span>
            <p className="text-xs font-normal">Technology</p>
          </div>
          <div className="relative w-fit block text-gray-800 text-center hover:text-orange-900 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 30 }}
            >
              google_home_devices
            </span>
            <p className="text-xs font-normal">Bluetooth Speaker</p>
          </div>
          <div className="relative w-fit block text-gray-800 text-center hover:text-orange-900 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 30 }}
            >
              noise_aware
            </span>
            <p className="text-xs font-normal">Noise Canceling</p>
          </div>
          <div className="relative w-fit block text-gray-800 text-center hover:text-orange-900 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 30 }}
            >
              headphones_battery
            </span>
            <p className="text-xs font-normal">Wireless Headphones</p>
          </div>
          <div className="relative w-fit block text-gray-800 text-center hover:text-orange-900 after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 30 }}
            >
              speaker_group
            </span>
            <p className="text-xs font-normal">Speaker</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryBar;
