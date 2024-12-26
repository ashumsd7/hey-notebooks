import React from "react";
import { RhCard, RhIcon } from "@rhythm-ui/react";
import { useNavigate } from "react-router-dom";
function VerticalCard({ data }) {
  const navigate = useNavigate();
  return (
    <RhCard
      onClick={() => {
        navigate("/blog/"+data.id);
      }}
      className="max-w-[450px] cursor-pointer p-4 flex flex-col gap-4 shadow-none border-none bg-transparent"
    >
      {/* tags */}

      <span className="text-xs max-w-fit bg-[#dff1f0] px-1">
        {" "}
        {data?.tags[0]?.toUpperCase()}
      </span>

      {/* heading */}

      <h2 className="truncate">{data?.title}</h2>

      {/* image */}

      <img
        src={`https://picsum.photos/200/300?random=${Math.random()}`}
        className=" w-[400px] h-[229px] rounded-md shadow-md"
        alt="Example Image"
      />

      {/* tags */}

      <div className="flex gap-4 ">
        <span className="text-xs flex gap-2 items-center border-r-2 pr-1 border-gray-300 "><RhIcon icon="icon-park:avatar"/>Doe John </span>
        <span className="text-xs flex gap-2 items-center  border-r-2 pr-1 border-gray-300 "><RhIcon icon="solar:calendar-broken"/>26 Dec 2024 </span>
        <span className="text-xs flex gap-2 items-center"><RhIcon icon="tabler:clock"/>2 days ago  </span>
      </div>

      {/* desc */}

      <p className="text-sm truncate">{data?.body}</p>
    </RhCard>
  );
}

export default VerticalCard;
