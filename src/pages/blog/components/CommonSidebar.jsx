import React from "react";
import ColorHeading from "./ColorHeading";
import { useGetPostTagsListQuery } from "../../../store/api";

function CommonSidebar({ innerPageTags, customTags }) {

  return (
    <div>
      <div className="flex gap-4 flex-col py-10">
        <ColorHeading heading={"Categories"} />

        <div className="mt-4 flex flex-col gap-4 ">
          <div className="border-b  flex justify-between items-center">
            <h4 className="m-0"> Lifestyle</h4>
            <h5>09</h5>
          </div>
          <div className="border-b  flex justify-between items-center">
            <h4 className="m-0"> Travel</h4>
            <h5>05</h5>
          </div>
          <div className="border-b  flex justify-between items-center">
            <h4 className="m-0"> Food</h4>
            <h5>09</h5>
          </div>
          <div className="border-b  flex justify-between items-center">
            <h4 className="m-0"> Technology</h4>
            <h5>10</h5>
          </div>
          <div className="border-b  flex justify-between items-center">
            <h4 className="m-0"> Health Care</h4>
            <h5>03</h5>
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-col py-10 ">
        <ColorHeading heading={"Today's Update"} />

        <div className="mt-4 grid grid-cols-2 gap-4 w-[60%]">
          <div className=" h-[100px] w-[100px] rounded-sm bg-[#f2f8f7] flex flex-col gap-2 items-center justify-center">
            <h3 className="text-[#009189]">34</h3>
            <p className="text-xs"> New Posts</p>
          </div>
          <div className=" h-[100px] w-[100px] rounded-sm bg-[#f2f8f7] flex flex-col gap-2 items-center justify-center">
            <h3 className="text-[#009189]">480</h3>
            <p className="text-xs"> Total Visitors</p>
          </div>
          <div className=" h-[100px] w-[100px] rounded-sm bg-[#f2f8f7] flex flex-col gap-2 items-center justify-center">
            <h3 className="text-[#009189]">29</h3>
            <p className="text-xs"> New Subscribers</p>
          </div>
          <div className=" h-[100px] w-[100px] rounded-sm bg-[#f2f8f7] flex flex-col gap-2 items-center justify-center">
            <h3 className="text-[#009189]">138</h3>
            <p className="text-xs"> Blog Read</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-col py-10 ">
        <ColorHeading heading={"Instagram Posts"} />

        <div className="mt-4 grid grid-cols-3 gap-2 w-[70%] ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((item) => {
            return (
              <div
                kye={item}
                className=" h-[100px] w-[100px] cursor-pointer rounded-sm bg-[#d9d9d9] flex flex-col gap-2 items-center justify-center"
              >
                <img
                  src={`https://picsum.photos/95/95?random=${Math.random()}`}
                  className=" w-[100px] h-[100px] rounded-md shadow-md items-center justify-center"
                  alt="Example Image"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex gap-4 flex-col py-10 ">
        <ColorHeading heading={"Search With Tags "} />

        <div className="mt-4 flex  flex-wrap w-[90%] gap-4">
          {innerPageTags?.map((item) => {
            return (
              <span
                key={item.id}
                className=" bg-[#fafafa79] flex text-sm  items-center  px-2 justify-center border rounded-md"
              >
                {item.toUpperCase()}
              </span>
            );
          })}
        </div>

        {customTags}
      </div>
    </div>
  );
}

export default CommonSidebar;
