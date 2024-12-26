import React from "react";
import { RhCard, RhIcon } from "@rhythm-ui/react";
import { useNavigate } from "react-router-dom";

function HorizontalMobileCard({ data }) {
  const navigate = useNavigate();
  return (
    <>
      <RhCard
        onClick={() => {
          navigate("/mobile-blog/" + data.id);
        }}
        className="w-full  p-4 cursor-pointer flex  gap-4 shadow-none border-none  items-center"
      >
  

        <img
          src={`https://picsum.photos/284/180?random=${Math.random()}`}
          className=" w-[100px] h-[100px] rounded-md shadow-md"
          alt="Example Image"
        />

        <div className="flex gap-4 flex-col">
          <span className="text-xs max-w-fit bg-[#dff1f0] px-1">
            {" "}
            {data?.tags[0]?.toUpperCase()}
          </span>

          {/* heading */}

          <h3>{data?.title}</h3>

          {/* tags */}

          <div className="flex gap-1 justify-between items-start  ">
            <span className="text-xs max-w-fit bg-[#dff1f0] px-1">
              {" "}
              {data?.tags[0]?.toUpperCase()}
            </span>
            <div className="flex gap-2">
              <span className="text-xs flex gap-2 items-center">
                {data?.views} views
              </span>
            </div>
          </div>

          {/* desc */}
        </div>
      </RhCard>
    </>
  );
}

export default HorizontalMobileCard;
