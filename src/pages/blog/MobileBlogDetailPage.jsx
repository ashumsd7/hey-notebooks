import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import ColorHeading from "./components/ColorHeading";
import { useNavigate, useParams } from "react-router-dom";
import {
  RhAvatar,
  RhButton,
  RhCard,
  RhIcon,
  RhInput,
  RhTabs,
} from "@rhythm-ui/react";
import Author from "./components/Author";
import CommonSidebar from "./components/CommonSidebar";
import VerticalCard from "./components/VerticalCard";
import { useGetPostByCommentQuery, useGetPostByIdQuery } from "../../store/api";

function MobileBlogDetailPage() {
  const navigate=useNavigate()
  const [comments, setComments] = useState([]);
  const text = useRef("");
  const { id } = useParams();

  const { data: blogDetails } = useGetPostByIdQuery(id);

  const { data: postComments } = useGetPostByCommentQuery(id);



  useEffect(() => {
    const listedComments = postComments?.comments?.map((item) => item.body);

    setComments(listedComments);
  }, [postComments]);

  return (
    <div>
      <div className="mx-auto h-[100vh] w-[100vw] bg-[#00aaa1] flex justify-center items-center  ">
        <div className="bg-white w-[390px] h-[800px] rounded-md p-0  flex-col gap-4 p-4">
          <div className="flex gap-1 items-center mb-4">
            <RhIcon className="text-2xl" icon="ic:baseline-arrow-back"  onClick={()=>{
              navigate(-1)
            }}/>
          </div>
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
            className=" w-full rounded-md shadow-md h-[200px] mb-4"
            alt="Example Image"
          />

          <div className="flex justify-between mb-4">
            <span className="text-xs max-w-fit bg-[#dff1f0] px-2">
              {" "}
              {blogDetails?.tags[0].toUpperCase()}
            </span>
            <div className="flex gap-1 justify-between items-start  ">
              <span className="text-xs flex gap-2 items-center  border-r-2 pr-1 border-gray-300 ">
                <RhIcon icon="solar:calendar-broken" />
                26 Dec 2024{" "}
              </span>
              <div className="flex gap-2">
                <span className="text-xs flex gap-2 items-center">
                  {blogDetails?.views} views
                </span>
              </div>
            </div>
          </div>
          <h3>{blogDetails?.title}</h3>

          <div className="flex justify-between mt-4">
            <div className="gap-2 flex items-center">
              <RhIcon icon="clarity:avatar-solid" />
              <span className="text-xs"> Merry Doe</span>
            </div>
            <RhIcon icon="majesticons:share" />
          </div>

          <div className="flex gap-2 max-h-[390px] overflow-y-auto flex-col mt-10">
            <p className="text-sm mt-6">{blogDetails?.body}</p>

            <p className="text-sm bg-[#f2f8f7] italic p-10 mt-6">
              “Did you come here for something in particular or just general
              Riker-bashing? And blowing into maximum warp speed, you appeared
              for an instant to be in two places at once. We have a saboteur
              aboard. We know you’re dealing in stolen ore. But I wanna talk
              about the assassination attempt on Lieutenant Worf.”
            </p>
            <p className="text-sm mt-6">
              Did you come here for something in parti cular or just general
              Riker-bashing? And blowing into maximum warp speed, you appeared
              for an instant to be in two places at once. We have a saboteur
              aboard. We know you’re dealing in stolen ore. But I wanna talk
              about the assassination attempt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileBlogDetailPage;
