import { RhAvatar, RhIcon } from "@rhythm-ui/react";
import React from "react";

function Author() {

  const AVATAR_IMAGE='https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  return (
    <div className="flex gap-4 items-center">
      <RhAvatar
        src={AVATAR_IMAGE}
        className="h-14 w-14 bg-gray-400"
      />
      <div className="flex flex-col gap-1">
        <h4 className="m-0 flex items-center">  Jenny Kia</h4>
        <p className="text-xs"> Fashion designer, Blogger, activist </p>
        <div className="flex gap-2">
          <RhIcon
            className="text-base cursor-pointer "
            icon="openmoji:twitter"
          />
          <RhIcon
            className="text-base cursor-pointer "
            icon="openmoji:facebook"
          />
          <RhIcon
            className="text-base cursor-pointer "
            icon="openmoji:instagram"
          />
        </div>
      </div>
    </div>
  );
}

export default Author;
