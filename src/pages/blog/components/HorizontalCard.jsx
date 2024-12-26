import React from "react";
import { RhCard, RhIcon } from "@rhythm-ui/react";
import { useNavigate } from "react-router-dom";

function HorizontalCard({ data }) {
  const navigate = useNavigate();
  return (
    <RhCard
      onClick={() => {
        navigate("/blog/" + data.id);
      }}
      className="w-full p-4 cursor-pointer flex  gap-4 shadow-none border-none"
    >
      <img
        src={`https://picsum.photos/284/180?random=${Math.random()}`}
        className=" w-[284px] h-[180px] rounded-md shadow-md"
        alt="Example Image"
      />

      <div className="flex gap-4 flex-col">
        <span className="text-xs max-w-fit bg-[#dff1f0] px-1">
          {" "}
          {data?.tags[0]?.toUpperCase()}
        </span>

        {/* heading */}

        <h2>{data?.title}</h2>

        {/* tags */}

        <div className="flex gap-4 ">
          <span className="text-xs flex gap-2 items-center border-r-2 pr-1 border-gray-300 ">
            <RhIcon icon="icon-park:avatar" />
            Doe John{" "}
          </span>
          <span className="text-xs flex gap-2 items-center  border-r-2 pr-1 border-gray-300 ">
            <RhIcon icon="solar:calendar-broken" />
            26 Dec 2024{" "}
          </span>
          <span className="text-xs flex gap-2 items-center">
            <RhIcon icon="tabler:clock" />2 days ago{" "}
          </span>
        </div>

        {/* desc */}

        <p className="text-sm truncate">{data?.body}</p>
      </div>
    </RhCard>
  );
}

export default HorizontalCard;
