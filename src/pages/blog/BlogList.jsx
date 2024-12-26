import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import VerticalCard from "./components/VerticalCard";
import ColorHeading from "./components/ColorHeading";
import NoImageCard from "./components/NoImageCard";
import HorizontalCard from "./components/HorizontalCard";
import Author from "./components/Author";
import { RhButton, RhInput, RhPagination } from "@rhythm-ui/react";
import Footer from "./components/Footer";
import {
  useGetPostTagsListQuery,
  useLazyGetPostByTagQuery,
  useLazyGetSearchPostsQuery,
} from "../../store/api";

import CommonSidebar from "./components/CommonSidebar";

function BlogList() {

  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState("");
  const [allPosts, setAllPosts] = useState({
    posts: [],
  });
  const { data: tags, loading } = useGetPostTagsListQuery();
  const [searchPosts, {loading:isLoadingBySearch}] = useLazyGetSearchPostsQuery();
  const [getPostByTagName, {loading:isLoadingByTags}] = useLazyGetPostByTagQuery();

  useEffect(() => {
    searchPosts({
      q: search,
    })
      .unwrap()
      .then((res) => {
        setAllPosts(res);
      });
  }, [search]);

  useEffect(() => {
    if (!selectedTags) return;
    getPostByTagName(selectedTags)
      .unwrap()
      .then((res) => {
        setAllPosts(res);
      });
  }, [selectedTags]);

 

  return (
    <div>
      <Navbar
        searchComponent={
          <RhInput
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search Posts"
          />
        }
      />
      {/* SECTION 1 */}
      <div className=" p-20 flex gap-10 flex-col bg-[#f2f8f7]">
        <div className="px-10">
          <ColorHeading heading={"Featured This Month"} />
        </div>
        <div className="flex gap-10 ">
          <div className="pb-10 px-10  flex-[70%] flex max-h-[600px] flex-wrap overflow-y-auto ">
      
            {allPosts?.posts.length == 0 && (
              <div className="w-full ">No Results</div>
            )}
            {(loading || isLoadingByTags || isLoadingBySearch) && <h2>Loading...</h2>}
            {allPosts?.posts?.map((post, item) => {
              return <VerticalCard data={post} />;
            })}
            {/* Heading + Cards Section ( vertical scroll ) +  */}
          </div>
          {/* right side harding + some card w/0 image */}
          <div className=" flex-[30%]">
            {/* Heading + Cards Section ( vertical scroll ) + right side harding + some card w/0 image  */}

            <div className="flex gap-4 flex-col">
              <ColorHeading heading={"Popular Posted"} />
              {allPosts?.posts.length == 0 && (
                <div className="w-full ">No Results</div>
              )}
              {allPosts?.posts?.slice(0, 4).map((post, item) => {
                return <NoImageCard data={post} />;
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <div className=" p-20 flex gap-10 flex-col ">
        <div className="px-10">
          <ColorHeading heading={"Recently Posted"} />
        </div>
        <div className="flex gap-10 ">
          <div className="pb-10 px-10  flex-[70%] flex flex-col gap-6  overflow-y-auto ">
            {allPosts?.posts.length == 0 && (
              <div className="w-full ">No Results</div>
            )}
            {allPosts?.posts?.slice(0, 4).map((post, item) => {
              return <HorizontalCard data={post} />;
            })}
            {/* Heading + Cards Section ( vertical scroll ) +  */}
          </div>
          {/* right side harding + some card w/0 image */}
          <div className=" flex-[30%]">
            {/* Authors */}

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
          </div>
        </div>
      </div>

      {/* Section 3 ( separating 2 cols) */}

      <div className=" p-20 flex gap-10 flex-col -mt-20 ">
        <div className="flex gap-10 ">
          <div className="pb-10 px-10  flex-[70%]  overflow-y-auto border-r border-r-green-500">
            <div className="w-full py-20 bg-[#f2f8f7]  flex items-center justify-start flex-col gap-4">
              <h2 className=" m-0">Share your knowledge with our readers</h2>
              <RhButton layout="outline" className="bg-transparent ">
                {" "}
                Write on Notebook
              </RhButton>
            </div>
            <div className="my-10">
              <ColorHeading heading={"Recently  Posted"} />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
              {allPosts?.posts.length == 0 && (
                <div className="w-full ">No Results</div>
              )}
              {allPosts?.posts?.slice(0, 4).map((post, item) => {
                return <VerticalCard data={post} />;
              })}
            </div>
            {/* Heading + Cards Section ( vertical scroll ) +  */}
          </div>
          {/* right side harding + some card w/0 image */}
          <div className=" flex-[30%]">
            <CommonSidebar
              customTags={
                <>
                  <div className="-mt-2 flex  flex-wrap w-[90%] gap-4">
                    {tags?.slice(0, 35).map((item) => {
                      return (
                        <span
                          key={item.id}
                          onClick={() => {
                            setSelectedTags(item);
                          }}
                          className={`  bg-[#caf8d479] cursor-pointer flex text-sm  items-center  px-2 justify-center border rounded-md ${
                            selectedTags == item
                              ? "bg-[#00AAA1] text-white"
                              : ""
                          }`}
                        >
                          {item.toUpperCase()}
                        </span>
                      );
                    })}
                  </div>
                </>
              }
            />
          </div>
        </div>
      </div>

      <div className="px-20">
        <RhPagination
          resultsPerPage={100}
          totalResults={200}
          variant="primary"
          currentPage={1}
        />
      </div>

      <Footer />
    </div>
  );
}

export default BlogList;
