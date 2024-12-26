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

function BlogDetails() {
  const navigate= useNavigate()
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
      <Navbar />

      <div className=" p-20 flex gap-10 flex-col ">
        <div className="flex gap-10 ">
          <div className="pb-10 px-10  flex-[70%] flex   overflow-y-auto border-r border-r-green-500">
            <RhCard className="w-full cursor-pointer p-4 flex flex-col gap-4 shadow-none border-none bg-transparent">
              {/* tags */}

              <span className="text-xs max-w-fit bg-[#dff1f0] px-2">
                {" "}
                {blogDetails?.tags[0].toUpperCase()}
              </span>

              {/* heading */}
              <div className="flex justify-between">
              <h2>{blogDetails?.title}</h2>

                <div className="flex gap-2 items-center"     onClick={() => {
                    navigate(-1);
                  }}>
                <RhIcon
                  className="text-2xl"
                  icon="ic:baseline-arrow-back"
              
                /> Go back
                </div>
              </div>

   

              {/* image */}
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

              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
                className=" w-full rounded-md shadow-md h-[500px]"
                alt="Example Image"
              />

              {/* desc */}

              <p className="text-base">{blogDetails?.body}</p>

              <div className="flex flex-col gap-2 mt-10">
                <h3>I Created a Developer Rap Video - Here's What I Learned</h3>
              </div>
              <p className="text-sm">
                Did you come here for something in parti cular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about the assassination attempt
              </p>

              <p className="text-sm bg-[#f2f8f7] italic p-10">
                “Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about the assassination attempt on Lieutenant Worf.”
              </p>

              <h3 className="mt-10">
                I Created a Developer Rap Video - Here's What I Learned
              </h3>
              <p className="text-sm">
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about the assassination attempt
              </p>

              <p className="text-sm bg-[#f2f8f7] italic p-10">
                “Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about the assassination attempt on Lieutenant Worf.”
              </p>

              <h3 className="mt-10">
                I Created a Developer Rap Video - Here's What I Learned
              </h3>
              <p className="text-sm">
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about the assassination attempt
              </p>

              <div className="mt-10">
                <ColorHeading heading={"See Related  Posts"} />
              </div>
              <div className="pb-10   flex-[70%] flex max-h-[600px] overflow-y-auto ">
                <VerticalCard key={Math.random()} />
                <VerticalCard />
                {/* Heading + Cards Section ( vertical scroll ) +  */}
              </div>

              {/* <Comments */}
              <div className="px-10">
                <ColorHeading heading={"Comments"} />
              </div>

              <div></div>
              <div>
                <div className="flex gap-2">
                  <RhAvatar />{" "}
                  <RhInput
                    value={text.current.value}
                    onChange={(e) => {
                      console.log("<<<", text);
                      text.current = e.target.value;
                    }}
                    placeholder="Write Something"
                  />
                  <RhButton
                    onClick={() => {
                      if (!text.current.trim()) return;
                      setComments((prev) => {
                        console.log("text.current.value", text.current);
                        return [...prev, text.current];
                      });
                      text.current = "";
                    }}
                  >
                    Add Comments
                  </RhButton>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-4 px-10">
                {comments?.reverse()?.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="  flex justify-between items-center"
                    >
                      <p className="text-xs italic flex gap-2  items-center">
                        {" "}
                        <RhIcon icon="icon-park:avatar" className="" />
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </RhCard>

            {/* Heading + Cards Section ( vertical scroll ) +  */}
          </div>
          {/* right side harding + some card w/0 image */}
          <div className=" flex-[30%]">
            <div className="flex gap-4 flex-col">
              <ColorHeading heading={"Top  Authors"} />

              <div className="flex flex-col mt-10 gap-4">
                <Author />
                <Author />
                <Author />
              </div>

              <div className="bg-[#009189] w-[350px] h-[300px] p-10 flex flex-col gap-4 text-white mt-6">
                <h2 className="text-white">want to travel sikkim by car?</h2>

                <p>
                  Did you come here for something in particular or just general
                  Riker-bashing? And blowing into
                </p>

                <RhButton className="bg-white text-[#009189] ">
                  Visit Us
                </RhButton>
              </div>
            </div>
            <CommonSidebar innerPageTags={blogDetails?.tags} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
