import { RhIcon, RhInput, RhInputGroup, RhSlider } from "@rhythm-ui/react";
import React, { useEffect, useState } from "react";
import MobileBlogCard from "./components/MobileBlogCard";
import {
  useGetPostTagsListQuery,
  useLazyGetPostByTagQuery,
  useLazyGetSearchPostsQuery,
} from "../../store/api";
import HorizontalMobileCard from "./components/HorizontalMobileCard";

function MobileBlogPage() {
  const [search, setSearch] = useState("");
  const { data: tags } = useGetPostTagsListQuery();
  const [selectedTags, setSelectedTags] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [searchPosts] = useLazyGetSearchPostsQuery();
  const [getPostByTagName] = useLazyGetPostByTagQuery();

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
    <div className="mx-auto h-[100vh] w-[100vw] bg-[#00aaa1] flex justify-center items-center ">
      <div className="bg-white w-[390px] h-[800px] rounded-md p-0 ">
        <div className="flex flex-col gap-2 justify-between mt-10">
          <div className="flex gap-2  justify-between items-center mx-4  w-[360px]">
            <RhInputGroup className=" items-center flex rounded-3xl px-2 ">
              <RhIcon
                icon="material-symbols-light:search-rounded"
                className="text-xl"
              />
              <RhInput
                className="w-[240px]"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search..."
              />
              <RhIcon icon="mingcute:filter-line" />
            </RhInputGroup>

            <RhIcon icon="tdesign:notification" className="text-xl" />
          </div>
        </div>

        <h3 className="px-4 my-3">Recommended</h3>
        {/* Cards slider */}
        <div className="flex gap-0 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide  border-b">
          {allPosts?.posts?.length == 0 && (
            <div className="w-full ">No Results</div>
          )}
          {allPosts?.posts?.map((post, item) => {
            return (
              <div className="snap-center flex-shrink-0">
                <MobileBlogCard data={post} />
              </div>
            );
          })}
        </div>

        <div className=" border-t">
          <div className="flex   w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide   gap-4">
            {tags?.slice(0, 10).map((item) => {
              return (
                <span
                  key={item.id}
                  onClick={() => {
                    setSelectedTags(item);
                  }}
                  className={`  bg-[#caf8d479] cursor-pointer flex text-sm  items-center  px-2 justify-center border rounded-md ${
                    selectedTags == item ? "bg-[#00AAA1] text-white" : ""
                  }`}
                >
                  {item.toUpperCase()}
                </span>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2  h-[200px] overflow-y-auto mt-10">
          {allPosts?.posts?.length == 0 && (
            <div className="w-full ">No Results</div>
          )}
          {allPosts?.posts?.slice(0, 5).map((post, item) => {
            return (
              <div className="snap-center flex-shrink-0">
                <HorizontalMobileCard data={post} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MobileBlogPage;
