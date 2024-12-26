import React from "react";
import ColorHeading from "./ColorHeading";
import { RhIcon, RhInput } from "@rhythm-ui/react";

function Navbar({ searchComponent }) {
  return (
    <div className="bg-[#e8f3f3] h-16 flex justify-between px-20 items-center">
      <div className="flex gap-6">
        <p className="flex gap-1 items-center">
          Hope Pages{" "}
          <RhIcon
            className="text-xl cursor-pointer"
            icon="gridicons:dropdown"
          />
        </p>
        <p>About</p>
        <p className="flex gap-1 items-center">
          Categories{" "}
          <RhIcon
            className="text-xl cursor-pointer"
            icon="gridicons:dropdown"
          />
        </p>
        <p className="flex gap-1 items-center">
          {" "}
          Pages{" "}
          <RhIcon
            className="text-xl cursor-pointer"
            icon="gridicons:dropdown"
          />
        </p>
      </div>
      <div>
        <ColorHeading heading={"Note Book."} />
      </div>
      <div className="flex gap-6 items-center">
        {searchComponent}
        <p className="flex gap-1 items-center">
          {" "}
          <RhIcon className="text-xl cursor-pointer" icon="mdi:edit" />
        </p>
        <p>Contact</p>
        <p className="flex gap-1 items-center">
          En{" "}
          <RhIcon
            className="text-xl cursor-pointer"
            icon="gridicons:dropdown"
          />
        </p>
        <p
          className="flex gap-1 items-center cursor-pointer animate-pulse font-extrabold text-[#07a3bc]"
          onClick={() => {
            window.open("/mobile-blog", "_blank");
          }}
        >
          Mobile View{" "}
          <RhIcon
            className="text-xl cursor-pointer"
            icon="icomoon-free:new-tab"
          />
        </p>
        <p className="flex gap-1 items-center">
          <RhIcon className="text-xl cursor-pointer" icon="solar:sun-broken" />{" "}
          <RhIcon
            className="text-xl cursor-pointer bg-[#00AAA1] text-white rounded-full  "
            icon="fluent-mdl2:clear-night"
          />
        </p>
      </div>
    </div>
  );
}

export default Navbar;
