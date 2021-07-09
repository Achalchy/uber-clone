import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
const Sidebar = () => {
  return (
    <div className="flex  flex-col  md:w-96 h-screen mt-10 side md:fixed md:left-20 md:bottom-10">
      <div className="md:flex hidden items-center justify-center  sideleft">
        <h1 className="font-mono font-bold text-2xl">
          Where can we pick
          <br /> you up?
        </h1>
      </div>
      <div className="sideright bg-white">
        <div className=" h-14 flex items-center p-3 mb-10 ">
          {/* icon */}
          <SearchIcon className="text-gray-500 ml-1" fontSize="large" />
          <input
            type="text"
            className="flex-1 p-3 ml-2 border-0 outline-none"
            placeholder="Add a pickup location"
          />
        </div>
        <div className="w-28 h-8 flex px-2  items-center justify-between rounded-full hover:bg-gray-300 transition-all duration-1000 cursor-pointer">
          {/* icon */}
          <WatchLaterIcon fontSize="small" />
          Now
          {/* icon */}
          <KeyboardArrowDownIcon />
        </div>
        <div className="w-full  mt-5 flex items-center p-2">
          <div className="w-10 mr-3 bg-blue-500 h-10 rounded-full grid place-items-center">
            {/* Icon */}
            <GpsFixedIcon className="text-white" />
          </div>
          <div>
            {/* heading */}
            <h1 classname="text-lg font-mono font-bold">
              Allow location access
            </h1>
            {/* para */}
            <p className="text-sm font-thin text-blue-500">
              For perfect pickup experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
