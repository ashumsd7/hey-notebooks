import React from "react";
import ColorHeading from "./ColorHeading";
import { RhButton, RhIcon, RhInput, RhInputGroup } from "@rhythm-ui/react";

function Footer() {
  return (
    <div className="bg-[#e8f3f3] grid grid-cols-4 gap-4 p-20">
      <div>
        <ColorHeading heading={"Note Book."} />
        <p className="mt-4">
          Did you come here for something in particular or just general Riker
        </p>
      </div>

      <div>
        <h3 className="mb-4">Blogs</h3>
        <div className="flex gap-2 flex-col ">
          <p className="text-sm cursor-pointer">Travel</p>
          <p className="text-sm cursor-pointer">Technology</p>
          <p className="text-sm cursor-pointer">Lifestyle</p>
          <p className="text-sm cursor-pointer">Fashion</p>
          <p className="text-sm cursor-pointer">Business</p>
        </div>
      </div>


      <div>
        <h3 className="mb-4">Quick Links</h3>
        <div className="flex gap-2 flex-col ">
          <p className="text-sm cursor-pointer">FAQ</p>
          <p className="text-sm cursor-pointer">Terms & Conditions</p>
          <p className="text-sm cursor-pointer">Support</p>
          <p className="text-sm cursor-pointer">Privacy Policy</p>
          <p className="text-sm cursor-pointer">Business</p>
        </div>
      </div>

      <div>
        <h3 className="mb-4">Subscribe For Newsletter</h3>
        <RhInputGroup>
          <RhInput></RhInput>
          <RhButton className="bg-[#00aaa1] text-white">Subscribe</RhButton>
        </RhInputGroup>

     
        <h3 className="mt-4 mb-2">Follow On</h3>
        <div className="flex gap-2">
          <RhIcon className="text-2xl cursor-pointer border" icon="openmoji:twitter"/>
          <RhIcon className="text-2xl cursor-pointer border" icon="openmoji:facebook"/>
          <RhIcon className="text-2xl cursor-pointer border" icon="openmoji:instagram"/>
          <RhIcon className="text-2xl cursor-pointer border" icon="mingcute:pinterest-line"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
