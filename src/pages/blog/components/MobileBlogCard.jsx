import React from "react";
import { RhCard, RhIcon } from "@rhythm-ui/react";
import { useNavigate } from "react-router-dom";
function MobileBlogCard({ data }) {
  const navigate = useNavigate();

  console.log("data",data);
  return (
    <RhCard
      onClick={() => {
        navigate("/mobile-blog/" + data.id);
      }}
      className="w-[340px] cursor-pointer p-4  flex flex-col gap-4 shadow-none border-none bg-transparent"
    >
      {/* tags */}

      <span className="text-xs max-w-fit bg-[#dff1f0] px-1">
        {" "}
        {data?.tags[0]?.toUpperCase()}
      </span>

 

      {/* image */}

      <img
        src={`https://picsum.photos/200/300?random=${Math.random()}`}
        className=" w-[400px] h-[229px] rounded-md shadow-md"
        alt="Example Image"
      />

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

       {/* heading */}

       <h3 className="">{data?.title}</h3>

    
    </RhCard>
  );
}

export default MobileBlogCard;
